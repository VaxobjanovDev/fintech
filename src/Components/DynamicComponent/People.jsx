import React from "react";
import phoneSvg from "./images/phone.svg";
import TextField from "@mui/material/TextField";
// eslint-disable-next-line import/first
import MenuItem from "@mui/material/MenuItem";
// eslint-disable-next-line import/first
// eslint-disable-next-line import/first
import SearchIcon from "@mui/icons-material/Search";
// eslint-disable-next-line import/first
import IconButton from "@mui/material/IconButton";
import PeopleFounders from "../PeopleCard/PeopleFounders";
const People = ({ data }) => {
  const peoples = [
    {
      value: "Sherali Musk",
      label: "GM",
    },
    {
      value: "Alisher Fayz",
      label: "UZS",
    },
    {
      value: "Nil Gerry",
      label: "RUB",
    },
    {
      value: "Lion John",
      label: "ENG",
    },
  ];
  const [currency, setCurrency] = React.useState("Alisher Fayz");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="founder">
      <div className="founder-container">
        <h1 className="founder-title">
          Number of Founders <span>{data?.payload?.founders?.length}</span>
        </h1>

        <div className="founders-item-container">
          <PeopleFounders
            profileImage={
              "https://i.guim.co.uk/img/media/5cce673e30312e296798c9e41d674ad77a827339/372_146_2367_1420/master/2367.jpg?width=1300&quality=85&fit=max&s=126814e6c4260536c5ff44c0495c21f1"
            }
            name="She'rali Musk"
            position={"Founder"}
            phoneNumber={"+99890 000 00 00"}
          />

          <PeopleFounders
            profileImage={
              "https://n1.quvonch.com/uploads/posts/artis/alisher-fayz.jpg"
            }
            name="Alisher Fayz"
            position={"Founder"}
            phoneNumber={"+99890 777 00 00"}
          />
        </div>

        <div className="founder-title-contact">
          <div className="founder-contact-icon">
            <img src={phoneSvg} alt="logo" />
          </div>
          <h1 className="founder-title contact">Contact</h1>
        </div>
        <div className="search-container">
          <div className="seleted-input">
            <TextField
              id="filled-select-currency"
              select
              className="select-inp"
              label="Job Departament"
              value={currency}
              onChange={handleChange}
              variant="filled"
            >
              {peoples.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="search-textfield">
            <input
              className="text"
              onInput={(e) => {}}
              placeholder="Search people..."
            />
            <IconButton
              style={{ color: "#0052B3" }}
              type="submit"
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div style={{ marginTop: "28px" }} className="contact">
          <div className="founders-item-container">
            <PeopleFounders
              name="She'rali Musk"
              position={"Founder"}
              phoneNumber={"+99890 000 00 00"}
            />

            <PeopleFounders
              name="Alisher Fayz"
              position={"Founder"}
              phoneNumber={"+99890 777 00 00"}
            />
          </div>

          <div className="founders-item-container">
            <PeopleFounders
              name="She'rali Musk"
              position={"Founder"}
              phoneNumber={"+99890 000 00 00"}
            />

            <PeopleFounders
              name="Alisher Fayz"
              position={"Founder"}
              phoneNumber={"+99890 777 00 00"}
            />
          </div>

          <div className="founders-item-container">
            <PeopleFounders
              name="She'rali Musk"
              position={"Founder"}
              phoneNumber={"+99890 000 00 00"}
            />

            <PeopleFounders
              name="Alisher Fayz"
              position={"Founder"}
              phoneNumber={"+99890 777 00 00"}
            />
          </div>

          <div className="founders-item-container">
            <PeopleFounders
              name="She'rali Musk"
              position={"Founder"}
              phoneNumber={"+99890 000 00 00"}
            />

            <PeopleFounders
              name="Alisher Fayz"
              position={"Founder"}
              phoneNumber={"+99890 777 00 00"}
            />
          </div>

          <div className="founder-show-container">
            <button className="founder-show-btn"> Show More </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
