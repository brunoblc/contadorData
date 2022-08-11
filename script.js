let dataDeInicio = prompt("Quando começou o namoro? (Formato DD/MM/YYYY")

let dataConversao = moment(dataDeInicio, "DD/MM/YYYY")

let hoje = moment()

let dataDif = hoje - dataConversao

let opcao = prompt("Escolha como gostaria de ver o tempo de namoro\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(opcao == "1") {
    let segundos = Math.round(dataDif / 1000)
    alert(`Tempo junto são de ${segundos} segundos`)
} else if(opcao == "2") {
    let minutos = Math.round(dataDif / 1000 / 60)
    alert(`Tempo junto são de ${minutos} minutos`)
}else if(opcao == "3") {
    let horas = Math.round(dataDif / 1000 / 3600)
    alert(`Tempo junto são de ${horas} horas`)
}else if(opcao == "4") {
    let dias = Math.round(dataDif / 1000 / 3600 / 24)
    alert(`Tempo junto são de ${dias} dias`)
} else {
    alert("Opção inválida..")
}