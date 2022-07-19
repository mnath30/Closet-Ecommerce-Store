import { AddressCard, AddressModal, Modal, Loader } from "../../Components";
import "./profile.css";
import { Link } from "react-router-dom";
import { useDisplayModal } from "../../hooks";
import { useAddress } from "../../context";
import { CURRENT_UPDATING_ADDRESS } from "../../helper/constants";

const Profile = () => {
  const fullname = localStorage.getItem("fullname");
  const { displayModal, hideModal, showModal } = useDisplayModal();
  const {
    addressState: {
      userAddressList,
      addressLoading,
      currentEditingAddress,
      editingAddress,
    },
    addressDispatch,
  } = useAddress();
  const encodedToken = localStorage.getItem("encodedToken");

  const editHandler = (item) => {
    showModal();
    addressDispatch({
      type: CURRENT_UPDATING_ADDRESS,
      payload: item,
      editing: true,
    });
  };

  return (
    <>
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
        <div>
          {addressLoading && (
            <div className="load-container">
              <Loader />
            </div>
          )}

          {!addressLoading && (
            <>
              <span className="profile-address-header">
                <p className="heading-h5 profile-name">Saved Addresses</p>
                <button
                  className="btn-card card-btn-second singleproduct__btn profile-btn"
                  onClick={showModal}
                >
                  Add New Address
                </button>
              </span>
              {userAddressList.length === 0 && (
                <p className="txt-center txt-md padding-md txt-italics">
                  You have not saved any address yet
                </p>
              )}
              {userAddressList.length !== 0 && (
                <div className="profile-address-section">
                  {userAddressList.map((item) => (
                    <AddressCard
                      address={item}
                      key={item._id}
                      edit={editHandler}
                      dispatch={addressDispatch}
                      token={encodedToken}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {displayModal && (
        <Modal displayModal={displayModal}>
          <AddressModal
            userAddress={currentEditingAddress}
            closeModal={hideModal}
            dispatch={addressDispatch}
            token={encodedToken}
            edit={editingAddress}
          />
        </Modal>
      )}
    </>
  );
};

export { Profile };
