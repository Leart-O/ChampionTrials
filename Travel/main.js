// const chatBody = document.querySelector(".message-input");
// const messageInput = document.querySelector(".message-input");


// const createMessageElement = (content, classes) =>{
//     const div = document.createElement("div");
//     div.classList.add("message", classes);
//     div.innerHTML = content;
//     return div;
// }

// const handleOutgoingMessage = (userMessage) =>{
//     const messageContent = `<div class="message-text">${userMessage}</div>`;
//     const outgoingMessagDiv = createMessageElement(messageContent, "user-message");
//     chatBody.appendChild(outgoingMessagDiv);
// }


// messageInput.addEventListener("keydown", (e) => {
//     const userMessage = e.target.value.trim();
//     if (e.key === "Enter" && userMessage) {
//         handleOutgoingMessage(userMessage);
//     }
// });