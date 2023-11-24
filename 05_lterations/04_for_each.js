//most used for each :)
const coding = ["js","py","c++","java"]

//callback function = task to perfrom 
// call back function  dont have name 
coding.forEach(function (item){
console.log(item);
} )


// arrow function
coding.forEach((val) => {
    console.log(val);
})

//normal function pass to for each
function printCod (lang){
    console.log(lang);
}

coding.forEach(printCod )

// for each has many parameter 
coding.forEach( (item,index,arr) =>{
console.log(item,index,arr);
})



// array of object iteration
const mycoding = [
    {
        lanuageName : "js",
        type:"web app"
    },
    {
        lanuageName : "java",
        type:"app"
    },
    {
        lanuageName : "c++",
        type:"game"
    }
]

mycoding.forEach( (item)=>{
    console.log(item.type);
     //you can access object like this directly
     // so you have extracted array's object's property 
})
