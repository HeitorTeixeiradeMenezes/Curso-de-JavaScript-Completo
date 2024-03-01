let arr = [1, 3, 5, 12, 16]

// push
let teste = arr.push(40, 45)
console.log(teste)
console.log(arr)

// pop
let pop = arr.pop()
console.log(pop)
console.log(arr)

// shift
let shift = arr.shift()
console.log(shift)
console.log(arr)

// unshift
let unshift = arr.unshift("unshiftado", "josiane", 10000)
console.log(unshift)
console.log(arr)

// slice
let slice = arr.slice(4, 6)
console.log(slice)
console.log(arr)

// splice
let splice = arr.splice(3, 2, "adicionado")
console.log(splice)
console.log(arr)
