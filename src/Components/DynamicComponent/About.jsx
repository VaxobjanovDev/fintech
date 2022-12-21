import "./style.about.css";
import {Email, Language, LinkedIn} from "@mui/icons-material";
import {Link} from "react-router-dom";

const About = ({data}) => {
 return (
  <div className="main__about">
   <div className="main__about-header">
    <div className="main__about-header-icon">
     <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <path
       d="M8.72262 5.40834C6.34262 8.08 4.70929 11.9183 4.55762 12.28L1.92095 11.1483C1.16262 10.8217 0.975955 9.83 1.55929 9.24667L5.07095 5.735C5.61929 5.18667 6.41262 4.94167 7.18262 5.09334L8.72262 5.40834ZM10.461 17.2617C10.811 17.6117 11.3243 17.705 11.7676 17.495C13.121 16.865 16.026 15.3833 17.9043 13.505C23.2593 8.15 23.306 3.78667 22.991 1.92C22.9497 1.69071 22.8392 1.47953 22.6745 1.31479C22.5098 1.15005 22.2986 1.03963 22.0693 0.998337C20.2026 0.683337 15.8393 0.730003 10.4843 6.085C8.60596 7.96334 7.13596 10.8683 6.49429 12.2217C6.28429 12.665 6.38929 13.19 6.72762 13.5283L10.461 17.2617ZM18.5926 15.2783C15.921 17.6583 12.0826 19.2917 11.721 19.4433L12.8526 22.08C13.1793 22.8383 14.171 23.025 14.7543 22.4417L18.266 18.93C18.8143 18.3817 19.0593 17.5883 18.9076 16.8183L18.5926 15.2783ZM8.43095 18.3117C8.54409 18.8767 8.51596 19.4609 8.34907 20.0125C8.18218 20.564 7.8817 21.0658 7.47429 21.4733C6.57595 22.3717 3.78762 23.0367 1.97929 23.3867C1.17429 23.5383 0.462622 22.8267 0.614288 22.0217C0.964288 20.2133 1.61762 17.425 2.52762 16.5267C2.93514 16.1193 3.43695 15.8188 3.9885 15.6519C4.54004 15.485 5.12426 15.4569 5.68929 15.57C7.05429 15.8267 8.17429 16.9467 8.43095 18.3117ZM13.1676 8.5C13.1676 7.21667 14.2176 6.16667 15.501 6.16667C16.7843 6.16667 17.8343 7.21667 17.8343 8.5C17.8343 9.78334 16.7843 10.8333 15.501 10.8333C14.2176 10.8333 13.1676 9.78334 13.1676 8.5Z"
       fill="#4D94FF"
      />
     </svg>
    </div>
    <h1 className="f-700">About</h1>
   </div>
   <div className="main__about-body">
    <div className="main__about-info">
     <p className="open-sans f-600 font-12">
      {data?.payload?.description}
     </p>
     <button className="read-more-btn"> Read More</button>
    </div>
    <div className="main__about-social-links">
     <div className="main__about-social-item">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
       <path
        d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/>
      </svg>
      <span className="open-sans f-600 font-12">
              {data?.payload?.headquarters}
      </span>
     </div>
     <div className="main__about-social-item">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
       <path
        d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
      </svg>
      <span className="open-sans f-600 font-12">500-2003</span>
     </div>
     <div className="contact">
       <Link target={"_blank"} rel="noreferrer" className={"contact-social-button"} to={"/about"}  onClick={() => window.open(data?.payload?.website)}>
        <div className="icons">
         <Language/>
        </div>
        {data?.payload?.website}
       </Link>
       <Link  target={"_blank"} rel="noreferrer" className={"contact-social-button"} to={"/about"} onClick={() => window.open(data?.payload?.linkedIn)}>
        <div className="icons">
         <LinkedIn/>
        </div>
        {data?.payload?.linkedIn}
       </Link>
       <Link target={"_blank"} rel="noreferrer" className={"contact-social-button"} to={"/about"} onClick={() =>window.open("mailto:"+data?.payload?.email)}>
        <div className="icons">
         <Email/>
        </div>
        {data?.payload?.email}
       </Link>
     </div>
    </div>
   </div>
   <main className="mian__about-details">
    <h1 className="f-700">Details</h1>
    <div className="main__about-detail-container">
     <div className="main__about-details-overlay">
      <div className="main__about-detail-item title">
       <h4 className="main__about-detail-title">Industries</h4>
       <div className="main__about-detail-btn">
        <button className="open-sans f-600 font-12">Finance</button>
        <button className="open-sans f-600 font-12">
         Financial Service
        </button>
        <button className="open-sans f-600 font-12">FinTech</button>
       </div>
      </div>
      <div className="main__about-detail-item">
       <h4 className="main__about-detail-title">Headquarters Regions</h4>
       <p className="main__about-detail-description">
        Greater New York Area, East Coast, Northeastern US
       </p>
      </div>
     </div>
     <div className="main__about-details-overlay">
      <div className="main__about-detail-item">
       <h4 className="main__about-detail-title">Founded Date</h4>
       <p className="main__about-detail-description">{data?.payload?.inceptionDate}</p>
      </div>
      <div className="main__about-detail-item">
       <h4 className="main__about-detail-title">Founders </h4>
       <p className="main__about-detail-description">
        Barrick Bain Rothchild, Eric Glyman, Gene Lee, Karim Atiyeh,
        Santana Henry
       </p>
      </div>
     </div>
     <div className="main__about-details-overlay">
      <div className="main__about-detail-item">
       <h4 className="main__about-detail-title">Operating Status</h4>
       <p className="main__about-detail-description">Active</p>
      </div>
      <div className="main__about-detail-item">
       <h4 className="main__about-detail-title">Last Funding Type </h4>
       <p className="main__about-detail-description">Debt Financing</p>
      </div>
     </div>
     <div className="main__about-details-overlay">
      <div className="main__about-detail-item">
       <h4 className="main__about-detail-title">Also Known As</h4>
       <p className="main__about-detail-description">Ramp Financial</p>
      </div>
      <div className="main__about-detail-item">
       <h4 className="main__about-detail-title">Legal Name </h4>
       <p className="main__about-detail-description">
        Ramp Business Corporation
       </p>
      </div>
     </div>
    </div>
   </main>
  </div>
 );
};

export default About;
