// variant1

const points = 0;
let allPoints;

let question1 = +prompt(`В каком году вышла Warcraft III: The Frozen Throne? Варианты ответов: 1) 1995 2) 2003 3) 1997 Ответ запишите номером варианта.`);
if (question1 == 2) {
    allPoints = points + 1;
}

let question2 = +prompt(`Кампания какой из рас идет первой? Варианты ответов: 1) Кампания Нежити 2) Кампания Орды 3) Кампания Ночных Эльфов Ответ запишите номером варианта.`);
if (question2 == 3) {
    allPoints = allPoints + 1;
}

let question3 = +prompt(`За какую из не игровых фракций можно поиграть в 8 главе Кампании Ночных Эльфов? Варианты ответов: 1) За Наг 2) За Кобольдов 3) За Демонов Ответ запишите номером варианта.`);
if (question3 == 1) {
    allPoints = allPoints + 1;
}

alert (`You got ${allPoints} points`);

// variant1