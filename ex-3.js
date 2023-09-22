// Exercise #3 Debugging

// Start coding here
const employee = {
  name: "John Doe",
  age: 18,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    states: "Stateville",
    country: "Countryland",
    postalCode: "12345",
  },
};

console.log("'"+"Employee Name: " + employee.name +"'"); //'Employee Name: John Doe'
console.log("'"+"Employee Age: " + employee.age +"'"); //'Employee Age: 18'
console.log("'"+                //'
  "Employee Address: " +        //Employee Address: 
    employee.address.street +   //Address: 123 Main Street
    ", " +                      //,
    employee.address.city +     //Cityville
    ", " +                      //,
    employee.address.states +    //Stateville
    ", " +                      //,
    employee.address.country +  //Countryland
    " " +                       //,
    employee.address.postalCode //12345
+"'");                          //'
