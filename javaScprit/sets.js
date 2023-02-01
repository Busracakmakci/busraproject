//SET

mySet.add(
    {
        name:'dom' ,
        age: 24
    });

mySet.add("dcode");

//Find size of set
console.log(mySet.size);

//Check for value  
console.log(mySet.has(25))

//Delete item
mySet.delete ("dcode");

// Loop
for(let item of mySet){
    console.log(item);

}
//Convert to Array
const myArray = Array.from(mySet);

//ORNEK ODEV

let colors = ['red','red','red','red','red','blue','blue','blue','blue','yellow','yellow','yellow']


let filteredColors = new Set()
colors.forEach( element => {
    filteredColors.add(element)
}
    
)
console.log(Array.from(filteredColors))