


const generatePassword = () => {
  const lengthPass =   document.getElementById('lengthPass').value;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ0123456789!@#$%^&*()_-=+";
  const showPass = document.getElementById('showPassword');

   let randomPassword = '';
  for( let i =  0; i < lengthPass; i++ ){
    const randomIndex =  Math.round(Math.random() * charset.length);
     const randomChar = charset[randomIndex];
   const value = randomPassword += randomChar;
   showPass.innerText = value;
  }
}

