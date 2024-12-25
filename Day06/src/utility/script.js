import productData from "./data.js"
import userData from "./userData.js"

// let newArr = productData.map((item) => {
//   let productReviews = item.productReviews.map((review)=> review.productReview)
//  return {
//    productName: item.productName,
//    productReviews,
//  }
// }
// )

// console.log(newArr);

let data = userData.map((val)=>{
 return {
    name:val.username,
    address: val.address.street,
    city: val.address.city,
    

  }
})
console.log(data);