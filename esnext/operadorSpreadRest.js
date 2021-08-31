// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro da funcao

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12000.00}
const clone = {ativo: true, ...funcionario } // esta incrementando todos os atributos de funcionario aqui
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)

