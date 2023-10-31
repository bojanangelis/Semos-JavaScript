

const x = {
    'one': 'Value 1',
    'two': 'Value 2',
    'three': {
        'one': 'Value 1',
        'two': 'Value 2',
    },
}
// pokazuvac na x
// pokazuva
//napravimi nov obiekt so vrednostite od x
const y = Object.assign({}, x) // shadow copy
// mi pukazuva na x.one
y.one = 'New Value'
// deep copy

///////// --> mid levl. deep copy
// map, filter, some, find...
const deepCopy = (obj) => {
    const newObj = {} // cekor 1 {}   cekor 2 {one: "value 1}, cekor 3 {one: 'value1', 'two': value2}
    for (const key in obj) { // for loop key -> one,cekor 2 looop two, three: 
        // console.log('key->>', key)
        if (typeof obj[key] === 'object') { // cekor 1 ovoj if odpajga odi kaj else, two is not obj three is obj.
            newObj[key] = deepCopy(obj[key]) // tuka objoj one: 'value1', two: 'value 2'
        } 
        else { // cekor 1{one: "value 1"}, cekor 2 {two: "value 2}
            newObj[key] = obj[key]
        }
    }
    return newObj
}

const z = deepCopy(x)

x.three.one = 'This is not ONE'

// console.log(z)
// console.log(x)
// console.log(y)




const n = [
{
    one: 'valueOne',
    two: 'this is the first one',
    three: 'valueThree',
},
{
    one: 'valueOne',
    two: 'this is the second',
    three: 'value_three',
}
]

Object.keys 
Object.values
// ovie objects ni vrajkaat niza
Object.entries

console.log(n.filter((n) => n.one === 'valueOne')) // filter vrajka niza od isti elementi
console.log(n.find((n) => n.one === 'valueOne')) // find vrajka eden element od taa niza
console.log(n.some((n) => n.one === 'valueOne')) // some vrajka true - false
console.log(n.map((n) => n.one)) // map vrajka niza od isti elementi
console.log(n.findIndex((n) => n.one === 'valueOne')) // findIndex vrajka index na vrednosta
const index =  n.findIndex((n) => n.one === 'valueOne')
console.log('index-->', n[index])
// console.log(n[findIndex((n) => n.one === 'valueOne')])
