import { PRODUCTS, PRODUCT_DETAIL } from "../utils/products";

export function getAllProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2500);
  });
}

export function getProdDetail(productId) {
  return new Promise((resolve, reject) => {
    const targetProduct = PRODUCT_DETAIL.find(
      (product) => product.id === productId
    );
    setTimeout(() => resolve(targetProduct), 1000);
  });
}
