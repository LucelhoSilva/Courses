function game(vitoria, derrota) {
  let resul = vitoria - derrota;
  return resul;
}

function ranking(){
let resultRanking = game(191, 11)
let nivel = ""
if (resultRanking <= 10){
    nivel = "Ferro"
} else if (resultRanking <= 20){
    nivel = "Bronze"
} else if (resultRanking <= 50){
    nivel = "Prata"
} else if (resultRanking <= 80){
    nivel = "Ouro"
} else if (resultRanking <= 90){
    nivel = "Diamante"
} else if (resultRanking <= 100){
    nivel = "Lendário"
} else if (resultRanking => 101){
    nivel = "Imortal"
}
return `O Herói tem de saldo de ${resultRanking} vitórias e está no nível de ${nivel}`
}
console.log(ranking())
