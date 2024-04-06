let name;

while (true) {
    name = prompt("Как вас зовут?").toLowerCase().trim();
    if (name && name[0] === "a") {
        break;
    } else {
        alert("Ошибка: Иди гуляй Вася");
    }
}
console.log("Привет, " + name + "! Давайте продолжим.");


let accountNumber;

while (true) {
    accountNumber = parseFloat(prompt("Введите номер счета:"));
    if (!isNaN(accountNumber) && accountNumber === 10000) {
        break;
    } else {
        alert("Ошибка: Неправильный номер счета");
    }
}
alert("Отлично! Номер счета: " + accountNumber);


while (true) {
    var суммаСнятия = parseFloat(prompt("Введите сумму для снятия:"));
    if (!isNaN(суммаСнятия) && суммаСнятия <= accountNumber) {
        accountNumber -= суммаСнятия;
        console.log("Снято: " + суммаСнятия);
        console.log("Осталось: " + accountNumber);
        break;
    } else {      
        console.log("Ошибка: Введите корректную сумму для снятия");
    }
}