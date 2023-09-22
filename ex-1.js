// Exercise #1: Food Order

// Start coding here
const foodOrder = {
    orderNumber: "A0234",
    address: "Bangkok",
    paymentType: "Cash",
    totalPrice: 4500,
    restaurantName: "MK"
};

// ใช้ Object.freeze() เพื่อป้องกันการเปลี่ยนแปลงค่าใน Object
Object.freeze(foodOrder);

//Reassign ค่า Key totalPrice และ paymentType
foodOrder.totalPrice = 5000; // ไม่ควร Reassign ค่าได้
foodOrder.paymentType = "Credit Card"; // ไม่ควร Reassign ค่าได้

console.log(foodOrder);






