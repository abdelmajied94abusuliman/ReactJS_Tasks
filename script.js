class Person {
    constructor (firstName , lastName , age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    getGreeting() {
        return `Hi, I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    }
};

const Abd = new Person ('Abdelmajied' , 'Abu Suliman' , 28);

console.log(Abd.getGreeting());



// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }
    
//     return counter;
//   }



let counterFunc = counter => { (counter > 100) ? counter = 0 : counter++ ; return counter }

console.log(counterFunc(50));



// function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }



const nameAge = (name , age) => {console.log("Hello " + name); console.log("You are " + age + " years old");}
  
nameAge('Abdelmajied' , 28);




const createFullName = (firstName, lastName) => {return firstName + " " + lastName;}
  
const doubleNumber = number => {return number * 2;}
  
const getEvenNumbers = array => { let evenNumbers = [];
    for (let i of array) { (i % 2 === 0) ? evenNumbers.push(i) : null; } 
    return evenNumbers;
}

  


class Car {
    constructor (make , model , minValue , maxCost , year) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.cost = this.carCost(minValue, maxCost)
    }

    carCost( minValue , maxCost ) {
        let x = Math.floor(Math.random() * (maxCost-minValue)) + minValue;
        return x;
    }

    getInfoCar(){
        return `Make from ${this.make}, the model is ${this.model} , year of production ${this.year} and it's cost ${this.cost} `
    }
};

const BMW = new Car ('BMW' , 'I530' , 10000 , 20000 , 2018);

console.log(BMW.getInfoCar());






(1<2) ? ( () => { for (let index = 0; index < 5; index++) { console.log("hi") } } ) : console.log("bye") 






let nums = [2, 4, 5];
let sum = 0; 
const sqrAndSum = nums => {
    let SqrAndSum = nums.map(function(element){
        sum = sum + element*element;
        return element*element
    });
    return sum/nums.length;
}

console.log(sqrAndSum([2, 4, 5]))





const reduceTry = [2, 4, 5].reduce((acc , element)=> {return acc = acc + element*element} , 0)
console.log(reduceTry);





let list=[1,2,3,4,5,6,7,8];
const numMulti10 = list.map((element) => { return element*10 })
console.log(numMulti10);





let makeStrings = ([
    {  name: "Angelina Jolie",
       age: 80   
    },
   {   name: "Eric Jones",
       age: 2
   },
   {   name: "Paris Hilton",
       age: 5
   },
   {   name: "Kayne West",
       age: 16
   },
   {   name: "Bob Ziroll",
       age: 100
   }
 ]);  

const printResult = () => {
    makeStrings.forEach((element) => {
        (element.age > 20) ? console.log(`${element.name} can go to The Matrix`) :  console.log(`${element.name} is under age!`)
    }
    )
}

printResult();








var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];



const avgAge = persons.reduce ((acc , element) => { return( acc += element.age )} , 0 ) / persons.length;

console.log(avgAge);
  




let array = [1,8,6,4];

const evenNumber = array.filter((element)=>element%2 ===0);
const modulesFour = array.filter((element)=>element%4 ===0);

console.log(evenNumber);
console.log(modulesFour);
    