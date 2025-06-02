// console.log('hello word')

function greet(){
    return console.log('function Hello 8')
}

// greet()
// greet()
// greet()
// greet()
// greet()

function sum(a,b){
    return a+b
}

// console.log(sum(1,2))
// console.log(sum(10,20))
// console.log(sum(81,8))


function greet1(name){
    return console.log(`Hi ${name}`)
}

greet1('Aida')
greet1()

function greet3(name='User'){
    return console.log(name)
}

greet3('Aida')
greet()

function step(a,b){
    return a ** b
}

// console.log(2,3)
// console.log(2,4)
// console.log(2,5)


function step2(a,b){
      a ** b
}


const findAverage = function (arr) {
    let sum= 0
    for (const elem of arr) {
        sum+=elem
    }
    return sum / arr.length
}
const numbers = [1,2,3,4,5,9]
// console.log(findAverage(numbers))


const greet5 =  () => {
     // console.log('Hello 5')
}

// greet5()

const square  = x => {
   return x*x
}

console.log(square(5))


const square3  = (a,b)=> {
    return  a*b
}

// console.log(square3(5, 10))


const square4  = (a,b)=> a*b

// console.log(square3(55, 10))


const findAverage2 = (arr) => {
    let sum= 0
    for (const elem of arr) {
        sum+=elem
    }
    return sum / arr.length
}

// console.log()


const relative = {
    name: 'Victor',
    children: [
        {
            name: 'Victor1',
            children: [
                {
                    name: 'Victor2',
                    children: [
                        {
                            name: 'Victor3',
                            children: [
                                {
                                    name: 'Victor4',
                                    children: [
                                        {
                                            name: 'Sasha',
                                            children: [
                                                {
                                                    name: 'Sasha2',
                                                    children: [

                                                    ]
                                                }

                                            ]
                                        }

                                    ]
                                }

                            ]
                        }

                    ]
                }

            ]
        }

    ]
}

for (const child of relative.children) {
    console.log(child.name)
    for (const child1 of child.children) {
        console.log(child1.name)
    }
}

function showChildren(obj) {
    obj.children.forEach(child => {
        console.log(`${obj.name} => ${child.name}`)
        showChildren(child)
    })
}
showChildren(relative)

function input (callback) {
    const name = 'Aika'
    callback(name)
}
input(
    function (name) {
        console.log(`Hi ${name} !`)
    }
)

const numbers2=[1,2,3,4,5,9]
numbers2.sort ((a, b) => a - b )
console.log(numbers2)

const fruits=['banana', 'apple', 'mango']
fruits.forEach((fruit, index)=> {
    console.log(index, fruit)
})


const users = [
    {
        name: 'Aida',
        age:18,
    },
    {
        name: 'Kuban',
        age:28,
    },
    {
        name: 'Altyn',
        age:8,
    }
]

for (let user of users) {
    if (user.age>=18) {
        console.log(user.name)
    }
}