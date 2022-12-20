import React from "react";
import "../style/serviceContent.css";
import "./ServiceComponent/ServiceComponent.css";
import "./SeriveComponent/ServiceComponent.css";


function  ServiceContent() {
  return (
    <div className="service__container">
      <div className="service-container_title">
        <div className="header__left">
          <h1> Startups </h1>
          <span className="main__title-line"> </span>
        </div>
        <div className="header__right">
          <button className="service__header-button"> See All </button>
        </div>
      </div>
      <div className="wrapper">

      </div>
    </div>
  );
}

export default ServiceContent;
