import React, { useEffect, useState } from "react";

import { userApi } from "../../utils/api";
import { Header, Navigation, Footer, Chart } from "../../components";

import "./User.scss";

const User = ({ match }) => {
  const [options, setOptions] = useState(null);
  const [page_viewsSeries, setPage_viewsSeries] = useState(null);
  const [clicksSeries, setClicksSeries] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    userApi.getUserName(match.params.id).then((result) => setUserName(result));
    userApi.getUserStatistic(match.params.id).then((result) => {
      const opt = {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: result.map((item) => item.date),
        },
      };
      const pv = [
        {
          name: "Page views",
          data: result.map((item) => item.page_views),
        },
      ];
      const cl = [
        {
          name: "Clicks",
          data: result.map((item) => item.clicks),
        },
      ];
      setOptions(opt);
      setPage_viewsSeries(pv);
      setClicksSeries(cl);
    });
  }, [match]);

  return (
    <>
      <Header />
      {options && page_viewsSeries && clicksSeries && (
        <div className="container">
          <Navigation
            navigationList={[
              { href: "/", title: "Main page" },
              { href: "/stats", title: "User statistics" },
              {
                href: `/user/${match.params.id}`,
                title: `${userName.first_name} ${userName.last_name}`,
              },
            ]}
          />
          <div className="charts">
            <div className="user-name">
              {userName.first_name} {userName.last_name}
            </div>
            <Chart options={options} series={clicksSeries} name="Clicks" />
            <Chart
              options={options}
              series={page_viewsSeries}
              name="Page views"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default User;
