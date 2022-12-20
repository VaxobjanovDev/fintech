/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./style.content.css";
import {useNavigate, useLocation, Link} from "react-router-dom";
import Zip24Banner from "../images/zip-24-banner.png";
import About from "../Components/DynamicComponent/About";
import { getCompanyById } from "../api";
import Financials from "../Components/DynamicComponent/Financials";
import Investmant from "../Components/DynamicComponent/Investmant";
import People from "../Components/DynamicComponent/People";
import homeBannerSvg from "../images/home-banner.svg";
const Content = () => {
  const navigate = useNavigate();
  const [getById, setGetById] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("summary");

  const location = useLocation()
  let id = location.state


  useEffect(() => {
    const getCompany = async () => {
      const companyList = await getCompanyById(id);
      setGetById(companyList.data);
    };
    if (id === null) {
      navigate("/");
    } else {
      getCompany();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dynamicTitle = [
    {
      title: "Summary",
    },
    {
      title: "Financials",
    },
    {
      title: "Investments",
    },
    {
      title: "People",
    },
    {
      title: "News",
    },
    {
      title: "Similar Companies",
    },
  ];

  const handleSelectedComponent = (selectedTitle) => {
    if (selectedTitle.toLowerCase().includes("companies")) {
      let changedCompany = selectedTitle.split(" ");
      setSelectedComponent(changedCompany[0].toLowerCase());
    } else {
      setSelectedComponent(selectedTitle);
    }
  };

  const dynamicComponent = {
    summary: {
      title: "Summary",
      component: <About data={getById} />,
    },
    financials: {
      title: "Financials",
      component: <Financials data={getById} />,
    },
    investments: {
      title: "Ivestments",
      component: <Investmant />,
    },
    people: {
      title: "People",
      component: <People data={getById} />,
    },
    news: {
      title: "News",
      component: <News />,
    },
    similar: {
      title: "Similar Companies",
      component: <SimilarCompanies />,
    },
  };
  return (
    <div className="main__content-wrapper">
      <div className={"container"}>
        <div
          className={"main__content-banner"}
          style={{ backgroundImage: `url(${homeBannerSvg})` }}
        />
        <div className="main__content-header main__content-header-container">
          <div className={"main__content-logo"}>
            <img
              className={"main__content-header__logo"}
              src={
                getById?.payload?.imgLink
              }
              alt={"logo"}
            />
          </div>
          <div className={"main__content-header-info"}>
            <div className={"main__content-btn"}>
              <div className={"main__content-header-title"}>
                <h1> {getById?.payload?.name} </h1>
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM11 19.7188C6.18594 19.7188 2.28125 15.8141 2.28125 11C2.28125 6.18594 6.18594 2.28125 11 2.28125C15.8141 2.28125 19.7188 6.18594 19.7188 11C19.7188 15.8141 15.8141 19.7188 11 19.7188ZM12.118 10.4562L11.5227 10.318V7.17031C12.4133 7.29219 12.9641 7.85 13.0578 8.53437C13.0695 8.62812 13.1492 8.69609 13.243 8.69609H14.2953C14.4055 8.69609 14.4922 8.6 14.4828 8.48984C14.3398 7.02969 13.1375 6.09219 11.532 5.93047V5.16406C11.532 5.06094 11.4477 4.97656 11.3445 4.97656H10.6859C10.5828 4.97656 10.4984 5.06094 10.4984 5.16406V5.9375C8.83906 6.09922 7.54062 7.01562 7.54062 8.72656C7.54062 10.3109 8.70781 11.075 9.93359 11.368L10.5125 11.5156V14.8602C9.47656 14.7219 8.89531 14.1688 8.77578 13.4234C8.76172 13.3344 8.68203 13.2687 8.59063 13.2687H7.50781C7.39766 13.2687 7.31094 13.3625 7.32031 13.4727C7.42578 14.7617 8.40313 15.9477 10.4891 16.1V16.8359C10.4891 16.9391 10.5734 17.0234 10.6766 17.0234H11.3422C11.4453 17.0234 11.5297 16.9391 11.5297 16.8336L11.525 16.0906C13.3602 15.9289 14.6727 14.9469 14.6727 13.1844C14.6703 11.5578 13.6367 10.8312 12.118 10.4562ZM10.5102 10.0766C10.3789 10.0391 10.2688 10.0039 10.1586 9.95938C9.36641 9.67344 8.99844 9.21172 8.99844 8.61641C8.99844 7.76562 9.64297 7.28047 10.5102 7.17031V10.0766ZM11.5227 14.8672V11.7336C11.5953 11.7547 11.6609 11.7711 11.7289 11.7852C12.8375 12.1227 13.2102 12.5914 13.2102 13.3109C13.2102 14.2273 12.5211 14.7781 11.5227 14.8672Z"
                      fill="#8492A6"
                    />
                  </svg>
                  {getById?.payload?.industries}
                </span>
              </div>

              <div className={"main__content-buttons"}>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
                  </svg>
                  Request Demo
                </button>
                <button>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3764 7.00763C12.3822 6.56245 12.1411 6.15329 11.7494 5.93853L2.62366 0.924558C2.21491 0.693546 1.73307 0.721927 1.34791 0.984933C0.95569 1.25237 0.754932 1.88901 0.864577 2.34882L1.71651 5.91809C1.80397 6.28409 2.13153 6.5418 2.50839 6.54019L7.58686 6.52443C7.84693 6.51922 8.05784 6.73013 8.05262 6.99019C8.05183 7.24583 7.84403 7.45364 7.58396 7.45885L2.50065 7.47065C2.1238 7.47138 1.79463 7.73025 1.7049 8.0968L0.822844 11.6803C0.715748 12.1037 0.83785 12.5265 1.13664 12.8253C1.17179 12.8604 1.21134 12.9 1.25091 12.9307C1.63785 13.2292 2.14461 13.2673 2.57726 13.0368L11.734 8.07185C12.1269 7.86348 12.3706 7.45282 12.3764 7.00763Z"
                      fill="white"
                    />
                  </svg>
                  Connect
                </button>
              </div>
            </div>
            <div className={"main__content-header-footer"}>
              <div className="main__content-header-scroll">
                {dynamicTitle.map((dynamic, index) => (
                  <button
                    onClick={() => handleSelectedComponent(dynamic.title)}
                    className={`
                      ${
                        selectedComponent.toLowerCase() ===
                        dynamic.title.toLowerCase()
                          ? "active-btn"
                          : "btn"
                      }
                      f-600
                    `}
                    key={index}
                  >
                    {dynamic.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="main__dynamic-component">
          {dynamicComponent[selectedComponent.toLowerCase()].component}
        </div>
        <div className="main__content-footer-banner">
          <img src={Zip24Banner} alt="company banner logo" />
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line import/first

const News = () => {
  return <div>News</div>;
};

const SimilarCompanies = () => {
  return <div> Similar Companies </div>;
};

export default Content;
