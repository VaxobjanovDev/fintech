import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import './card.css'
import React from "react";
import millify from "millify";
import {Link} from "react-router-dom";

export const Card = ({card}) => {
 let totalFundingAmount = millify(card?.totalFundingAmount)
 return (
  <div className="card">
   <div className="container-xl">
    <div className="row">
     <div className="col-lg-4 col-md-12 d-flex">
      <img
       src={card?.imgLink}
       alt="Logo-Company"
      />
      <div className="card-title">
       <h3>{card?.name}</h3>
       <p>
        367 Number of Organizations • ${totalFundingAmount} Total Funding Amount • {card?.numberOfInvestors} Number of
        Investors
       </p>
       <div className="rating">
        <MonetizationOnOutlinedIcon/>
        <span>Investment firm</span>
        <div className="rating-icon-box">
         <StarIcon className="rating-icon"/>
         <StarIcon className="rating-icon"/>
         <StarIcon className="rating-icon"/>
         <StarIcon className="rating-icon"/>
         <StarIcon className="rating-icon"/>
        </div>
       </div>
      </div>
     </div>
     <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="items-column">
       <div className="card-info-item">
        <PeopleOutlineIcon/>
        <p>{card?.companySizeMin}-{card?.companySizeMax}</p>
       </div>
       <div className="card-info-item">
        <LocationOnIcon/>
        <p>{card?.headquarters}</p>
       </div>
      </div>
     </div>
     <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="items-column">
       <div className="card-info-item">
        <LanguageIcon/>
        <p>{card?.website}</p>
       </div>
       <div className="card-info-item">
        <InsertChartOutlinedOutlinedIcon/>
        <p>390</p>
       </div>
      </div>
     </div>
     <div className="col-lg-2 col-md-4">
      <div className="card-buttons">
       <Link to={"/company/" + card.id} state={card.id}>
        <button className={"card-button"}>
         <ElectricBoltOutlinedIcon className="button-icon"/>
         View profile
        </button>
       </Link>
       <button className={"card-button"}>
        <SendIcon className="button-icon"/> Connect
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
)
}