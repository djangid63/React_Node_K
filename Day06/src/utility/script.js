import productData from "./data.js"
import userData from "./userData.js"

let newArr = productData.map((item) => {
  let productReviews = item.productReviews.slice(0, 2).map((val) => val.productReview);
  return {
    productName: item.productName,
    productReviews,
  };
});

// console.log(newArr);

const icons = {
  fName : 'MdOutlineReviews1',
  lName : 'MdOutlineReviews2',  
  email : 'MdOutlineReviews3',
}

console.log(icons[fName]);

// let data = userData.map((val)=>{
//  return {
//     name:val.username,
//     address: val.address.street,
//     city: val.address.city,


//   }
// })
// console.log(data);


let b = [                                                                                                                         
  {
    userId: 101,
    username: 'john_doe',
    productReview: 'Great phone! The camera is fantastic and the battery lasts all day.',
    dateOfReview: '2024-12-01'
  },
  {
    userId: 102,
    username: 'jane_smith',
    productReview: 'Very good performance, but the screen could be brighter.',
    dateOfReview: '2024-12-02'
  },
  {
    userId: 103,
    username: 'alice_williams',
    productReview: 'The laptop is very fast and portable, but the keyboard is a bit stiff.',
    dateOfReview: '2024-11-25'
  },
  {
    userId: 104,
    username: 'bob_jones',
    productReview: 'Love the performance and design! However, I wish the battery life was longer.',
    dateOfReview: '2024-11-27'
  },
  {
    userId: 106,
    username: 'charlie_brown',
    productReview: 'Excellent sound quality! They fit comfortably, but could use better noise-canceling.',
    dateOfReview: '2024-12-05'
  },
  {
    userId: 107,
    username: 'emily_clark',
    productReview: 'Great value for money. The sound is good but could be more immersive.',
    dateOfReview: '2024-12-07'
  },
  {
    userId: 108,
    username: 'michael_scott',
    productReview: 'Love this watch! Tracks my workouts and messages. The battery life could be better.',
    dateOfReview: '2024-12-03'
  },
  {
    userId: 109,
    username: 'pam_beesly',
    productReview: 'Perfect for daily use, but the screen is a bit small for some apps.',
    dateOfReview: '2024-12-06'
  },
  {
    userId: 110,
    username: 'andy_bernard',
    productReview: 'Great sound, but the fit could be better for longer listening sessions.',
    dateOfReview: '2024-12-04'
  },
  {
    userId: 111,
    username: 'stanley_hudson',
    productReview: 'Good quality, but the battery drains faster than expected.',
    dateOfReview: '2024-12-08'
  }
]