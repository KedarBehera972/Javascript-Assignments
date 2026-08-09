let worldCities = {
    "Sydney" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 35000000,
    "Paris" : 22000000,

};
let largeCities = {};
for(const it in worldCities){
    if(worldCities[it]<30000000){
        continue;
    }
    largeCities[it] = worldCities[it];
}
console.log(largeCities);