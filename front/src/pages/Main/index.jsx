import React from "react";
import { Link } from "react-router-dom";

import "./Main.scss";

import cleanDesign from "../../assets/img/cleanDesign.svg";
import secureData from "../../assets/img/secureData.svg";
import retinaReady from "../../assets/img/retinaReady.svg";
import macbook from "../../assets/img/macbook.svg";

import basic from "../../assets/img/basic.svg";
import standart from "../../assets/img/standart.svg";
import unlimited from "../../assets/img/unlimited.svg";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="purpose">
          <div>
            <div className="logo">AppCo</div>
          </div>
          <div>
            <div>
              <div className="purpose__text">
                <b>Brainstorming </b>
                for desired perfect Usability
              </div>
              <p>
                Our design projects are fresh and simple and will benefit your
                business greatly. Learn more about our work!
              </p>
              <Link to="/stats">
                <div className="btn purpose__btn">
                  <p>View Stats</p>
                </div>
              </Link>
            </div>
            <div>
              <div className="iphone"></div>
            </div>
          </div>
        </div>
        <div className="reason">
          <div className="reason__text">
            Why{" "}
            <b>
              small business owners <br /> love
            </b>{" "}
            AppCo?
            <p>
              Our design projects are fresh and simple and will benefit your
              business <br /> greatly. Learn more about our work!
            </p>
          </div>
          <div className="reason__tabs">
            <div className="tab reason__tabs--tab">
              <img src={cleanDesign} alt="Clean Design" />
              <div className="tab__item">Clean Design</div>
              <p className="tab__text">
                Increase sales by showing true dynamics of your website.
              </p>
            </div>
            <div className="tab reason__tabs--tab">
              <img src={secureData} alt="Secure Data" />
              <div className="tab__item">Secure Data</div>
              <p className="tab__text">
                Build your online store’s trust using Social Proof & Urgency.
              </p>
            </div>
            <div className="tab reason__tabs--tab">
              <img src={retinaReady} alt="Retina Ready" />
              <div className="tab__item">Retina Ready</div>
              <p className="tab__text">
                Realize importance of social proof in customer’s purchase
                decision.
              </p>
            </div>
          </div>
        </div>
        <div className="learn-more">
          <div>
            <b>Start Managing your apps business, more faster</b>
            <p>
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without
              goal-oriented catalysts for change. Collaboratively.
            </p>
            <div className="btn learn-more__btn">
              <p>Learn more</p>
            </div>
          </div>
          <div>
            <div className="macbook">
              <img src={macbook} alt="Macbook" />
            </div>
          </div>
        </div>
        <div className="packages">
          <div className="packages__info">
            <b>
              Afforadble Pricing and Packages
              <br />
            </b>
            choose your best one
            <p>
              Monotonectally grow strategic process improvements vis-a-vis
              <br />
              integrated resources.
            </p>
          </div>
          <div className="packages__tabs">
            <div className="tab packages__tabs--tab">
              <div className="tab__item">Basic</div>
              <img src={basic} alt="Basic" />
              <p className="price">$29</p>
              <div className="line"></div>
              <p className="tab__text">
                Push Notifications Data Transfer SQL Database Search & SEO
                Analytics 24/7 Phone Support 2 months technical support 2+
                profitable keyword
              </p>
              <div className="btn btn--blue packages__btn">Purchase now</div>
            </div>
            <div className="tab packages__tabs--tab">
              <div className="tab__item">Standart</div>
              <img src={standart} alt="Standart" />
              <p className="price price--blue">$149</p>
              <div className="line"></div>
              <p className="tab__text">
                Push Notifications Data Transfer SQL Database Search & SEO
                Analytics 24/7 Phone Support 2 months technical support 2+
                profitable keyword
              </p>
              <div className="btn btn--blue packages__btn">Purchase now</div>
            </div>
            <div className="tab packages__tabs--tab">
              <div className="tab__item">Unlimited</div>
              <img src={unlimited} alt="Unlimited" />
              <p className="price">$39</p>
              <div className="line"></div>
              <p className="tab__text">
                Push Notifications Data Transfer SQL Database Search & SEO
                Analytics 24/7 Phone Support 2 months technical support 2+
                profitable keyword
              </p>
              <div className="btn btn--blue packages__btn">Purchase now</div>
            </div>
          </div>
        </div>
        <div className="contact">
          <p>
            If you need custom services or Need more? <a href="/">Contact us</a>
          </p>
        </div>
        <div className="bottom">
          <div>
            <div className="subscribe">
              <input type="text" placeholder="Enter your email" />
              <div className="btn btn--blue">
                <p>Subscribe</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="logo">AppCo</p>
            </div>
            <div className="column-center">
              <p>All rights reserved by ThemeTags</p>
            </div>
            <div className="column-center">
              <p>Copyrights © 2019.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
