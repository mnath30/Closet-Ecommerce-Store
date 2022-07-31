const SummaryCard = ({ item }) => {
  const { itemname, price, qty, brand, source, information } = item;
  return (
    <div class="card card-horiz summary-card">
      <div class="card-img-horiz">
        <img class="responsive-img" src={source} alt={information} />
      </div>
      <div class="card-body">
        <h5 class="card-header">{brand}</h5>
        <p class="card-para">
          {itemname} <br />
          Rs. {price}
        </p>
        <p className="txt-sm padding-sm">Quantity: {qty}</p>
      </div>
    </div>
  );
};

export { SummaryCard };
