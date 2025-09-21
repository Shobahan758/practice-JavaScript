let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('buttom');
let under = document.getElementById('Under');
let Normal = document.getElementById('Normal');
let Over = document.getElementById('Over');


let score = document.getElementById('score');
let result = document.querySelector('.result');



let form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
});

button.addEventListener('click', function (){
   
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat (weight.value);
    let mitter = 0.3048;   
    let newHeightBmi = newHeight * mitter;
    let newHeightresult = newHeightBmi * newHeightBmi;
  
    let BMI = newWeight / newHeightresult ;  

     score.innerHTML = BMI;

     if(BMI > 18.8){
         under.innerText = 'Under Weight = Less than 18.6';
     }e
    
});