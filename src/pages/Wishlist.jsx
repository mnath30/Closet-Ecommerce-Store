import { emptywishlist } from "../asset";
import { WishlistCard, EmptyPage, Loader } from "../Components";
import { useCartWishlist } from "../context";

const emptydata = {
  source: emptywishlist,
  information: "empty-wishlist",
  message: "Your Wishlist is Empty",
};

const Wishlist = () => {
  const { cartWishlist } = useCartWishlist();
  const { wishlist, wishlistLoading } = cartWishlist;
  return (
    <>
      {wishlistLoading && (
        <div className="flex loader_container">
          <Loader />
        </div>
      )}
      {!wishlistLoading && (
        <>
          <h4 className="heading-h4 txt-center padding-md">My Wishlist</h4>
          <div className="flex padding-lg">
            {wishlist.length === 0 ? (
              <EmptyPage item={emptydata} />
            ) : (
              wishlist.map((element) => (
                <WishlistCard key={element._id} item={element} />
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export { Wishlist };
