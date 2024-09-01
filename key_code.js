const message = document.getElementById('message');
document.addEventListener ("keypress", (event) =>{
    message.innerText = ` ${event.key}`;
});
const code = document.getElementById("code");
document.addEventListener ("keypress", (event) =>{
    code.innerText = `key pressed: ${event.code}`;
});
const which = document.getElementById("which");
document.addEventListener ("keypress", (event) =>{
    which.innerText = `code: ${event.which}`;
});