document.addEventListener("DOMContentLoaded", function() {
    const interesseBtn = document.getElementById('interesse-btn');
    
    interesseBtn.addEventListener('click', function() {
        let feedbackMessage = document.getElementById('feedback-message');

        if (!feedbackMessage) {
            feedbackMessage = document.createElement('div');
            feedbackMessage.id = 'feedback-message';
            feedbackMessage.textContent = 'Você está inscrito neste projeto!';
            feedbackMessage.style.position = 'fixed';
            feedbackMessage.style.top = '0';
            feedbackMessage.style.left = '50%';
            feedbackMessage.style.transform = 'translateX(-50%)';
            feedbackMessage.style.backgroundColor = 'green';
            feedbackMessage.style.color = 'white';
            feedbackMessage.style.padding = '10px';
            feedbackMessage.style.zIndex = '1000';
            document.body.appendChild(feedbackMessage);
        }

        if (interesseBtn.textContent === "Estou interessado") {
            interesseBtn.textContent = "Remover Interesse";
            interesseBtn.style.backgroundColor = "red";
            interesseBtn.style.color = "white";
            feedbackMessage.style.display = 'block';

            // Esconder a mensagem após 5 segundos
            setTimeout(function() {
                feedbackMessage.style.display = 'none';
            }, 5000);
        } else {
            interesseBtn.textContent = "Estou interessado";
            interesseBtn.style.backgroundColor = "";
            interesseBtn.style.color = "";
            feedbackMessage.style.display = 'none';
        }
    });
});
