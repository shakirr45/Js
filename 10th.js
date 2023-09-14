let title = document.getElementById('title');

// console.log(title.textContent = 'Shakir');
// // ==> shakir
// console.log(title.textContent);
// ==> Hello World

//console.log(title.innerText);
// ==> World



// console.dir(title);
// console.log(title.style);

//console.log(title.style.color = 'red');

// console.log(title.style);


// let input = document.querySelector('#input');

// console.dir(input);

// console.log(input.value);

let btn = document.getElementById('btn');
let input = document.getElementById('input');
let h1 = document.getElementById('h1');

btn.addEventListener('click', function(){
    h1.textContent = input.value;
});


title.innerHTML = '<b style=\'color: red\'>nooooooooooo</b>';