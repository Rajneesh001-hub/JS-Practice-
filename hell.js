function fetchUser(callback){
    console.log("user fetch successfully");
    setTimeout(()=>{
        console.log("data fetch succesfully");
        const name="saurav";

        callback(name);
    

    },2000);
}

function greet(name){
    console.log(`hello ; ${name}`);
}

function meet(name){
    console.log(`can we mee ${name} in delhi`);
}

fetchUser(meet);