// Functions Example:1
// // // // // // // // function greet() {
// // // // // // // //     console.log("Hello, world!");
// // // // // // // // }

// // // // // // // // greet();

// Functions Example:2
// // // // // // // function add(a , b){
// // // // // // //     console.log(a ** b); 

// // // // // // // }
// // // // // // // add(5, 10);
// // // // // // // add(20, 30);

// Functions Example:3
// // // // // // function printName(name){
// // // // // //     console.log("My name is " + name);
// // // // // // }

// // // // // // printName("rakesh");

// Functions Example:4
// // // // // function checkNumber(num){
// // // // //     if(num > 0)
// // // // //        if(num >= 0) return "positive even";
// // // // //         else if(num < 0) return "negative even";
// // // // //         else  return  "zero";
// // // // //     }  
    
// // // // //     console.log(checkNumber(-10));        
    
    
// Functions Example:5
// // // // function check(num) {
// // // //     if (num > 0) {
// // // //         console.log("positive");
// // // //     }
// // // //      else if (num === 0) 
// // // //         {
// // // //     console.log("zero");

// // // // } else {
// // // //     console.log("negative");
// // // // }
// // // // }
// // // // check(0);




// Functions Example:6
// // // function reverseString(str) {
// // //     let result = "";

// // //     for (let i = str.length - 1; i >= 0; i--) {
// // //         result += str[i];
// // //     }
// // //     return result;
// // // }
// // // console.log(reverseString("ramprasad"));





// Functions Example:7
// // // function isValidEmail(email) {
// // //     return email.includes("@") && email.includes(".");
// // // }

// // // console.log(isValidEmail("rakesh@gmail.com"));


// Functions Example:8
// // function generateotp() {
// //     let otp = "";
// //     for (let i = 0; i <4; i++) { 
// //         otp += Math.floor(Math.random() * 10);
// //     }
// //     return otp;
// // }   

// // console.log(generateotp());




// Functions TO-Do-LIST Example:1
let cart  = [];
// added items to cart
function addItem(name, price) {
    cart.push({ name: name, price: price });
}
// show cart items

function showCart() {
    console.log("Items in cart:");

    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].name + "" + cart[i].price);
    }}
//calculation
function totalPrice() {
    let toatal = 0;
    for( let i = 0; i < cart.length; i++) {
        toatal += cart[i].price;
    }
    return toatal;   
}
addItem("ple", 100);
addItem("bna", 50);
addItem("ges", 200);
showCart();
console.log("total price: " + totalPrice());







