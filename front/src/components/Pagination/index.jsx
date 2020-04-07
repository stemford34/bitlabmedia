import React from "react";

import ReactPaginate from "react-paginate";

import arrowSvg from "../../assets/img/arrow.svg";
import arrowBlueSvg from "../../assets/img/arrowBlue.svg";

import "./Pagination.scss";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      pageRangeDisplayed="1"
      containerClassName="pagination"
      breakClassName="pagination__tab"
      pageClassName="pagination__tab"
      activeClassName="pagination__tab pagination__tab--enable"
      previousClassName="pagination__tab--prev"
      nextClassName="pagination__tab--next pagination__tab--next--enable"
    />
  );
};

export default Pagination;
