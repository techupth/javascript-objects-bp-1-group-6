// Exercise #2 Product

const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = "facebookShare";
// Start code here
//console.log(product); //check before Reassign


product.ratings = 4.5;
product.photo = https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg;
product.code = "IT0101010";
product.price = 6000;
//console.log(product); //after Raessing and add new Key in object

delete product.ratings;
//console.log(product); //after delete Key rattings in object product
//console.log(Object.keys(product)); //check keys before add value socialMediaShare

product.socialMediaShare = 45.5;
console.log(product); //after delete Key rattings in object product
//console.log(Object.keys(product)); //check keys after add value