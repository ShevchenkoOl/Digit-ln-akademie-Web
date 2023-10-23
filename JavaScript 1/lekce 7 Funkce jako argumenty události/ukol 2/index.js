// Обработчик события DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Функция для генерации электронного письма
    function generateEmail() {
        const emailContent = document.querySelector(".email__content");
        const emailBody = emailContent.querySelector(".email__body");

        const message = emailBody.textContent;
        const name = "Vaše jméno"; // Здесь укажите имя отправителя

        // Выберите тип прощания: formalGoodbye или rudeGoodbye
        const selectedGoodbye = formalGoodbye; // Можно изменить на rudeGoodbye

        const fullEmailText = fillBody(message, name, selectedGoodbye);

        // Вставьте текст письма в элемент с классом email__body
        emailBody.textContent = fullEmailText;
    }

    // Функция для генерации прощального сообщения "S uctivou poklonou, ..."
    const formalGoodbye = (name) => {
        return `S uctivou poklonou, ${name}`;
    };

    // Функция для генерации прощального сообщения "Se měj, ..."
    const rudeGoodbye = (name) => {
        return `Se měj, ${name}`;
    };

    // Функция для заполнения тела электронного письма
    const fillBody = (message, name, goodbyeFunction) => {
        const body = `${message}\n\n${goodbyeFunction(name)}`;
        return body;
    };

    // Назначаем обработчик события клика на кнопке
    const emailButton = document.getElementById("generateEmailButton");
    emailButton.addEventListener("click", generateEmail);
});
