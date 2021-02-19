let btnBg = document.querySelector('.btn__prnt_setup');
let screen = document.querySelector('.phone__inner_screen');
let screen2 = document.querySelector('.box__img');

btnBg.style.background = 'white';

btnBg.addEventListener('click', function () {
    if (btnBg.style.background == 'white') {
        btnBg.style.background = 'black';
        screen.style.background = 'grey';
        usersMessage.style.background = 'grey';
        botMessage.style.background = 'grey';
        usersMessage.style.color = 'grey';
        botMessage.style.color = 'grey';
    } else if (btnBg.style.background == 'black') {
        btnBg.style.background = 'white';
        usersMessage.style.background = 'white';
        botMessage.style.background = 'white';
        usersMessage.style.color = 'black';
        botMessage.style.color = 'black';
        screen.style = `
    background: ${screen2};
    `
    }
})


var botMessageS = ['Как дела?', 'Как настроение?', 'Что делаешь?', 'Как самочувствие?', 'Какое твое хобби?', 'Во сколько просыпаешься по утрам?', 'Играешь в игры?'];

function randomBotMess(botMessageS) {
    let randBotMess = Math.floor(Math.random() * botMessageS.length);
    return botMessageS[randBotMess];
}

const botFinal = randomBotMess(botMessageS);

let usersSendBtn = document.querySelector('.send__messaging');
let usersMessageInp = document.querySelector('.messaging __inp');
let usersMessage = document.querySelector('.user__message');
let botMessage = document.querySelector('.bot__message');


botMessage.innerHTML = 'Бот: ' + botFinal;
botMessage.style.display = 'block';


usersSendBtn.addEventListener('click', function () {
    usersMessage.innerHTML = 'Вы: ' + usersMessageInp;
    usersMessage.style.display = 'block';

    botMessage.innerHTML = 'Бот: ' + botFinal;
    botMessage.style.display = 'block';
});


