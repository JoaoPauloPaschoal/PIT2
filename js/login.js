const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login_form');
const validateInput = ({target}) => {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
    } 
    else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'views/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
