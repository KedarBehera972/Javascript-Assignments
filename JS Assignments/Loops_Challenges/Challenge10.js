let teaTypes = ["chai","green tea","black tea","jasmine tea","herbal tea"];
let shortTeas = [];
for(const it of teaTypes){
    if(it.length>10){
        break;
    }
    shortTeas.push(it);
}
console.log(shortTeas);