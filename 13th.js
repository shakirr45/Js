// FActory Function
// Constructor function
// this keyword



/*

let person = {
    name: 'Shakir',
    speak: function() {
        console.log('Hello');
    },
}
let person2 = {
    name: 'Rahman',
    speak: function() {
        console.log('Hello');
    },
}
let person2 = {
    name: 'Shamiur',
    speak: function() {
        console.log('Hello');
    },
}



*/




/*Factory function
== > Always return object


function createfunc(name){
    return {
        name: name,
        sayHello: function(){
            console.log('Hello');
        }
    }
}



function createfunc(name){
    return {
        name,
        sayHello(){
            console.log('Hello');
        },
    };
}

let person1 = createfunc('Shamiur');
let person2 = createfunc('Rahman');
let person3 = createfunc('Shakir');


console.log(person1);
console.log(person2);
console.log(person3);





function createfunc(name =  'Shakir'){
    return {
        name,
        sayHello(){
            console.log('Hello');
        },
    };
}

let person1 = createfunc();
let person2 = createfunc('Rahman');
let person3 = createfunc('Shakir');


console.log(person1);
console.log(person2);
console.log(person3);


*/







// Constructor function =======================>>>>
//==> sathe sathe empty object create hobe
//==> pascal cosing ==> FirsName
/*




function Person(name){

    this.name = name;
    this.sayHello = function(){
        console.log('Hello');
    };
} 

let obj = new Person('Shakir');
let obj2 = new Person('Shakir shakir');



*/




// new keyword 3 ta kaj kore
/*
1.create an enmty object{}
2.refer 'this '  to the object
3.return object




*/


/*iffe============>>>





(function sayHello(){
    console.log('shakir');
})();


*/




/*<===========This=============>
==> node e global obj e 
==> ecara server window(general func)




function sayThis(){
    console.log(this);
}
sayThis();




let obj = {
    name: 'Shamiur Rahman',
    sayHello(){
        console.log(this.name);
    },
}
console.log(obj.sayHello());



*/




// function  person(name,age){
//     this.name = name;
//     this.age = age;
//     this.showDetails = function (){
//         console.log(this.age);
//         console.log(this.name);
//     };
// }

// let person1 = new person('Shamiur',100);
// let person2 = new person('Shakir',200);


// person1.showDetails();
// person2.showDetails();









































//  //  <== ex == > 

function Person(name){
    this.name = name;
}

let person1 = new Person('Shakir');

console.log(person1);




















