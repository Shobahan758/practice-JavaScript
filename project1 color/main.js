const body = document.querySelector('body');
const button = document.querySelectorAll('li');



// const redColor = document.querySelector('.red');

// redColor.addEventListener('click',function() {
//    body.style.backgroundColor = 'red';
// });

// const greenColor = document.querySelector('.green');

// greenColor.addEventListener('click', function(){
//   body.style.backgroundColor = 'green';
// });

// const blueColor = document.querySelector('.blue');
// blueColor.addEventListener('click', function(){
//   body.style.backgroundColor = 'blue';
// })

// const pinkColor = document.querySelector('.pink')
// pinkColor.addEventListener('click', function(){
//   body.style.backgroundColor = 'pink';
// })
button.forEach(function(value){
  value.addEventListener('click', function (){
    let className = this.classList.value;
    body.style.backgroundColor = className;
    console.log(className);
  });
});