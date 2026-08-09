let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for(const it of teas){
    if(it === "herbal tea"){
        continue;
    }
    preferredTeas.push(it);
}
console.log(preferredTeas);