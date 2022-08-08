let array2 = {
    nigeria:"elephant",
    uganda:"sheep"
}
for (let prop in array2) {
    console.log(array2[prop])
    console.log ('in',prop,' we have', array2[prop])
}

//example 2
let array1=[2,4,6,8]
const result=array1.filter(array1 => array1.length/2)
console.log(result)