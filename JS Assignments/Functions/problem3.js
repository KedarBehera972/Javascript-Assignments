function confirmOrder(teaType){
    let temp = `Order confirmed for ${teaType}`;
    return temp;
}

function orderTea(teaType){
    let confirmTea = confirmOrder(teaType);
    return confirmTea;
}
let catchedString = orderTea("chai");
console.log(catchedString);