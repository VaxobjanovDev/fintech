import "./style.financial.css";
const Financials = ({ data }) => {
  const numberFormatter = new Intl.NumberFormat("en", {
    notation: "compact",
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="financials">
      <div className="financials-header">
        <div className="financials-header-icon">
          <svg
            width="12"
            height="24"
            viewBox="0 0 12 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00063 19.0934V22.5M10.847 6.34636C9.7398 5.2392 7.79146 4.47036 6.00063 4.42136L10.847 6.34636ZM1.1543 16.8464C2.19613 18.2347 4.13163 19.0257 6.00063 19.0934L1.1543 16.8464ZM6.00063 4.42136C3.8703 4.3642 1.9628 5.32903 1.9628 7.96103C1.9628 12.8074 10.847 10.3842 10.847 15.2305C10.847 17.9955 8.48213 19.182 6.00063 19.0922V4.42136ZM6.00063 4.42136V1.50003V4.42136Z"
              stroke="#4D94FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="financials-header-title">
          <h1> Founding </h1>
        </div>
      </div>

      {data?.payload?.fundings.map((lastFunding, index) => (
        <div className="financials-body" key={index}>
          <div className="financials-body__leftSide">
            <div className="financials-body-leftSide-wrapper">
              <div className="financials-body-leftside-item">
                <h4 className="financials-body-leftside-title open-sans f-600 font-12">
                  Funding Stage
                </h4>
                <p className="financials-body-letfside-desc open-sans f-600 font-12">
                  {lastFunding.fundingStage}
                </p>
              </div>
              <div className="financials-body-leftside-item">
                <h4 className="financials-body-leftside-title open-sans f-600 font-12">
                  Number of Founding rounds
                </h4>
                <p className="financials-body-letfside-desc open-sans f-600 font-12">
                  {index + 1}
                </p>
              </div>
            </div>
            <div className="financials-body-leftSide-wrapper">
              <div className="financials-body-leftside-item">
                <h4 className="financials-body-leftside-title open-sans f-600 font-12">
                  Last Funding Date
                </h4>
                <p className="financials-body-letfside-desc open-sans f-600 font-12">
                  {lastFunding.fundingDate}
                </p>
              </div>
              <div className="financials-body-leftside-item">
                <h4 className="financials-body-leftside-title open-sans f-600 font-12">
                  Last Funding Amount
                </h4>
                <p className="financials-body-letfside-desc open-sans f-600 font-12">
                  {numberFormatter.format(lastFunding.fundingAmount)}
                </p>
              </div>
            </div>
          </div>

          <div className="financials-body__rightside">
            <div className="financials-range-container">
              <div className="financials-range-card">
                <h1 className="financials-range-title">
                  Total Funding Amount
                </h1>
                <span className="financials-range-currency">
                  {numberFormatter.format(data?.payload?.totalFundingAmount)}
                </span>
              </div>
              <div className="financials-range-card">
                <h1 className="financials-range-title">
                  Estimated Revenue Range
                </h1>
                <span className="financials-range-currency">
                  {numberFormatter.format(data?.payload?.estimatedRevenueRange)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Financials;
