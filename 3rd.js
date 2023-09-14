/*Conditions

if(''){
  console.log('Hello');
}else{
  console.log('World');
}
==> World


let num1 = 10;
let num2 = 20;
if(true){
  let num1 = 20;
 // console.log('Hello');
}else{
  console.log('World');
}
console.log(num1);
==> 10 (blocklavel scope)

let num1 = 10;
let num2 = 20;
if(true){
  num1 = 20;
}else{
  console.log('World');
}
console.log(num1);
==> 20 (By deafult global var)

let num2 = 20;
if(true){
  var num1 = 20;
}else{
  console.log('World');
}
console.log(num1);
==> 20(var is a global var)


let age = 18;
if(age < 18){
  console.log('You can/t access cz u are a baby');
}else if(age > 60){
  console.log('Old man');
}else{
  console.log('u can access');
}
==> u can access



let num = Number(prompt('Enter Your Age: '));
console.log(typeof num);
if(num < 18){
  alert('NOOOO');
}else if(num > 60){
  alert('Old man');
}else{
  alert('Yes');
}


let color = 'pink';
switch(color){
  case 'red':
    console.log('my favourit color is red');
    break;
    case 'green':
    console.log('my favourit color is green');
    break;
    case 'black':
    console.log('my favourit color is blacl');
    break
    case 'pink':
    console.log('my favourit color is pink');
}
==> pink


*/




/* Function

function myname(){
  console.log('Shamiur Rahamn');
}
myname();
==> Shamiur Rahman

function myname(name){
  console.log(name);
}
myname('SHamiur Rhamn shakir');
==> Shamiur Rahman Shakir


function number(num1,num2){
  let result = num1 + num2;
  console.log(result);
};
number(10,5);
==> 15




function gun(a,b){
   let  reasult = a * b;
    return reasult;
  };
multiply = gun(5,2);
console.log(multiply);
 ==> 10 (mus use return)

 
function numbers(a,b){
  let result = a + b;
  return result;
}
let jog = numbers(5,2);

  console.log(jog);
==> 7


function arry(a,b){
  let arr = [2,3,4];
  return arr;
}
let main = arry(2,2);
console.log(main);
==>[ 2, 3, 4 ]
*/











