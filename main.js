let city;
city = 'Kyiv';
city = "Lviv";
let addres = city;
console.log(`1. ${addres}`);
let a = +prompt('Введіть ціле число:');
(a === 0)
    ? console.log('2. Число 0')
    : ((a % 2) == 0)
        ? console.log(`2. Число ${a} парне`)
        : console.log(`2. Число ${a} непарне`);
function maximum(...arg) {
    return Math.max(...arg);
}
let m = maximum(2, 5, 0, -4, 21, -9);
console.log(`3. Максимальне число`, m);
function getSqrt(chyslo) {
    let res;
    if (isNaN(chyslo))
        res = 'Повинно бути числове значення';
    else {
        (chyslo > 0)
            ? res = `Корінь квадратний із ${chyslo} = ${Math.sqrt(chyslo)}`
            : res = 'Введіть додатнє число';
    }
    return res;
}
let b = +prompt('Введіть число:');
console.log(`4.`, getSqrt(b));
