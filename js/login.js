function tryLogin() {
    let password = document.querySelector('#password').value.toLowerCase()
    let key = 'alpatova'
    if (password === key) {
        window.location.href = "personal.html";
    } else {
        document.querySelector('.wrong-msg').setAttribute('style', '')
    }
}

document.querySelector('#password').addEventListener("keyup", function (event) {
    // Число 13 в "Enter" и клавиши на клавиатуре
    if (event.keyCode === 13) {
        // При необходимости отмените действие по умолчанию
        event.preventDefault();
        // Вызов элемента button одним щелчком мыши
        tryLogin()
    }
});