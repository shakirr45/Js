/* oject
let person = {
    name : 'Shakir',
    age : 23,
    address : 'pabna',
}
console.log(person.name);
==> Shakir

let person = {
    name : 'Shakir',
    age : 23,
    address : 'pabna',
}
console.log(person['name']);
==> Shakir

let person = {
    name : 'Shakir',
    age : 23,
    address : 'pabna',
    interest : ['LOve','Games','study','progamming'],
}
console.log(person.interest[2]);
==> study

let person = {
    name : 'Shakir',
    age : 23,
    address : 'pabna',
    interest : ['LOve','Games','study','progamming'],
}
console.log(person.interest);
==> ['LOve','Games','study','progamming']

let person = {
    name : 'Shakir',
    address : 'pabna',
    age : 23,
    interest : ['study','games','traveling',
    {
        vartual : 'Whats app',
        reallife : 'Alone',
    }
],

};

console.log(person.interest[3].reallife);
==> Alone

let person = {
    name : 'Shakir',
    address : 'pabna',
    age : 23,
    interest : ['study','games','traveling',
    {
        vartual : ['Whats app','facebook'],
        reallife : ['Alone'],
    }
],
};
console.log(person.interest[3].vartual[1]);
==> facebook

*/


/*=====loop=====
let numbers = ['num1','num2','num3','num4'];
for(i =0; i < 4; i++){
    console.log(numbers[i]);
}  
==> 
num1
num2
num3
num4


let numbers = ['num1','num2','num3','num4','num1','num2','num3','num4','num1','num2','num3','num4'];
for(i =0; i < numbers.length; i++){
    console.log(numbers[i]);
}
==>
num1
num2
num3
num4
num1
num2
num3
num4
num1
num2
num3
num4

let numbers = ['num1','num2','num3','num4'];
for(var i =0; i < 4; i++){
    console.log(numbers[i]);
}
console.log(i);
==> 4



let i = 0;
while(i < 10){
    console.log(i);
    i++;
};


*/


let players = ['ronaldo','messi','salah'];

for(i = 0; i < players.length; i++){
    console.log(players[i]);
}

for(let player of players){
    console.log(player);
}

for(i = 0; i < 10; i++){
    console.log(i);
}
