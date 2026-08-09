let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];
cities.forEach((it)=>{
  if(it === "Sydney"){
    return;
  }
  travelledCities.push(it);
})
console.log(travelledCities);