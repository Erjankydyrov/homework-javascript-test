// variant1

const points = 0;
let allPoints;

let question1 = +prompt(`В каком году вышла Warcraft III: The Frozen Throne? Варианты ответов: 1) 1995 2) 2003 3) 1997 Ответ запишите номером варианта.`);
if (question1 == 2) {
    allPoints = points + 1;
}
else {
    allPoints = 0;
}

let question2 = +prompt(`Кампания какой из рас идет первой? Варианты ответов: 1) Кампания Нежити 2) Кампания Орды 3) Кампания Ночных Эльфов Ответ запишите номером варианта.`);
if (question2 == 3) {
    allPoints = allPoints + 1;
}

let question3 = +prompt(`Какой новый юнит получила фракция нежити в Warcraft III: The Frozen Throne? Варианты ответов: 1) За Наг 2) За Кобольдов 3) За Демонов Ответ запишите номером варианта.`);
if (question3 == 1) {
    allPoints = allPoints + 1;
}

let question4 = +prompt(`За какую из не игровых фракций можно поиграть в 8 главе Кампании Ночных Эльфов? Варианты ответов: 1) Ведьмак 2) Обсидиановая статуя 3) Волшебный дракончик Ответ запишите номером варианта.`);
if (question4 == 2) {
    allPoints = allPoints + 1;
}

let question5 = +prompt(`Кто сопровождал Артаса на пути к ледяному трону? Варианты ответов: 1) Маэв 2) Иллидан 3) Анубарак Ответ запишите номером варианта.`);
if (question5 == 3) {
    allPoints = allPoints + 1;
}

let question6 = +prompt(`Кто возглавлял силы Альянса на руинах Лордерона? Варианты ответов: 1) Дэтэрок 2) Сильвана 3) Гаритос Ответ запишите номером варианта.`);
if (question6 == 3) {
    allPoints = allPoints + 1;
}

let question7 = +prompt(`Кто из новых героев умеет призывать феникса? Варианты ответов: 1) Чародей крови 2) Ловец Духов 3) Повелитель могил Ответ запишите номером варианта.`);
if (question7 == 1) {
    allPoints = allPoints + 1;
}

alert (`You got ${allPoints} points`);

// variant1