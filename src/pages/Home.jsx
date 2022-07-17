import {
  BannerImage,
  StyleCategoryCard,
  GenderCategoryCard,
  Footer,
} from "../Components";
import { styleCategories, genderCategory } from "../helper";

const Home = () => {
  return (
    <>
      <BannerImage />
      <h4 className="heading-h4 padding-lg">Your favourite styles</h4>
      <div className="category-section flex padding-lg">
        {genderCategory.map(({ id, image, title, info }) => (
          <GenderCategoryCard
            key={id}
            source={image}
            information={info}
            caption={title}
            id={id}
          />
        ))}
      </div>

      <h4 className="heading-h4">Shop by Brands</h4>
      <div className="style-section flex padding-lg">
        {styleCategories.map(({ image, info, title, id }) => (
          <StyleCategoryCard
            source={image}
            information={info}
            caption={title}
            key={id}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export { Home };
