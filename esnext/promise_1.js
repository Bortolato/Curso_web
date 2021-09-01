let a = 1
console.log(a)


let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })  
})

console.log(p)
console.log( typeof Promise)

p.then(function(valor){
    console.log(valor.x)
})
p.then(valor => console.log(valor))
    //    .then()
    //    .then()
    //    .then()


let pessoas = new Promise( function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Daniel', 'Bernardo'])
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

pessoas
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    .then(console.log)