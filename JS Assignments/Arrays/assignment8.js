let europeanCities = ['Paris', 'Rome'];
let asianCities = ['Tokyo', 'Bangkok'];
//let worldCities = europeanCities + asianCities;
//let worldCities = [[europeanCities], [asianCities]];
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);
console.log(europeanCities);
console.log(asianCities);