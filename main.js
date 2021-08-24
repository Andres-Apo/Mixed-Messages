import musicResorces from "./music.js";
import moviesResorces from "./movies.js"
import foodResorces from "./food.js"
const generateButton = document.getElementById('generateMessage');
const message = document.getElementById('message')
const newMessage = document.createElement('p')
message.appendChild(newMessage)
let buttonClicked = false
const clickedHandler = () => {
    buttonClicked = true
}


const generateMessage = () => {
    if (musicResorces.music.checked === true) {
        message.style.backgroundColor = 'rgb(192, 234, 253)';
        if (buttonClicked === false ) {
            newMessage.innerText = musicResorces.sentence()
            generateButton.innerText = 'Generate Another one'
            clickedHandler()
        } else {
            newMessage.innerText = musicResorces.sentence()
        }
    } else if (moviesResorces.movies.checked === true) {
        message.style.backgroundColor = 'rgb(192, 234, 253)';
        if (buttonClicked === false ) {
            newMessage.innerText = moviesResorces.sentence()
            generateButton.innerText = 'Generate Another one'
            clickedHandler()
        } else {
            newMessage.innerText = moviesResorces.sentence()
        }
    } else if (foodResorces.food.checked === true) {
        message.style.backgroundColor = 'rgb(192, 234, 253)';
        if (buttonClicked === false ) {
            newMessage.innerText = foodResorces.sentence()
            generateButton.innerText = 'Generate Another one'
            clickedHandler()
        } else {
            newMessage.innerText = foodResorces.sentence()
        } 
    } else {
            alert ('Please select a topic')
    }
}




generateButton.addEventListener('click', generateMessage);
