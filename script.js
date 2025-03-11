document.addEventListener("DOMContentLoaded", () => {
    const socket = io();
    const chatBox = document.querySelector(".chat-box");
    const send = document.querySelector(".send");
    const chat = document.querySelector(".chat");

    send.addEventListener("click", sendMessage);
    chatBox.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });

    function sendMessage() {
      const message = chatBox.value.trim();
      if (!message) return;
      chatBox.value = "";

      socket.emit("chat message", message);

      appendMessage(message, "user");
    }

    socket.on("chat message", (msg) => {
      appendMessage(msg, "second-user");
    });

    function appendMessage(msg, sender) {
      const messageElem = document.createElement("p");
      messageElem.textContent = msg;

      if (sender === "user") {
        messageElem.classList.add("bg-green-400", "self-end", "rounded-l-lg");
      } else {
        messageElem.classList.add("bg-white", "self-start", "rounded-r-lg");
      }
      messageElem.classList.add("max-w-xs", "p-2", "rounded-b-lg");

      chat.appendChild(messageElem);
      chat.scrollTop = chat.scrollHeight; 
    }
  });