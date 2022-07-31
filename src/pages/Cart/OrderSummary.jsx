import { useCartWishlist } from "../../context";
import { Link } from "react-router-dom";
import { EmptyPage, SummaryCard } from "../../Components";
import { emptyorders } from "../../asset";

const OrderSummary = () => {
  const {
    cartWishlist: {
      latestOrder: { paymentId, orderItems, orderTotal, shippingAddress },
    },
  } = useCartWishlist();

  return (
    <div>
      <h4 className="heading-h4 txt-center padding-md">
        Latest Purchase Summary
      </h4>
      {orderItems.length === 0 && (
        <div className="padding-lg">
          <EmptyPage
            item={{
              source: emptyorders,
              information: "empty-bag",
              message: "No Previous Orders",
            }}
          />
          <p className="txt-md padding-md">
            You have not made any purchase yet. Shop for{" "}
            <Link to="/product" className="link">
              products
            </Link>
          </p>
        </div>
      )}
      {orderItems.length !== 0 && (
        <div>
          <div className="card card-vert address_card">
            <div>
              <span className="txt-bold padding-sm">Payment ID:</span>
              {paymentId}
            </div>
            <div className="txt-bold padding-sm">Delivered To: </div>
            <div className="padding-sm">
              <p className="txt-bold">{shippingAddress.fullname}</p>
              <p>{shippingAddress.locality}</p>
              <p>
                {shippingAddress.city} - {shippingAddress.pincode}
              </p>
              <p>{shippingAddress.state}</p>
              <p>{shippingAddress.mobile}</p>
            </div>
            <div>
              <span className="txt-bold padding-sm">Order Total:</span>
              {orderTotal}
            </div>
          </div>
          {orderItems.map((product) => (
            <SummaryCard key={product._id} item={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export { OrderSummary };
