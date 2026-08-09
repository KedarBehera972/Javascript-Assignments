let teaCollection = [];
let tea;
do{
    tea = prompt("Enter your favorite tea: ");
    if(tea !== "stop"){
        teaCollection.push(tea);
    }
}
while(tea !== "stop");
console.log(teaCollection);