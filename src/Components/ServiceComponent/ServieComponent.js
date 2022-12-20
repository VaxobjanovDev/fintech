import React from "react";
import "./ServiceComponent.css";
import StartIcon from "../../images/serIcon/starIcon.svg";
import ThunderImage from "../../images/serIcon/thunder.svg";
import TelImage from "../../images/serIcon/tel.svg";

function ServieComponent({imageURL, url, rating, title, desc}) {
    return (
        <div className="main__service-container-item">
            <div className="main__banner">
                <img src={imageURL} alt="image"/>
            </div>
            <div className="main__info-description">
                <h3> {title} </h3>
                <p> {desc} </p>

                <div className="main-info__footer">
                    <img src={url}/>
                    <span className="main-info__footer-title"> Investment Firm </span>

                    <span className="main__stars">
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <span key={i}>
                  <img src={StartIcon}/>
                </span>
                ))}
          </span>
                </div>
            </div>
            <div className="main__icon">
                <div>
          <span>
            <img src={url}/>
            251-500
          </span>
                    <span>
            <img src={url}/>
            ramp.org
          </span>
                </div>
                <div>
        <span className="main__city">
            <img src={url}/>
            New York, United States
          </span>
                    <span>
            <img src={url}/>
            390
          </span>
                </div>
            </div>

            <div className="main__right">
                <button><img src={ThunderImage}/> View Profile</button>
                <button><img src={TelImage}/> Connect</button>
            </div>
        </div>
    );
}

export default ServieComponent;
