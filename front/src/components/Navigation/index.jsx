import React from "react";
import { Link } from "react-router-dom";

import arrowSvg from "../../assets/img/arrow.svg";

import "./Navigation.scss";

const Navigation = ({ navigationList }) => (
  <>
    <div className="navigation">
      <ul>
        {navigationList.map((item, index) => {
          if (index + 1 === navigationList.length) {
            return (
              <li key={index}>
                <Link to={item.href}>{item.title}</Link>
              </li>
            );
          } else {
            return (
              <>
                <li key={index}>
                  <Link to={item.href}>{item.title}</Link>
                </li>
                <li key={index + 10}>
                  <img src={arrowSvg} alt="Arrow" />
                </li>
              </>
            );
          }
        })}
      </ul>
    </div>
  </>
);

export default Navigation;
