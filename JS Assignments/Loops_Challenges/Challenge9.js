let nums = [2,5,7,9];
let doubledNumbers = [];
for(let i = 0;i<nums.length;i++){
    if(nums[i] === 7){
        continue;
    }
        doubledNumbers.push(nums[i]*2);
}
console.log(doubledNumbers);