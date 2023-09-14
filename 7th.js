/*


function sayhello(username){
    console.log("Hello" + username + "!");
}
sayhello();
==>Helloundefined!

function sayhello(username){
    if(typeof username == "undefined"){
        username = "Shakir";
    }
    console.log("Hello " + username + " !!!");
};

sayhello();

==> Hello Shakir !!!


function sayhello(username = "Shakir"){
    if(typeof username == "undefined"){
        username = "Shamiur";
    }
    console.log("Hello " + username + " !!!");
};

sayhello();
==> Hello Shakir !!!



*/


/*spread operator


let arr = ["Shamiur", "Rahman","Shakir"];
console.log(...arr);
==> Shamiur Rahman Shakir


let arr = ["Shamiur", "Rahman","Shakir"];
console.log(...arr,1,2,3);
==> Shamiur Rahman Shakir 1 2 3


function add(a,b,c){
    return a + b + c;
};
let arr = [5,5,5];
let newarr = add(arr);
console.log(newarr);
==>5,5,5undefinedundefined


function add(a,b,c){
   return a + b + c;
};

let arr = [5,5,5];

let newarr = add(...arr);

console.log(newarr);

==>15


let name = "Shamiur Rahman Shakir";
let address = "pabna";

let obj = {
    name : name,
    address : address,
};
console.log(obj.address);
==> pabna




let name = "Shamiur Rahman Shakir";
let address = "pabna";

let obj = {
    name,
    address,
};
console.log(obj.address);
==> pabna


let name = "shamiur Rahman Shakir";
let address = "pabna";

console.log(`I'm ${name},I live in ${address}!`);
==>I'm shamiur Rahman Shakir,I live in pabna!


*/


/*Function


let sayhello = function sayhello2(){
    console.log("Hello");
};
sayhello();
==> Hello




let sayhello = function (){
    console.log("Hello");
};
sayhello();

let sayhello2 = () =>{
    console.log("Hello 2");
};

sayhello2();

==>
Hello
Hello 2


let adder = (a,b) =>{
    return a + b;
};
let result = adder(10,5);
console.log(result);
==> 15


let adder = (a,b) => a + b;
let result = adder(10,5);
console.log(result);
==> 15



let add = (...num) =>{
    for(let i = 0; i < num.length; i++){
        console.log(num[i]);
    }
};
add(1,2,3,4,5);
==>
1
2
3
4
5



let add = (a,b,c,d) =>{
    return a + b + c + d;
};

let arr = [5,5,5,5];

let newarr = add(...arr);

console.log(newarr);
==> 20


*/


let add = (a,b,c,d) =>{
    return a + b + c + d;
};

let arr = [5,5,5,5];

let newarr = add(...arr);

console.log(newarr);
