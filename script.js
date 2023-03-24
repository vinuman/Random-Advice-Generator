const id = document.querySelector('h1');
const advice = document.querySelector('p');
const dice = document.querySelector('.dice');

dice.addEventListener('click', (e)=>{
    e.preventDefault();

    fetch(`https://api.adviceslip.com/advice`)
    .then(response => response.json())
    .then(data => {
        console.log(data.slip.id);
        console.log(data.slip.advice);
        id.textContent = 'Advice #' + data.slip.id;
        advice.textContent = '"' + data.slip.advice + '"';
    })
    .catch(error => console.error(error));
})