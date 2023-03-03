const chat = document.getElementById('chat')
const input = document.getElementById('new-text')
const button = document.getElementById('send-message')

button.addEventListener('click', () => {
    let newMessage = document.createElement('div')
    newMessage.classList.add('message', 'my-msg')

    let author = document.createElement('h4')
    author.textContent = 'Você diz:'
    newMessage.appendChild(author)

    let text = document.createElement('p')
    text.textContent = input.value
    newMessage.appendChild(text)

    chat.appendChild(newMessage)
    chat.scrollTop = chat.scrollHeight;
    input.value = ''
})

input.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});
