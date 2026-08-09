//It is actually problem 3.
//const calculateTotal = (price,quantity)=> price*quantity;(Inplicit return)
const calculateTotal = (price,quantity)=>{
    let cost = price*quantity;
    return cost;

}
let totalCost = calculateTotal(50,3);
console.log(totalCost);