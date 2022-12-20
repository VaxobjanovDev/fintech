import React, { useState } from "react";
import "./style.navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-header__leftside">
            <div className="navbar-header-icons">
              <div className="navbar-header__icon">
                <Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                  </svg>
                </Link>
              </div>
              <div className="navbar__header-title">
                <h4 className="navbar__header-location_info">
                  Namangan Uzbekistan Boburshoh 40
                </h4>
              </div>
            </div>
            <div className="navbar-header-icons">
              <div className="navbar-header__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM328.1 304.1C338.3 295.6 338.3 280.4 328.1 271C319.6 261.7 304.4 261.7 295 271L200 366.1L152.1 319C143.6 309.7 128.4 309.7 119 319C109.7 328.4 109.7 343.6 119 352.1L183 416.1C192.4 426.3 207.6 426.3 216.1 416.1L328.1 304.1z" />
                </svg>
              </div>
              <div className="navbar__header-title">
                <h4 className="navbar__header-location_info">
                  Monday 16 May 2022 / 06:58
                </h4>
              </div>
            </div>
            <div className="navbar-header-dropdown">
              <div className="navbar-header-dropdown-leftside">
                <div className="navbar-header-dropdown-item">
                  <img
                    src="https://w7.pngwing.com/pngs/882/778/png-transparent-union-jack-flah-england-flag-of-the-united-kingdom-flag-of-great-britain-national-flag-england-blue-angle-flag.png"
                    alt="header-dropdown-logo"
                  />
                  <span className="navbar-header-dropdown_subscribe">Eng</span>
                </div>
                <div className={`${drop && "active"}  dropdown__list`}>
                  <div
                    className="navbar-header-dropdown-item"
                    onClick={() => setDrop(false)}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png"
                      alt="header-dropdown-logo"
                    />
                    <span className="navbar-header-dropdown_subscribe">Uz</span>
                  </div>
                  <div
                    className="navbar-header-dropdown-item"
                    onClick={() => setDrop(false)}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
                      alt="header-dropdown-logo"
                    />
                    <span className="navbar-header-dropdown_subscribe">
                      Rus
                    </span>
                  </div>
                </div>
              </div>
              <div className="header__dropdown-btn">
                <svg
                  onClick={() => setDrop(true)}
                  width="6"
                  height="4"
                  viewBox="0 0 6 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M3.32705 3.93902C3.01537 4.06348 2.62628 3.99116 2.43508 3.77904L2.41026 3.74926L0.0844571 0.721863C0.0290625 0.649758 2.16302e-07 0.568685 2.10043e-07 0.486259C1.90502e-07 0.228895 0.277325 0.0182303 0.628278 0.00112158L0.674455 5.92149e-08L5.32542 -4.08936e-07C5.43972 -4.20441e-07 5.55215 0.0209425 5.65214 0.0608621C5.96384 0.185299 6.08526 0.461454 5.93731 0.690841L5.91546 0.721812L3.5903 3.74921C3.52899 3.82903 3.43777 3.89481 3.32705 3.93902Z"
                    fill="#464C52"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="navbar-header__rightside">
            <button className="header__rightside-btn"> Login </button>
            <button className="header__rightside-btn"> Sign Up </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
