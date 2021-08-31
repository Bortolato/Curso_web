// nao aceita repeticao e nao é indexado
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Flamengo').add('Corinthians')
times.add('Vasco')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

