import {v4 as uuid } from "uuid"
import {img9,img10} from "../../asset";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id:uuid(),
    itemname:"Blue Shirt",
    category:'Shirt',
    brand:'Lee',
    rating:3,
    information:"man-with-shirt",
    gender:"men",
    price:1500,
    source:img10,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Blue Skirt",
    category:'Skirt',
    brand:'Lee Cooper',
    rating:4,
    information:"woman-with-skirt",
    gender:"women",
    price:1900,
    source:img9,
    isAddedToWishlist:true,
    isAddedToCart:true,
    isOutOfStock:true

},
{
    _id:uuid(),
    itemname:"Blue Skirt",
    category:'Skirt',
    brand:'Lee Cooper',
    rating:2,
    information:"woman-with-skirt",
    gender:"women",
    price:1900,
    source:img9,
    isAddedToWishlist:true,
    isAddedToCart:false,
    isOutOfStock:true

},
{
    _id:uuid(),
    itemname:"Blue Shirt",
    category:'Shirt',
    brand:'Lee',
    rating:1,
    information:"man-with-shirt",
    gender:"men",
    price:1500,
    source:img10,
    isAddedToWishlist:false,
    isAddedToCart:true,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Yellow Dress",
    category:'Dress',
    brand:'Dressberry',
    rating:3,
    information:"woman-with-dress",
    gender:"women",
    price:2500,
    source:img9,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Trouser",
    category:'Pant',
    brand:'Raymonds',
    rating:4,
    information:"man-with-pants",
    gender:"men",
    price:1500,
    source:img10,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Red Top",
    category:'Tops',
    brand:'Lee',
    rating:4,
    information:"woman-with-a-top",
    gender:"women",
    price:1500,
    source:img9,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

},{
    _id:uuid(),
    itemname:"Black Shirt",
    category:'Shirt',
    brand:'Jinny & Jhonnny',
    rating:4,
    information:"boy-with-shirt",
    gender:"children",
    price:1500,
    source:img10,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Black frock",
    category:'Dress',
    brand:'Jinny & Jhonnny',
    rating:4,
    information:"girl-with-frock",
    gender:"children",
    price:1500,
    source:img9,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Blue Jacket",
    category:'Jacket',
    brand:'Only',
    rating:1,
    information:"woman-with-jacket",
    gender:"women",
    price:1500,
    source:img9,
    isAddedToWishlist:false,
    isAddedToCart:true,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Black Hooodie",
    category:'Hoodie',
    brand:'Lee Cooper',
    rating:3,
    information:"man-with-hoodie",
    gender:"men",
    price:2500,
    source:img10,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

},
{
    _id:uuid(),
    itemname:"Blue Jeans",
    category:'Jeans',
    brand:'Lee Cooper',
    rating:3,
    information:"man-with-jeans",
    gender:"men",
    price:2500,
    source:img10,
    isAddedToWishlist:false,
    isAddedToCart:false,
    isOutOfStock:false

}
];
