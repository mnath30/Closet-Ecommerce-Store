import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    itemname: "White Shirt",
    category: "Shirt",
    brand: "Lee",
    rating: 3,
    information: "man-with-shirt",
    gender: "men",
    price: 1500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355759/Ecommerce/men-shirt_aprmmq.jpg",
    isOutOfStock: false,
    description:
      "White micro ditsy printed opaque Formal shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem",
  },
  {
    _id: uuid(),
    itemname: "Skirt",
    category: "Skirt",
    brand: "Only",
    rating: 4,
    information: "woman-with-skirt",
    gender: "women",
    price: 1900,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355777/Ecommerce/girl-skirt_jyglqp.jpg",
    isOutOfStock: false,
    description:
      "Make a lively entry and impress the crowd wearing this stylish skirt. It has a straight hemline that adds a smart edge and midi length helps keep essentials handy. ",
  },
  {
    _id: uuid(),
    itemname: "Red Dress",
    category: "Dress",
    brand: "Dress Berry",
    rating: 2,
    information: "woman-with-dress",
    gender: "women",
    price: 1900,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355779/Ecommerce/woman-dress2_exsyuk.jpg",
    isOutOfStock: true,
    description:
      "Red solid woven fit and flare dress, has full sleeve, concealed zip closure, an attached lining, flared hem",
  },
  {
    _id: uuid(),
    itemname: "Checked Black Shirt",
    category: "Shirt",
    brand: "Woodland",
    rating: 1,
    information: "man-with-shirt",
    gender: "men",
    price: 1000,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355773/Ecommerce/men-shirt-2_eivhoy.jpg",
    isOutOfStock: false,
    description:
      "Yellow and black yarn-dyed checked casual shirt, has a spread collar, long sleeves, curved hem, one patch pocket",
  },
  {
    _id: uuid(),
    itemname: "White Dress",
    category: "Dress",
    brand: "Dress berry",
    rating: 3,
    information: "woman-with-dress",
    gender: "women",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355792/Ecommerce/woman-dress_hjamby.jpg",
    isOutOfStock: false,
    description:
      "White solid fit & flare dress,Shoulder straps,Sleeveless, no sleeves,upto knee length in flared hem",
  },
  {
    _id: uuid(),
    itemname: "Black Trouser",
    category: "Pant",
    brand: "Raymonds",
    rating: 4,
    information: "man-with-pants",
    gender: "men",
    price: 500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355768/Ecommerce/men-formal_trv4qi.jpg",
    isOutOfStock: false,
    description:
      "Black solid mid-rise cropped regular trousers, has a hook and bar closure, four pockets",
  },
  {
    _id: uuid(),
    itemname: "White & Blue Tshirt",
    category: "Tshirt",
    brand: "Lee",
    rating: 4,
    information: "woman-with-a-tshirt",
    gender: "women",
    price: 4500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355785/Ecommerce/woman-tee2_gfgadg.jpg",
    isOutOfStock: false,
    description:
      "Blue and Off white Tshirt for women,Typography printed,Regular length,Round neck,Short, regular,sleeves,Knitted cotton fabric",
  },
  {
    _id: uuid(),
    itemname: "Blue Jeans",
    category: "Jeans",
    brand: "Jinny & Jhonny",
    rating: 4,
    information: "boy-with-jeans",
    gender: "children",
    price: 5000,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355761/Ecommerce/kid-boy2_trnyp6.jpg",
    isOutOfStock: false,
    description:
      "Blue Jeans for kids made from a cotton blend with a ribbed waistband, pockets in the side seams and ribbed hems. ",
  },
  {
    _id: uuid(),
    itemname: "Black Striped frock",
    category: "Dress",
    brand: "Jinny & Jhonny",
    rating: 4,
    information: "girl-with-frock",
    gender: "children",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355759/Ecommerce/kid-girl_dsshv2.jpg",
    isOutOfStock: false,
    description:
      "Short sleeve dress in soft, patterned cotton jersey with a seam at the waist and gently flared skirt.",
  },
  {
    _id: uuid(),
    itemname: "Blue Jacket",
    category: "Jacket",
    brand: "Reebok",
    rating: 1,
    information: "woman-with-jacket",
    gender: "women",
    price: 3900,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355796/Ecommerce/woman-jacket2_hofduu.jpg",
    isOutOfStock: false,
    description:
      "Blue solid denim jacket with studded, has a spread collar, pockets, has a button closure, three-quarter sleeves, straight hemline",
  },
  {
    _id: uuid(),
    itemname: "Black Tshirt",
    category: "Tshirt",
    brand: "Lee Cooper",
    rating: 3,
    information: "man-with-tshirt",
    gender: "men",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658404694/Ecommerce/img10_qap3ok.jpg",
    isOutOfStock: false,
    description:
      "Black solid T-shirt, has a round neck, short sleeves. Drop-Shoulder Longline T-shirt",
  },
  {
    _id: uuid(),
    itemname: "Blue Jeans",
    category: "Jeans",
    brand: "Lee Cooper",
    rating: 3,
    information: "woman-with-jeans",
    gender: "women",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355801/Ecommerce/woman-sweat_nxz4qv.jpg",
    isOutOfStock: false,
    description:
      "Light shade, no fade blue jeans,Regular fit, mid-rise,Highly distressed,Non stretchable,with pockets,Length: regular",
  },
  {
    _id: uuid(),
    itemname: "White Tshirt",
    category: "Tshirt",
    brand: "Levis",
    rating: 4,
    information: "man-with-tshirt",
    gender: "men",
    price: 3500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355766/Ecommerce/men-tee1_pjuai7.jpg",
    isOutOfStock: false,
    description:
      "White Tshirt for men,Typography printed,Regular length,Round neck,Short, regular sleeves,Knitted cotton fabric",
  },
  {
    _id: uuid(),
    itemname: "Yellow Coat",
    category: "Coat",
    brand: "Jinny & Jhonny",
    rating: 4,
    information: "girl-with-coat",
    gender: "children",
    price: 1700,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355757/Ecommerce/kid-girl3_pnq8ur.jpg",
    isOutOfStock: false,
    description:
      "Long-sleeved zip-through hoodie in soft sweatshirt fabric with a jersey-lined hood and zip down the front with an anti-chafe chin guard. Ribbing at the cuffs and hem.",
  },
  {
    _id: uuid(),
    itemname: "Hooded Jacket",
    category: "Jacket",
    brand: "Jinny & Jhonny",
    rating: 4,
    information: "boy-in-hoodie",
    gender: "children",
    price: 2000,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355756/Ecommerce/kid-boy_rmr5dk.jpg",
    isOutOfStock: false,
    description:
      "Hooded jacket in sweatshirt fabric with a zip down the front, front pockets and ribbing at the cuffs and hem.",
  },
  {
    _id: uuid(),
    itemname: "Orange frock",
    category: "Dress",
    brand: "Jinny & Jhonny",
    rating: 5,
    information: "girl-with-frock",
    gender: "children",
    price: 2000,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355754/Ecommerce/kid-girl2_kdlrjk.jpg",
    isOutOfStock: false,
    description:
      "Dress in chiffon with gathered shoulder seams and an opening at the back with a button at the back of the neck. Elasticated seam at the waist with a decorative bow at the sides. Jersey lining.",
  },
  {
    _id: uuid(),
    itemname: "Boys Two Piece Set",
    category: "Shirt Pant",
    brand: "Jinny & Jhonny",
    rating: 4,
    information: "boy-with-shorts",
    gender: "children",
    price: 1200,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355753/Ecommerce/kid-boy3_liozwc.jpg",
    isOutOfStock: false,
    description:
      "Set with a long-sleeved top and pair of half pants in quilted jersey. ",
  },
  {
    _id: uuid(),
    itemname: "Blue Sweat Shirt",
    category: "Sweat Shirt",
    brand: "Woodland",
    rating: 3,
    information: "woman-with-sweatshirt",
    gender: "women",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355797/Ecommerce/woman-sweatsrt_trqo2t.jpg",
    isOutOfStock: false,
    description:
      "Top in soft sweatshirt fabric made from a cotton blend. Relaxed fit with a round neckline, dropped shoulders and long sleeves. Ribbing around the neckline, cuffs and hem. Soft brushed inside.",
  },
  {
    _id: uuid(),
    itemname: "White Tshirt",
    category: "Tshirt",
    brand: "Levis",
    rating: 3,
    information: "woman-with-tshirt",
    gender: "women",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355800/Ecommerce/woman-tee_i5xxfa.jpg",
    isOutOfStock: false,
    description:
      "White Tshirt for women,Typography printed,Regular length,Round neck,Short, regular sleeves,Knitted cotton fabric",
  },
  {
    _id: uuid(),
    itemname: "Beige Overcoat",
    category: "Overcoat",
    brand: "Dress berry",
    rating: 3,
    information: "woman-with-coat",
    gender: "women",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355803/Ecommerce/woman-coat2_huitxz.jpg",
    isOutOfStock: false,
    description:
      "Beige solid knee length overcoat, has a notched lapel collar, long sleeves. double breasted with button closure, two pockets",
  },
  {
    _id: uuid(),
    itemname: "Grey Dress",
    category: "Dress",
    brand: "Dress berry",
    rating: 3,
    information: "woman-with-dress",
    gender: "women",
    price: 2500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658404690/Ecommerce/img9_jcblfx.jpg",
    isOutOfStock: false,
    description:
      "Grey self striped Round neck,Short, regular sleeves,Cut-out detail,Above knee length in straight hem,Concealed zip closure",
  },
  {
    _id: uuid(),
    itemname: "Striped Trousers",
    category: "Trousers",
    brand: "Raymonds",
    rating: 5,
    information: "woman-with-trousers",
    gender: "women",
    price: 3500,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355796/Ecommerce/woman-pants_kvs2dk.jpg",
    isOutOfStock: false,
    description:
      "Blue woven trousers,Regular fit,Mid-rise,Length: regular,Pattern: striped,Flat-front, with no pleats design,Feature: plain,4 pockets",
  },
  {
    _id: uuid(),
    itemname: "Black Blazzer",
    category: "Coat",
    brand: "Raymonds",
    rating: 3,
    information: "woman-with-blazzer",
    gender: "women",
    price: 4800,
    source:
      "https://res.cloudinary.com/dmb5mqtbx/image/upload/v1658355780/Ecommerce/woman-coat_qcjecd.jpg",
    isOutOfStock: false,
    description:
      "Black striped regular-fit blazer, has a notched lapel, single-breasted with double button closure, long sleeves, vented back hem, and two pockets",
  },
];
