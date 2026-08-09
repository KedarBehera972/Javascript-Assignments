/*let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaTypes.forEach((it) => {
   console.log(it);

})*/

let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaTypes.forEach((it) => {
   if(it === "chai"){
    return;
   }
   availableTeas.push(it);

})
console.log(availableTeas);