//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function Tag(titleOfTag,action,attrs) {
//     this.titleOfTag = titleOfTag || "No title";
//     this.action = action || "No action";
//     this.attrs = attrs || [];
// }
//
// let title = "<a>";
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.\n'},
//         {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.\n'}
// ];
//
// let a = new Tag(title, action, attributes);
// console.log(a);
// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class TagClass {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag || "No title";
//         this.action = action || "No action";
//         this.attrs = attrs || [];
//     }
// }

// let title = "<a>";
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.\n'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.\n'}
// ];

// let b = new TagClass(title, action, attributes);
// console.log(b);//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//     model: 'bmw',
//     manufacture: 'bmw corp',
//     year: 1997,
//     maxSpeed: 177,
//     volumeEngine: 'just electric',
//     shapher: 'autopilot',
//     drive: function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`)
//     },
//     info: function () {
//         console.log("model:", this.model);
//         console.log("manufacture:", this.manufacture);
//         console.log("year:", this.year);
//         console.log("max speed:", this.maxSpeed);
//         console.log("volume engine:", this.volumeEngine);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed)
//     },
//     changeYear: function (newValue) {
//         this.newValue = newValue;
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//     }
// }
// let driver = {name: 'Roma', year: 1999, skill: "A"};
// car.drive();
// car.increaseMaxSpeed(200);
// car.changeYear(2000);
// car.addDriver(driver);
// car.info();
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car (model, manufacture, year, maxSpeed, volumeEngine, shapher) {
//     this.model = model || 'bmw';
//     this.manufacture = manufacture || 'bmw corp';
//     this.year = year || 1997;
//     this.maxSpeed = maxSpeed || 177;
//     this.volumeEngine = volumeEngine || 'just electric';
//     this.shapher = shapher || 'autopilot';
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`)
//     };
//     this.info = function () {
//         console.log("model:", this.model);
//         console.log("manufacture:", this.manufacture);
//         console.log("year:", this.year);
//         console.log("max speed:", this.maxSpeed);
//         console.log("volume engine:", this.volumeEngine);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.newValue = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let car1 = new Car();
// car1.info();
// car1.increaseMaxSpeed(220);
// car1.info();
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//  constructor(model, manufacture, year, maxSpeed, volumeEngine, shapher) {
//      this.model = model || 'bmw';
//      this.manufacture = manufacture || 'bmw corp';
//      this.year = year || 1997;
//      this.maxSpeed = maxSpeed || 177;
//      this.volumeEngine = volumeEngine || 'just electric';
//      this.shapher = shapher || 'autopilot';
//  }
//  drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}km на годину`)
//     };
//  info() {
//         console.log("model:", this.model);
//         console.log("manufacture:", this.manufacture);
//         console.log("year:", this.year);
//         console.log("max speed:", this.maxSpeed);
//         console.log("volume engine:", this.volumeEngine);
//     };
//  increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//  changeYear(newValue) {
//         this.newValue = newValue;
//     };
//  addDriver(driver) {
//         this.driver = driver;
//     }
// }
// let car1 = new Car();
// // car1.info();
// car1.increaseMaxSpeed(220);
// car1.info();
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я,
// вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class Human {
    constructor(name, age) {
        this.name = name || 'No name';
        this.age = age || 'No age';
    }
}
class Cinderella extends Human{
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize || 'No foot';
    }
}
class Prince extends Human{
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize || 'No shoes';
    }
    findCinderella(array){
        let find = null;
        // for (const item of array) {
        //     if (item.footSize === this.shoeSize) {
        //         find = item;
        //     }
        // }
        find = array.find(item => item.footSize === item.shoeSize);
        //
        // if (find) {
        //     console.log("My Cinderella name " + find.name)
        // }  else {
        //     console.log('I not find cinderella');
        // }

        find
            ?console.log("My Cinderella name " + find.name)
            :console.log('I not find cinderella');
    }

}
let cinderella1 = new Cinderella("Olya", 22, 40);
let cinderella2 = new Cinderella("Kraina", 20, 39);
let cinderella3 = new Cinderella("Marina", 12, 41);
let cinderella4 = new Cinderella("Sasha", 52, 40);
let cinderella5 = new Cinderella("Elya", 32, 34);
let cinderella6 = new Cinderella("Dusia", 21, 342);
let cinderella7 = new Cinderella("Musia", 25, 32);

let arrayCinderell = [
    cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7
];

let prince1 = new Prince('roma', 33, 34);

prince1.findCinderella(arrayCinderell);



//
//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
