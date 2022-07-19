import { AddressCard } from "../../Components";
import "./profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const fullname = localStorage.getItem("fullname");
  return (
    <div>
      <div className="profile-name">
        <span className="profile-info">
          <p className="heading-h5 profile-name">Hello {fullname}</p>
          <Link
            to="/logout"
            className="btn-card singleproduct__btn profile-btn btn-logout"
          >
            Logout
          </Link>
        </span>
      </div>
      <div className="hr"></div>
      <div className="profile-address">
        <span className="profile-address-header">
          <p className="heading-h5 profile-name">Saved Addresses</p>
          <button className="btn-card card-btn-second singleproduct__btn profile-btn">
            Add New Address
          </button>
        </span>
        <div className="profile-address-section">
          <AddressCard />
        </div>
      </div>
    </div>
  );
};

export { Profile };
