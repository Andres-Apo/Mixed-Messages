const music = document.getElementById('music');
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
    message.style.backgroundColor = 'rgb(192, 234, 253)'
    if (buttonClicked === false ) {
        newMessage.innerText = 'This will be the inial generated message'
        generateButton.innerText = 'Generate Another one'
        clickedHandler()
    } else {
        // The new Message will need to be defined dependig the topic code
        newMessage.innerText = 'this will be the rest of the messages the user will want to message'
    }
}
console.log(buttonClicked)


generateButton.addEventListener('click', generateMessage)