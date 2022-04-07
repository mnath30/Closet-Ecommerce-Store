import {
  BannerImage,
  StyleCategoryCard,
  GenderCategoryCard,
  Footer,
} from "../Components";
import {
  img04,
  img05,
  img06,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
} from "../asset";

const Home = () => {
  const styleCategories = [
    {
      id: "dress_berry",
      image: img11,
      info: "woman in dress",
      title: "Dress Berry",
    },
    {
      id: "only",
      image: img12,
      info: "woman in sweater",
      title: "Only",
    },
    {
      id: "lee",
      image: img13,
      info: "woman in Top",
      title: "Lee",
    },
    {
      id: "lee_Cooper",
      image: img14,
      info: "woman in Jacket",
      title: "Lee Cooper",
    },
    {
      id: "levis",
      image: img15,
      info: "man wearing jeans",
      title: "Levis",
    },
    {
      id: "raymonds",
      image: img16,
      info: "man wearing shirt",
      title: "Raymonds",
    },
    {
      id: "reebok",
      image: img17,
      info: "man wearing jacket",
      title: "Reebok",
    },
    {
      id: "woodland",
      image: img18,
      info: "man wearing hoodie",
      title: "Woodland",
    },
  ];

  const genderCategory = [
    {
      id: "men",
      image: img05,
      info: "man",
      title: "Men",
    },
    {
      id: "women",
      image: img04,
      info: "woman",
      title: "Women",
    },
    {
      id: "children",
      image: img06,
      info: "children",
      title: "Children",
    },
  ];
  return (
    <>
      <BannerImage />
      <h4 className="heading-h4 padding-lg">Your favourite styles</h4>
      <div className="category-section flex padding-lg">
        {genderCategory.map(({ id, image, title, info }) => (
          <GenderCategoryCard
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
