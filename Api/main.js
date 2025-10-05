
function loadApiData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => desplayData(data))
}

function desplayData(data){
    const div = document.getElementById('divTag');
 
  data.map(user => {
    const p = document.createElement('p');
    p.innerText = user.email;

    div.appendChild(p);
  });
    

}

