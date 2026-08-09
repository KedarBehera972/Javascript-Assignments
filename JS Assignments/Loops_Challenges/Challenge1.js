let chaiCollection = ['green tea', 'black tea', 'chai', 'oolong tea'];
let selectedTeas = [];
for(let i = 0;i<chaiCollection.length;i++){
    if(chaiCollection[i] === "chai"){
        break;
    }
    else{
        selectedTeas.push(chaiCollection[i]);
    }
}
console.log(selectedTeas);

