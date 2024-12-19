import products from "./data.js";

const a = products.flatMap((val) => (val.productName.map((item) => ({ category: val.category, productName: item }))));

console.log(a);