let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000,

};
let citiesNewPopulation = {};
for(const it in citiesPopulation){
    if(it === "Berlin"){
        break;
    }
    citiesNewPopulation[it] = citiesPopulation[it];
}
console.log(citiesNewPopulation);