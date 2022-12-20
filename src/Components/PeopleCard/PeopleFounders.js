/* eslint-disable jsx-a11y/img-redundant-alt */
import DefaultUserImage from "../DynamicComponent/images/default-user.svg";
import linkedinImage from "../DynamicComponent/images/linkedin-image.svg";
import phoneSvg from "../DynamicComponent/images/phone.svg";

const PeopleFounders = ({
  profileImage,
  name,
  position,
  phoneNumber,
  linkedinUrl,
}) => {
  return (
    <div className="founder-item">
      <div className="founder-image">
        <div className="founder-image-item">
          <img src={profileImage ?? DefaultUserImage} alt="user image" />
        </div>
      </div>
      <div className="founder-info">
        <div className="founder-info-item">
          <h4 className="founder-info__title open-sans f-600 font-12">Name</h4>
          <span className="founder-info__desc open-sans f-600 font-12">
            {name}
          </span>
        </div>
        <div className="founder-info-item">
          <h4 className="founder-info__title open-sans f-600 font-12">
            Position
          </h4>
          <span className="founder-info__desc open-sans f-600 font-12">
            {position}
          </span>
        </div>
      </div>
      <div className="founder-social">
        <div className="founder-social__links">
          <a
            href={`tel:${phoneNumber}`}
            className="founder-link open-sans f-600 font-12"
          >
            <button className="founder-social-btn ">
              <img
                className="founder-social__image"
                src={phoneSvg}
                alt="socialimage"
              />
              <span className="open-sans f-600 font-12">{phoneNumber}</span>
            </button>
          </a>

          <a href="https://linkedin.com" className="founder-link">
            <button className="founder-social-btn">
              <img
                className="founder-social__image"
                src={linkedinImage}
                alt="socialimage"
              />
              <span className="open-sans f-600 font-12">View in Linkedin</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PeopleFounders;
