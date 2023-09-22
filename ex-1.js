// Exercise #1: Food Order

// Start coding here
let foodOrder = {
    orderNumber : "A0234",
    address : "Bangkok",
    paymentType : "Cash",
    totalPrice : 4500,
    restaurantName : "MK"
};

//console.log(foodOrder); //check before object foodOrder

foodOrder.totalPrice = 5000;
foodOrder.paymentType = "Credit Card";

console.log(foodOrder); //check after Reassign object foodOrder