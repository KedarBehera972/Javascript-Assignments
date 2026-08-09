let numbers = [1,2,3,4,5];
let smallNumbers = [];
for(const it of numbers){
    if(it === 4){
        break;
    }
    smallNumbers.push(it);
}
console.log(smallNumbers);