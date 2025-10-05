const text = 'Welcome to my Website!';

const messageDive = document.getElementById('message');

let index = 0;
let isDeleting = false;
const typeEffect = () =>{
if(!isDeleting && index <= text.length){
    messageDive.textContent = text.substring(0, index);
    index++;
}else if(isDeleting && index >= 0 ){

     messageDive.textContent = text.substring(0, index);
    index--;
}

if(index > text.length){
    isDeleting = true;
}else if(index < 0) {
   isDeleting = false;
}


setTimeout(typeEffect, 100);
}

typeEffect();