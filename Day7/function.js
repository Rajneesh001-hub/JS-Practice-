// function greeting(){
//     console.log("I how are u");
// }
// function addNumbers(...num){
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }

// greeting();
// addNumbers(7,8);
// addNumbers(15,25);
// addNumbers(234,654);

// addNumber=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addNumber(5,7));


// addNumber=(num1,num2)=>num1+num1;
// console.log(addNumber(5,7));


// let user={
//     balance: 400,
//     deposit:function(amount){
//         if(typeof amount ==="number" && amount>0){
//             this.balance+=amount;
//             return this.balance;
//         }

//     }




// let person={
//     name:"Rajneesh Kumar",
//     age:22,
//     roll:34,
//     greet:function(){
//         console.log("hello everyone "$(this.name));
//     }

// }
// greet();


// let a=6;
// let b=7;
// console.log(`The sum of a+b is ${a+b}`);
// console.log(typeof(a+b));


// let arr=[5,6,8,9];
// arr[0]=15;
// console.log(arr);

// let obj={
//     name:"Rajneesh",
//     class:"12th",
//     roll:32,
// }
// obj.name="Ankit";
// console.log(obj);

// let a="1223a";
// let b=Number(a);
// console.log(typeof b);
// console.log(b);

// console.log(null>="");

// for(let i=0;i<5;i++){
//     console.log(i);
// }

// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// let i=0;
// do{

//     console.log(i);
//     i++;
// }while(i<5);


// let a="Rajneesh";
// let b="";
// let c=a&&b;
// console.log(c);
// let a = new Number(20);
// let b = new Number(20);

// console.log(a==b);


// 
// console.log(Math.max(5,6,8,9,4,2,1));

// console.log(Math.floor(Math.random()*6)+1);

// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('cod'));



// let arr=[5,6,7,8,"Rajneesh",6,7];
// console.log(arr[4]);
// console.log(arr.typeof);
// arr.push(10);
// arr.push("strike");
// console.log(arr);

// const names = ["Alice", "Rohit","Bob","Mohit", "Charlie",];

// console.log(names.toString());
// console.log(names.join("-"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bobs"));

// const user = {
//        name: "Rohit",
//        age: 20,
//        emailId: "negi@gmail.com",
//        amount: 3400,
//        "home address": "dwarka"
//     }
    
    
//     console.log(user["name"]);
//     console.log(user.age);
//     console.log(user["age"]);
//     console.log(user["home address"]);
//     console.log(typeof user);
    
    
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
    { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
    { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true }
  ];

  const electronics= products.filter((product)=>product.price>50 && product.inStock).map((product)=>product.price).sort((a,b)=>a-b);
  console.log(electronics);

  products.forEach(product=>{
    console.log(`-${product.category}-:${product.name}`);
  })