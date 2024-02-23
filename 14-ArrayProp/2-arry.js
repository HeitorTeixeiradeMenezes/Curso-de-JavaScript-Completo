let arr = [1, 2, 5, 20, 35, 4, 5]

console.log(arr.lastIndexOf(5), "lastIndexOf")
console.log(arr.indexOf(4752), "indexOf")

console.log(arr.includes(5), "includes")
console.log(arr.includes(8451), "includes")

console.log(arr.find(function(el){
    return el >= 22
}), "find")
console.log(arr.findIndex(function(el){
    return el > 3
}, "findIndex"))