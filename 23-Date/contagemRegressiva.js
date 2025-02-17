const dataEvento = "12/12/2027 18H00"
const getDate = (data) => {
    let [date, time] = data.split(" ")
    let [day, month, year] = date.split("/")
    let [hour, min] = time.split("H")
    return new Date(year, month - 1, day, hour, min)
}
const dataEventoFormatada =  getDate(dataEvento)
let verificarDias = () =>{
    const dataAgora = new Date()
    let left = dataEventoFormatada.getTime() - dataAgora.getTime()
    const ONE_MIN = 60 * 1000
    const ONE_HOUR = 60 * ONE_MIN
    const ONE_DAY = 24 * ONE_HOUR
    const dayRemain = Math.floor(left / ONE_DAY)
    left -= dayRemain * ONE_DAY
    const hourRemain = Math.floor(left / ONE_HOUR)
    left -= hourRemain * ONE_HOUR
    const minRemain = Math.floor(left / ONE_MIN)
    const diasRestatens = `faltam exatamente ${dayRemain} dias ${hourRemain} horas e ${minRemain} minutos para chegar em ${dataEventoFormatada.toLocaleString()}`
    return diasRestatens
}
console.log(verificarDias())


const intervalo = setInterval(() =>{
    console.log(verificarDias())
}, 60000)