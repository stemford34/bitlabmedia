import { http } from "../../core";

export default {
  getUsers: (page, users_count) =>
    http.postData("users", { page, users_count }),
  getUsersCount: () => http.getData("users_count"),
  getUserStatistic: (user_id) => http.postData("user_statistic", { user_id }),
  getUserName: (user_id) => http.postData("user_name", { user_id }),
};
