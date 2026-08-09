function makeTea(typeOfTea){
    return `Make tea ${typeOfTea}`;


}

function processTeaOrder(makeTea){
    return makeTea("earl grey");

}
let order = processTeaOrder(makeTea);
console.log(order);