
function myName(){
    console.log('My name is Shovo');
}
myName();


function yourName(Name,age){
    console.log('My name is' +  Name);
    console.log('i am ' +  age  +  ' year old');
}
yourName(' Shobahan', 25);
yourName(' Shovo', 30);
yourName(' Rakib', 24);

function sum(a,b){

    console.log(a * b);
    
}

sum(30, 20);

let subscribe = document.getElementById('sub');

let subscribeBtn = document.getElementById('button');

function SubButton(){

    subscribeBtn.addEventListener('click', () =>{
        subscribe.innerText = 'subscribed';        
    });
   
}