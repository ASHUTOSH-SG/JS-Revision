//reduce
// used in shoping cart

//accumulator

const myNum = [1,2,3,4,5,6,7,]

const myTotal = myNum.reduce(function (acculuator,current){
    console.log(`acc${acculuator}and current ${current}`);
    return acculuator+current
},5)
//5 is initialition 
//output
// acc5and current 1
// acc6and current 2
// acc8and current 3
// acc11and current 4
// acc15and current 5
// acc20and current 6
// acc26and current 7
// 33
console.log(myTotal);

//using arrow function
const myTotall = myNum.reduce((acc,curr)=>acc+curr,5)

console.log(myTotall);

//example
const shoppingCart =[
    {
        itemName: "js cource",
        price: 999
    },
    {
        itemName: "react",
        price: 499
    },
    {
        itemName: "node",
        price: 499
    }
]
const priceToPay = shoppingCart.reduce((acc,iteam)=>acc + iteam.price,0)

console.log(priceToPay);