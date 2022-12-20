/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import dottedImage from "../images/Dot Pattern 1.png";
import RockedImg from "../images/successBoxImages/rocked.svg";
import AddUserImg from "../images/successBoxImages/AddUser.svg";
import FundingImg from "../images/successBoxImages/Funding.svg";
import ExitsChartImg from "../images/successBoxImages/ExitsChart.svg";
import Cercle from "../images/successBoxImages/cercle.svg";
import { Link, useNavigate } from "react-router-dom";
import { getCompoanyList } from "../api";
import CompanyListItem from "./CompanyListItem";
import Skeleton from "react-loading-skeleton";

function Header(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serchText, setSerchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (serchText) {
      setLoading(true);
      getCompoanyList(serchText)
        .then((res) => {
          setFilteredData(res?.data?.payload?.content);
          setLoading(false);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [serchText]);

  const handleSearchTerm = () =>
    filteredData.length > 0 && navigate("/company/" + filteredData[0]?.id);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="shadow-box"></div>
          <div className="headerContent">
            <div className="header-items">

              <h1>
                A Complete Pathfinder of <br /> FinTech Companies
              </h1>
              <p>
                Financial IT is pleased to provide comprehensive data from all
                parts of the <br /> world. Explore our list to learn about
                growing companies in this sector.
              </p>
              <div className={`search-section`}>
                <div className="search-section-icon">
                  <i className="bi bi-search"></i>
                </div>
                <input
                  type="text"
                  onChange={(e) => setSerchText(e.target.value)}
                  name="searchInput"
                  placeholder="Browse startup by location, industry and stage"
                />
                <button onClick={handleSearchTerm} id="searchBtn">
                  Search
                </button>
              </div>
              {serchText && (
                <div className="filtered__date-container">
                  <div className="comapanies_list--wrapper">
                    <table className="comapanies_list">
                      <thead className="comapanies_list__header">
                        <tr>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody className="comapanies_list__body">
                        {!loading ? (
                          filteredData.length > 0 ? (
                            filteredData.map((item) => (
                              <CompanyListItem key={item.id} data={item} />
                            ))
                          ) : (
                            <tr className="companies__list-err">
                              <td colSpan={3}>
                                Sorry your search result is empty!
                              </td>
                            </tr>
                          )
                        ) : (
                          <tr className="__loading_row">
                            <td colSpan={3}>
                              <Skeleton count={3} height={40} />
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            <img
              src={dottedImage}
              className="dotted"
              width="200px"
              height="200px"
              alt={dottedImage}
            />
          </div>
          <div className="companySuccess">
            <div className="ComSuccessBox">
              <img src={Cercle} alt="" className="cercle" />
              <img src={RockedImg} alt={RockedImg} className="iconBox" />
              <h2>23,014</h2>
              <span>Startups</span>
            </div>
            <div className="ComSuccessBox">
              <img src={Cercle} alt="" className="cercle" />
              <img src={AddUserImg} alt={AddUserImg} className="iconBox" />
              <h2>6,324</h2>
              <span>Investors & Enablers</span>
            </div>
            <div className="ComSuccessBox">
              <img src={Cercle} alt="" className="cercle" />
              <img src={FundingImg} alt={FundingImg} className="iconBox" />
              <h2>10,025</h2>
              <span>Funding Rounds</span>
            </div>
            <div className="ComSuccessBox">
              <img src={Cercle} alt="" className="cercle" />
              <img
                src={ExitsChartImg}
                alt={ExitsChartImg}
                className="iconBox"
              />
              <h2>254</h2>
              <span>Exits</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
