import musicResorces from "./music.js";
const movies = document.getElementById('movies');
const food = document.getElementById('food');
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
            // The new Message will need to be defined dependig the topic code
            newMessage.innerText = musicResorces.sentence()
        }
    } else {
        alert ('Please select a topic')
    }
}



generateButton.addEventListener('click', generateMessage)
