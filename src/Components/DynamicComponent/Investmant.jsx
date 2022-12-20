import "./style.investmant.css";

const Investmant = () => {
  return (
    <div className="investment">
      <div className="investment-wrapper">
        <div className="investment-item">
          <h4 className="investment-title">Number of Lead Investors</h4>
          <p className="investment-description">3</p>
        </div>
        <div className="investment-item ">
          <h4 className="investment-title">Number of Investors</h4>
          <p className="investment-description">20</p>
        </div>
      </div>
      <div className="investment-wrapper">
        <div className="investment-item">
          <h4 className="investment-title">Number of Lead Investors</h4>
          <ul className="investment-list">
            <li className="investment-list-item"> James Adam - Facebook </li>
            <li className="investment-list-item">Andrey Nikolay - Domain.Ru</li>
          </ul>
        </div>
        <div className="investment-item">
          <h4 className="investment-title">Other Investors</h4>
          <ul className="investment-list main">
            <li className="investment-list-item">Olim jamolov - Space UZB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Investmant;
