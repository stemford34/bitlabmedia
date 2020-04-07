const fs = require("fs");

class UserStatController {
  constructor(dbConnect) {
    this.db = dbConnect;

    this.createUserStatTable();
  }

  createUserStatTable() {
    const sql = "SELECT * FROM users_statistic";

    this.db
      .get(sql)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        const createTableSql = `CREATE TABLE users_statistic (
          user_id INT unsigned NOT NULL,
          date DATE,
          page_views INT,
          clicks INT,
          FOREIGN KEY(user_id) REFERENCES users(id)
        );`;

        this.db.run(createTableSql).then((result) => {
          const rawdata = fs.readFileSync(
            __dirname + "/db_data/users_statistic.json"
          );
          const users_statistic = JSON.parse(rawdata);
          let sqlRaw =
            "INSERT INTO users_statistic (user_id, date, page_views, clicks) VALUES";

          users_statistic.forEach((statistic, index) => {
            index + 1 === users_statistic.length
              ? (sqlRaw += ` ("${statistic.user_id}", "${statistic.date}", "${statistic.page_views}", "${statistic.clicks}");`)
              : (sqlRaw += ` ("${statistic.user_id}", "${statistic.date}", "${statistic.page_views}", "${statistic.clicks}"), `);
          });

          this.db.run(sqlRaw).then((result) => console.log(result));
        });
      });
  }

  async getUserStatTotal(user_id) {
    const sql = `SELECT page_views, clicks FROM users_statistic WHERE user_id = (?)`;
    const total = await this.db
      .all(sql, [user_id])
      .then((result) => {
        const totalObj = result.reduce(
          (item, curValue) => {
            const page_views = curValue.page_views + item.page_views;
            const clicks = curValue.clicks + item.clicks;

            return { page_views: page_views, clicks: clicks };
          },
          { page_views: 0, clicks: 0 }
        );

        return totalObj;
      })
      .catch((err) => console.log("error", err));

    return total;
  }

  getUserStatistic(req, res) {
    console.log(req.body.user_id);
    const sql = `SELECT date, page_views, clicks FROM users_statistic WHERE user_id = (?)`;
    this.db
      .all(sql, [req.body.user_id])
      .then((result) => {
        res.json(result);
      })
      .catch((err) => console.log("error", err));
  }
}

module.exports = UserStatController;
