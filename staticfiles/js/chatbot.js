// chatbot.js
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Affichage du message utilisateur
    displayMessage(userInput, 'user-message');

    // Effacer l'input après envoi
    document.getElementById('user-input').value = '';

    // Simuler la réponse du chatbot
    setTimeout(function() {
        displayMessage("Je suis un chatbot, comment puis-je vous aider ?", 'bot-message');
    }, 1000);
}

function displayMessage(message, senderClass) {
    var chatWindow = document.getElementById('chat-window');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);  // Ajout de la classe pour l'utilisateur ou le chatbot
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);

    // Faire défiler jusqu'en bas du chat
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Ajouter l'écouteur d'événements pour la touche "Entrée"
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Empêche le comportement par défaut (comme un saut de ligne)
        sendMessage();
    }
});
