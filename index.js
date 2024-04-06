let name = ("Alex").toLowerCase()

while (true) {
    name = prompt("Как вас зовут?").toLowerCase().trim()
    if (name === "alex") {
        break
    } else {
        alert("Ошибка: Иди гуляй Вася")
    }
}
console.log("Привет, " + name)


let accountNumber = 7777

while (true) {
    let number = parseFloat(prompt("Введите номер счета:"))
    if (!isNaN(number) && accountNumber === number) {
        break;
    } else {
        alert("Ошибка: Неправильный номер счета")
    }
}
console.log("Номер счета, " + accountNumber);

let money = 10000

while (true) {
    var суммаСнятия = parseFloat(prompt("Введите сумму для снятия:"))
    if (!isNaN(суммаСнятия) && суммаСнятия <= money) {
        money -= суммаСнятия
        console.log("Снято: " + суммаСнятия)
        console.log("Осталось: " + money)
        break;
    } else {      
        console.log("Ошибка: Пашел в ж...!")
    }
}