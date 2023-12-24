let nomeHeroi = ["Goku", "Vegeta", "Gohan", "Pan", "Trunks", "Goten", "Bra", "Raditz", "Nappa", "Bardok", "Rei Vegeta" ]
let xpHeroi = [12000, 11000, 8635, 1978, 6487, 5789, 250, 689, 746, 1000, 931]


for (let i = 0; i < nomeHeroi.length; i++){
  if (xpHeroi[i] < 1001){
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Ferro")
  } else if (xpHeroi[i] < 2001){
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Bronze")
  } else if (xpHeroi[i] < 5001){
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Prata")
  }  else if (xpHeroi[i] < 7001){
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Ouro")
  }  else if (xpHeroi[i] < 8001){
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Platina")
  }  else if (xpHeroi[i] < 9001){
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Ascendente")
  }  else if (xpHeroi[i] < 10001){
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Imortal")
  } else
    console.log("O herói de nome " + nomeHeroi[i] + " está no nível Radiante")
}
