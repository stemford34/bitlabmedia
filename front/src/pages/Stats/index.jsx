import React, { useState, useEffect } from "react";

import { userApi } from "../../utils/api";

import {
  Header,
  Footer,
  Navigation,
  Table,
  Pagination,
} from "../../components";

import "./Stats.scss";

const Stats = () => {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const usersCount = 20;

  const onPageChange = (pageNumber) => {
    console.log(pageNumber.selected);
    setPage(pageNumber.selected);
  };

  useEffect(() => {
    userApi.getUsers(page, 20).then((result) => {
      setTableData(result);
    });
    userApi.getUsersCount().then((result) => {
      setPageCount(result / usersCount);
    });
  }, [page]);

  return (
    <>
      <Header />
      <div className="stats">
        <Navigation
          navigationList={[
            { href: "/", title: "Main page" },
            { href: "/", title: "User statistics" },
          ]}
        />
        <Table tableData={tableData} />
        <Pagination pageCount={pageCount} onPageChange={onPageChange} />
      </div>
      <Footer />
    </>
  );
};

export default Stats;
