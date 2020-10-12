const input = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput');

if(storedInput) {
    text.textContent = storedInput
}

input.addEventListener('input', letter => {
    //console.log(letter.target.value)
    text.textContent = letter.target.value
})

//LOCAL STORAGE
const saveToLocalStorage = ()=> {
    localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)
