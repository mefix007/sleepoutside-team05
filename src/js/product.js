import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";


const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// if (productId) {
//   dataSource.findProductById(productId).then((product) => {
//     if (product) {
//       // Example: show product name in a DOM element
//       document.getElementById("productName").textContent = product.name;
//     } else {
//       // Handle case where product is not found
//       document.getElementById("productName").textContent = "Product not found";
//     }
//   });
// }

// function addProductToCart(product) {
//   let cartItems = getLocalStorage("so-cart");

//   // Ensure cartItems is an array
//   if (!Array.isArray(cartItems)) {
//     cartItems = [];
//   }

//   cartItems.push(product);
//   setLocalStorage("so-cart", cartItems);
// }

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
