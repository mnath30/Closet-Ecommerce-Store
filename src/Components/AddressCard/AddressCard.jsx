import "./address-card.css";

const AddressCard = () => {
  return (
    <div className="card card-vert address_card">
      <p className="txt-bold address_name">Maitreyee</p>
      <p>B5 Parishram building Om nagar</p>
      <p>Ambadi road</p>
      <p>Thane-401202</p>
      <p>Maharashtra</p>
      <p>7709595063</p>
      <div className="address_btn_section">
        <button className="btn address_btn card-btn-second">Edit</button>
        <span className="separator"></span>
        <button className="btn address_btn card-btn-second">Delete</button>
      </div>
    </div>
  );
};

export { AddressCard };
