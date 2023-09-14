///////////////////Event//////////


// let parent = document.querySelector('#parent');
// let child = document.querySelector('#child');



// parent.addEventListener('click' , function(){
//     console.log('hello from parent');
// })

// child.addEventListener('click', function(){
   
//   console.log('hello from child');
// });

// document.addEventListener('click', function(){
   
//     console.log('hello from document');
//   });


//   //// event bubble er jonne show kortac amn///////////////////


//   child.addEventListener('click', myfunc)

//   function myfunc(){
//       console.log('Hiiiis');
//   }


// child.addEventListener('click', (e) =>{
//       console.log(e);
//   })

//   child.addEventListener('click', function(e){
//     console.log(e);
// })


// child.addEventListener('click', (e) =>{
//       console.log(e.x);
//   })
//==>301 /////////////

// child.addEventListener('click', (e) =>{
//       console.log(e.y);
//   })
//==>412////////



// child.addEventListener('click', e =>{
//       console.log(e.target);
//   })
//==>child / parent / document////////////////////////////


// append dole niche jabe ar prepend dile opre jabe



let parent = document.querySelector('#parent');

let title = document.createElement('h1');
title.textContent = 'HEllo shakir';



parent.appendChild(title);


