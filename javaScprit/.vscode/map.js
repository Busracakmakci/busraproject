
//DİZİDE 2 İLE ÇARPMA


//MAP METODY İLE
const numbers= [1,4,9]
const result=numbers.map (number=> Math.sqrt(number)) 
console.log(result)

const users= [
    {
        name: "Tayfun",
        surname: "Erbilen",
        age: 27
    },
    {
        name: "mehmet",
        surname: "Seven",
        age:27
    }
]

const date= new Date()
const result2=users.map(user => {
    return {
        fullName : ` ${user.name} $ {user.surname}`,
        yearOfBirth: date.getFullYear () - user.age
    }
})

console.log(result2)


const people = [
    {
        name: "Dom",
        age: 35,
        occupation :"Web Developer"
    },
{
    name:"Amy",
    age: 26,
    occupation : "Nurse"
},
{
    name: "Bruce",
    age: 55,
    occupation: "Electrician"
}
];
const names= people.map(person=>
    {
        return person.name;
    })
     console.log(names);