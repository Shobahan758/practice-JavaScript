const  emailGenerator = () => {
    const  emailLength = document.getElementById('emailLength').value;
    const  chearter = "abcdefghijklmnopqrstuvwxyz0123456789";
    const textfile = "@gmail.com";
    const showGmail = document.getElementById('showEmail');

    let randomGmaill = '';
    for( i = 0; i < emailLength; i++){
        const randomIndex = Math.round(Math.random() * chearter.length);
        const randomGmail = chearter[randomIndex];
        const value = randomGmaill += randomGmail;
        const finalEmail = value + textfile;

        showGmail.innerText = finalEmail
    }
}