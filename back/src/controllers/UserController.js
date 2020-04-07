const fs = require("fs");

const UserStatController = require("./UserStatController");

class UserController {
  constructor(dbConnect) {
    this.db = dbConnect;

    this.createUserTable();
  }

  createUserTable() {
    const sql = "SELECT * FROM users";
    this.db
      .get(sql)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        const createTableSql = `CREATE TABLE "users" (
          "id" INT unsigned NOT NULL,
          "first_name" VARCHAR,
          "last_name" VARCHAR,
          "email" VARCHAR,
          "gender" VARCHAR,
          "ip_address" VARCHAR,
          PRIMARY KEY ("id")
        );`;

        this.db.run(createTableSql).then((result) => {
          const rawdata = fs.readFileSync(__dirname + "/db_data/users.json");
          const users = JSON.parse(rawdata);
          let sqlRaw =
            "INSERT INTO users (id, first_name, last_name, email, gender, ip_address) VALUES ";

          users.forEach((user, index) => {
            index + 1 === users.length
              ? (sqlRaw += `("${user.id}", "${user.first_name}", "${user.last_name}", "${user.email}", "${user.gender}", "${user.ip_address}");`)
              : (sqlRaw += `("${user.id}", "${user.first_name}", "${user.last_name}", "${user.email}", "${user.gender}", "${user.ip_address}"),`);
          });

          this.db.all(sqlRaw).then((result) => console.log(result));
        });
      });
  }

  getUsers(req, res) {
    console.log("req.body", req.body);
    const sql = `SELECT * FROM users WHERE id BETWEEN ${
      req.body.users_count * req.body.page
    } and ${req.body.users_count * req.body.page + req.body.users_count};`;

    this.db.all(sql).then(async (result) => {
      const resWithTotal = await Promise.all(
        result.map(async (user) => {
          const total = await new UserStatController(this.db).getUserStatTotal(
            user.id
          );
          // console.log("total", Object.assign(user, total));
          return Object.assign(user, total);
        })
      );

      console.log("resWithTotal", resWithTotal);
      res.json(resWithTotal);
    });
  }

  getUsersCount(req, res) {
    const sql = "SELECT COUNT(*) FROM users;";
    this.db.get(sql).then((result) => res.json(...Object.values(result)));
  }

  getUserName(res, req) {
    const sql = "SELECT first_name, last_name FROM users WHERE id = (?);";
    this.db.get(sql, [res.body.user_id]).then((result) => req.json(result));
  }
}

module.exports = UserController;
