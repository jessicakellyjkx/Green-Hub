document.addEventListener("DOMContentLoaded", function() {
    const interesseBtn = document.getElementById('interesse-btn');
    
    interesseBtn.addEventListener('click', function() {
        let feedbackMessage = document.getElementById('feedback-message');

        if (!feedbackMessage) {
            feedbackMessage = document.createElement('div');
            feedbackMessage.id = 'feedback-message';
            feedbackMessage.textContent = 'Você está inscrito neste projeto!';
            feedbackMessage.style.position = 'absolute';
            feedbackMessage.style.top = '0';
            feedbackMessage.style.left = '50%';
            feedbackMessage.style.transform = 'translateX(-50%)';
            feedbackMessage.style.backgroundColor = 'green';
            feedbackMessage.style.color = 'white';
            feedbackMessage.style.padding = '40px 20px';
            feedbackMessage.style.zIndex = '1000';
            document.body.appendChild(feedbackMessage);
        }

        if (interesseBtn.textContent === "Estou interessado") {
            interesseBtn.textContent = "Remover Interesse";
            interesseBtn.style.backgroundColor = "red";
            interesseBtn.style.color = "white";
            feedbackMessage.textContent = 'Você está inscrito neste projeto!';
            feedbackMessage.style.display = 'block';

            // Esconder a mensagem após 5 segundos
            setTimeout(function() {
                feedbackMessage.style.display = 'none';
            }, 5000);
        } else {
            // Exibir a mensagem de confirmação
            let confirmationBox = document.createElement('div');
            confirmationBox.id = 'confirmation-box';
            confirmationBox.style.position = 'fixed';
            confirmationBox.style.top = '50%';
            confirmationBox.style.left = '50%';
            confirmationBox.style.transform = 'translate(-50%, -50%)';
            confirmationBox.style.backgroundColor = 'white';
            confirmationBox.style.padding = '20px';
            confirmationBox.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
            confirmationBox.style.zIndex = '1001';

            let confirmationMessage = document.createElement('p');
            confirmationMessage.textContent = 'Tem certeza que deseja excluir seu interesse?';
            confirmationBox.appendChild(confirmationMessage);

            let confirmBtn = document.createElement('button');
            confirmBtn.textContent = 'Confirmar';
            confirmBtn.style.marginRight = '10px';
            confirmBtn.style.backgroundColor = 'green';
            confirmBtn.style.color = 'white';
            confirmBtn.style.border = 'none';
            confirmBtn.style.padding = '10px 20px';
            confirmBtn.style.cursor = 'pointer';
            confirmBtn.addEventListener('click', function() {
                interesseBtn.textContent = "Estou interessado";
                interesseBtn.style.backgroundColor = "";
                interesseBtn.style.color = "";
                document.body.removeChild(confirmationBox);
                feedbackMessage.style.display = 'none';
            });
            confirmationBox.appendChild(confirmBtn);

            let cancelBtn = document.createElement('button');
            cancelBtn.textContent = 'Cancelar';
            cancelBtn.style.backgroundColor = 'red';
            cancelBtn.style.color = 'white';
            cancelBtn.style.border = 'none';
            cancelBtn.style.padding = '10px 20px';
            cancelBtn.style.cursor = 'pointer';
            cancelBtn.addEventListener('click', function() {
                document.body.removeChild(confirmationBox);
            });
            confirmationBox.appendChild(cancelBtn);

            document.body.appendChild(confirmationBox);
        }
    });
});
