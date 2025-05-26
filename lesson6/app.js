console.log('hello');

let customer = 'John';
let customerName = 'Baryt';
let customer_name = 'Kuban';
let customerSurname = 'Sariev';
let $num ='12';
let $ ='12';
let _num = 12;
let _num123 = 123;
// let var = 123;

// let age = 18
// console.log('Имя=',customer,' ', 'Фамилия=', customerSurname, 'Возраст=', age)
// console.log(`Имя=${customer} Фамилия=${customerSurname} Возраст=${age} `)
// // console.log('OAO "Северэлектро"')
// console.log("OAO \"Северэлектро\"")
// let file='d:\\data\\profile.txt'
// console.log(file)
// let number=123
// let number1=3.14
// console.log(number)
// number=500
// console.log(number)
// const number2=123
// // number2=500

let a=10
let b=4

// console.log('a=',a, 'b=',b)
// console.log(a + b, '+')
// console.log(a - b, '-')
// console.log(a / b, '/')
// console.log(a * b, '*')
// console.log(a % b, '%')
// console.log(5 % 2, '5%')
// console.log(4 % 2, '4%')
// console.log(a ** b, '**')
// console.log(a / 0 + 10000000000)
// console.log(0 / a)
// console.log(6644864 + 'asd%')
// console.log(6644864 + 210)
// console.log(300 * '2')

//  a=10
//  b=5
// console.log(a>b, 'a>b')
// console.log(a<b, 'a<b')
// console.log(a>=b, 'a>=b')

// let age1 = prompt('сколько тебе лет')
// console.log(age1, 'age')
// console.log(typeof age1, 'typeof age1')

// if (true) {
//  console.log('true')
// } else {
//  console.log('else')
// }

// if (age1>1000) {
//     console.log('вы бесмертный')
// } else if (age1>18){
//     console.log('Вы соверш')
// } else if (age1<0){
//     console.log('Вы  не соверш')
// }
// else {
//     console.log('вы непр указ возр')
// }

// let color = prompt('Напиши цвет светофора')
// console.log('Цвет:', color)
// let red = 'красный';
// let yellow = 'желтый';
// let green = 'зеленый';


// console.log(10>20 ? 'true' : 'false')
//
// switch (color) {
//     case 'red':console.log('Цвет:','red')
//         break;
//     case 'green':console.log('Цвет:','green')
//         break;
//     case 'yellow':console.log('Цвет:','yellow')
//         break;
//     default:
//         console.log('нет такого цвета')
//
// }

// let lesson= 10
// console.log(lesson ? '6' : '0')
//
// console.log(lesson && '6')
//
// console.log(lesson ?? '00000')

let array =[1,2,3,4,5 , '1234567', null, undefined]
// console.log(array[5])
// console.log(array.length)
// console.log(array.length-1)
// console.log(array[array.length-1])
//
// array[4]=6
// console.log(array)
//
// let pop = array.pop()
// let shift = array.shift()
// let push=array.push(6)
// let unshift = array.unshift('111')
//
// console.log(array[array.indexOf(6)])
// console.log(array[array.indexOf('true')])
//
// console.log(array.lastIndexOf(6))

// console.log(array.includes(5))
//
// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
// console.log('0,7',arr.slice(0,7))
// console.log('7,9',arr.slice(7,9))
// console.log('-2',arr.slice(-2))
//
// console.log(arr.reverse())

let arr2=[1,2,3,4,5,6,7,54,3,58,78,15,8900]
console.log(arr2.sort())
console.log(arr2.sort((a,b)=>a-b))

console.log(arr2.join(', '))
console.log('способности: ',arr2.slice(0,5).join(', '))
console.log('способности: ',arr2.reverse().slice(0,5).join(', '))

let arr123=[12,23,34]
let arr456=[45,56,67]
let arr123456=[arr123,arr456]
console.log(arr123456)

let arr123456789=[...arr123, ...arr456]
console.log(arr123456789)

for (let i=0; i<arr123456789.length; i++) {
    console.log('index=',i,arr123456789[i])
}

let i=0
// while (i<arr123456789.length) {
// console.log('index=',i,arr123456789[i])
// i++
// }


// let ii=arr123456789.length
// while (ii>=0) {
// console.log('index=',ii,arr123456789[ii])
// ii--
// }

for (let element of arr123456789) {
    console.log(element)
}

for (let i=0; i<arr123456789.length; i++){
    if(i%=2===0) console.log(i, ' ', arr123456789[i])
}

for (let i=0; i<arr123456789.length; i++){
    if(arr123456789[i]%=2!==0) console.log(i, ' ', arr123456789[i])
}