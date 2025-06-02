let str='кыргызстан'
let str2='кыргызстан'
let str3='кырГЫзсТАн'

// console.log('slovo:',str)
// console.log('pervay:',str[0])
// console.log('posled:',str[str.length-1])
// console.log('bolsh:',str.toUpperCase())
// console.log('malen:',str2.toLowerCase())
//
// console.log(str[0].toUpperCase())
// console.log(str3.slice(1,5))
// console.log(str3.slice(1))
// console.log(str3[0].toUpperCase() + str3.slice(1).toLowerCase())

const user={
    name: 'Aika',
    age:18,
    isStudent: true,
    passport: {
        id: '11254621',
        inn: '5458785',
        data: '16.12.2001'
    },

    'country name': 'Bishkek'
}

for (let key in user) {
    // console.log(key, user[key], 'key')
}

// console.log(Object.keys(user),'keys')
// console.log(Object.values(user),'keys')
// console.log(Object.keys(user).includes('age'),'age')

// console.log('name' in user, "\"name\" in user)


// user.passport.id='aida'
// console.log(user)
// console.log(user.surname && '+','surname+')
// console.log(user.surname ?? '-','surname-')


// const user1={
//     name: 'Asel',
//     age:20,
//     isStudent: true,
// }

let userName='name'

// console.log(user,'user')
// console.log(user[userName],'user')
// console.log(user['country name'],'user')
// console.log(user['name'],'user')
// console.log(user.passport.data,'user')
// console.log(user.age,'user')
// console.log(user.isStudent,'user')

const user1=[1,2,3,4]
const users= [
    {
    name: 'Aika',
    age:18,
    isStudent: true,
    },
    {
        name: 'Sabina',
        age:18,
        isStudent: true,
    },
    {
        name: 'Kuba',
        age:18,
        isStudent: true,
    },
    {
        name: 'Syimyk',
        age:18,
        isStudent: true,
    },
    ]

for (const person of users){
    // console.log('name', person['name'])
    // console.log(`name =${person['name']}, age =${person['age']}, isStudent =${person['isStudent']}`)
}

let names=[]

for (const person of users){
    // name.push(person['name'])
}
// console.log(names)

// let num1=Number(prompt('num1'))
// let num2=Number(prompt('num2'))
// let operator = prompt('operator')

// switch (operator) {
//     case '+':
//         console.log(num1 + num2)
//         break;
//     case '-':
//         console.log(num1 - num2)
//         break;
//     case '*':
//         console.log(num1 * num2)
//         break;
//     case '/':
//         console.log(num1 / num2)
//         break;
//     default:
//         console.log('error')
// }

const user5={
    name: 'Aika',
    age:18,
    isStudent: true,
}


const user6={
    isTeacher: true,
}

const user7={
    ...user5,
   ...user6
}
console.log(user7)