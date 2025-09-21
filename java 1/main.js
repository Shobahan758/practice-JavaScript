
// function isSubscribed(){
//    console.log('sdfgjhsdfgjhfghsdfghgh');
// }
// document.getElementById('btn').addEventListener('click', isSubscribed);



// function subscribr(){

//     document.getElementById('text').innerHTML = 'this is owner shovo';
//     document.getElementById('btn').innerHTML = 'subscribed';
//     document.getElementById('btn').style.backgroundColor = '#262626';
// }


// function like(){
//   document.getElementById('like').innerHTML = '<i class="bi bi-hand-thumbs-up-fill"></i> liked';
// }


// document.getElementById('btn').onclick = function () {

//     document.getElementById('text').innerHTML = 'this is owner shovo';
//     document.getElementById('btn').innerHTML = 'subscribed';
//     document.getElementById('btn').style.backgroundColor = '#262626';


// }

// document.getElementById('btn').addEventListener('click',function(){
//   document.getElementById('text').innerHTML = 'this is owner shovo';
//   document.getElementById('btn').innerHTML = 'subscribed';
//   document.getElementById('btn').style.backgroundColor = '#262626';
// });

// function rollDice() {
//   let randomNumber = Math.ceil(Math.random() * 6); // 1–6
//   let imageSource = randomNumber ; // e.g., dice1.png

//   document.getElementById('ludo').src = imageSource;
// }

// let car = ['bmw','valuo', 'Toytota','sdsd','fdsdf'];

// // for (let i = 0; i < car.length; i++){
// //   console.log(car[i]);
// // }

// car.forEach(function (i){
//   console.log(i);
// });

let difficulty = prompt("Choose difficulty (easy, medium, hard)").toLowerCase();

// Guess the number
function guessTheNumber(difficulty) {
  let randomNumber;
  let attempts = 0;
  let maxAttempts;

    switch (difficulty){
  case 'easy':
      maxAttempts = 5;
      randomNumber = Math.floor(Math.random() * 10) + 1; // 1–10
    console.log(randomNumber);
    break;
    case 'medium':
        maxAttempts = 7;
      randomNumber = Math.floor(Math.random() * 100) + 1; // 1–10
      console.log(randomNumber);
        break;
    case 'hard':
        maxAttempts = 7;
      randomNumber = Math.floor(Math.random() * 1000) + 1; // 1–10
      console.log(randomNumber);
    break;

    default:
      console.error('invalid difficulty level. Choose difficulty (easy, medium, hard');
}
}


//Get user input deficulty



// console.log(deficulty);
guessTheNumber(difficulty);