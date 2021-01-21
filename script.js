// variant1

const points = 0;
let allPoints;

let question1 = +prompt(`В каком году вышла Warcraft III: The Frozen Throne? Варианты ответов: 1) 1995 2) 2003 3) 1997 Ответ запишите номером варианта.`);
if (question1 == 2) {
    allPoints = points + 1;
}

let question2 = +prompt(`Кампания какой из рас идет первой? Варианты ответов: 1) Кампания Нежити 2) Кампания Орды 3) Кампания Ночных Эльфов Ответ запишите номером варианта.`);
if (question1 == 3) {
    allPoints = points + 1;
}

alert (`You got ${allPoints} points`);

// variant1