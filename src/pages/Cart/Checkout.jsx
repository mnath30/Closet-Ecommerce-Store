import "./cart.css";
import { useAddress } from "../../context";
import {
  TotalPrice,
  AddressModal,
  Modal,
  CheckoutAddressCard,
} from "../../Components";
import { useDisplayModal } from "../../hooks";

const Checkout = () => {
  const {
    addressState: { userAddressList },
    addressDispatch,
  } = useAddress();
  const { displayModal, hideModal, showModal } = useDisplayModal();
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <>
      <div className="padding-lg">
        <h4 className="heading-h4 txt-center txt-lg">Address</h4>
        <div className="grid">
          <div className="checkout__summary_section">
            <TotalPrice btn="Continue" path={""} />
          </div>
          <div className="address__selector_container">
            <span className="profile-address-header">
              <p className="heading-h5 profile-name">Select Delivery Address</p>
              <button
                className="btn-card card-btn-second singleproduct__btn"
                onClick={showModal}
              >
                Add New Address
              </button>
            </span>
            {userAddressList.length === 0 && (
              <p>You have not added any address yet</p>
            )}
            {userAddressList.length !== 0 &&
              userAddressList.map((item) => (
                <CheckoutAddressCard address={item} />
              ))}
          </div>
        </div>
      </div>
      {displayModal && (
        <Modal displayModal={displayModal}>
          <AddressModal
            closeModal={hideModal}
            dispatch={addressDispatch}
            token={encodedToken}
          />
        </Modal>
      )}
    </>
  );
};

export { Checkout };
