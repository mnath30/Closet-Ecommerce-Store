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

const brandings = [
  { id: "levis", brandname: "Levis" },
  { id: "dress_berry", brandname: "Dress Berry" },
  { id: "lee_Cooper", brandname: "Lee Cooper" },
  { id: "lee", brandname: "Lee" },
  { id: "raymonds", brandname: "Raymonds" },
  { id: "jinny_and_jhonny", brandname: "Jinny & Jhonny" },
  { id: "only", brandname: "Only" },
  { id: "woodland", brandname: "Woodland" },
  { id: "reebok", brandname: "Reebok" },
];

const rating = [
  { id: "4_STARS_AND_ABOVE", ratinglabel: "4 stars and above" },
  { id: "3_STARS_AND_ABOVE", ratinglabel: "3 stars and above" },
  { id: "2_STARS_AND_ABOVE", ratinglabel: "2 stars and above" },
  { id: "1_STAR_AND_ABOVE", ratinglabel: "1 stars and above" },
];

const sortingCategory = [
  { id: "PRICE_HIGH_TO_LOW", categoryname: "Price - High to Low" },
  { id: "PRICE_LOW_TO_HIGH", categoryname: "Price - Low to High" },
];

export { styleCategories, genderCategory, brandings, rating, sortingCategory };
