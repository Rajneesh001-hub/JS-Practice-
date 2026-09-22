//object 
//key value

const user={
    name:"Rajneesh",
    age:22,
    emailId:"rajneesharya055@gmail.com",
    amount:5000,

}
console.log(user);
console.log(user.name);

//CRUD Operation: Create Read Upadte Delete

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for(let keys in user){
    console.log(keys);
}

const {name,age,amount}=user;
console.log(name,age,amount);






