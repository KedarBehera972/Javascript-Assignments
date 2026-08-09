let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = topCities.slice();
//let hardCopyCities = [... topCities];
console.log(hardCopyCities);
console.log(topCities);
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);