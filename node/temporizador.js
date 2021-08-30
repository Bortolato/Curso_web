const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 1', function(){
    console.log('executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
}, 20000)

// marcar temporizador específico
const regra = new schedule.RecurrenceRule() 
regra.dayOfWeek = [new schedule.Range(1,5)] // de segunda a sexta
regra.hour = 9
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('executando tarefa 2', new Date().getSeconds())
})
