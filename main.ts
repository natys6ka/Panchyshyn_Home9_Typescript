/* Завдання 1

Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
1.	Створіть змінну city з типом даних string.
2.	Присвойте їй значення «Київ».
3.	Змініть значення змінної city на «Львів».
4.	Створіть змінну address з типом даних string і скопіюйте в неї значення змінної city.
5.	Вивести значення змінної address з допомогою команди console.log().
 */
let city: string;
city = 'Kyiv';
city = "Lviv";
let addres: string = city;
console.log(`1. ${addres}`);

/* Завдання 2

Використовуючи конструкцію if..else через тернарний вираз, напишіть код, який отримує число через prompt, а потім виводить в console.log() повідомлення:
1.	Число парне.
2.	Число непарне.
3.	Число 0.
 */

 let a: number = +prompt('Введіть ціле число:') ;
 (a === 0)
 ? console.log('2. Число 0')
 :  ((a % 2) == 0)
    ? console.log(`2. Число ${a} парне`)
    : console.log(`2. Число ${a} непарне`)