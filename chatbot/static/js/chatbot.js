document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
    const messageHistory = document.getElementById("messageHistory");
    const fileInput = document.getElementById("fileInput");

    // Fonction pour envoyer un message texte
    function sendMessage(content, type) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", type);
        
        const messageContent = document.createElement("div");
        messageContent.classList.add("message-content");
        messageContent.innerHTML = content;
        
        messageDiv.appendChild(messageContent);
        messageHistory.appendChild(messageDiv);
        messageHistory.scrollTop = messageHistory.scrollHeight; // Faire défiler vers le bas
    }

    // Envoyer un message texte en cliquant sur le bouton "Envoyer"
    sendBtn.addEventListener("click", function () {
        const message = messageInput.value.trim();
        if (message !== "") {
            sendMessage(message, "user");
            messageInput.value = "";
        }
    });

    // Envoyer un message texte en appuyant sur "Entrée"
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {  // Vérifie que "Enter" est pressé sans Shift
            const message = messageInput.value.trim();
            if (message !== "") {
                sendMessage(message, "user");
                messageInput.value = "";
            }
            event.preventDefault();  // Empêche le retour à la ligne dans la zone de texte
        }
    });

    // Envoi de fichier
    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            sendMessage(`📄 Fichier envoyé : ${fileInput.files[0].name}`, "user");
        }
    });

    // Déclencher l'input file au clic sur l'icône de pièce jointe
    const attachmentIcon = document.querySelector('.attachment-icon');
    attachmentIcon.addEventListener('click', function () {
        fileInput.click();
    });
});
