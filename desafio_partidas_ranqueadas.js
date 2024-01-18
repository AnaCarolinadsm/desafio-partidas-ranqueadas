function matches(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
  }
  
  function rank() {
    let saldoVitoria = matches(70, 10)
    let nivel = ""
    if (saldoVitoria <= 10) {
      nivel = "Ferro"
    } else if (saldoVitoria <= 20) {
      nivel = "Bronze"
    } else if (saldoVitoria <= 50) {
      nivel = "Prata"
    } else if (saldoVitoria <= 80) {
      nivel = "Ouro"
    } else if (saldoVitoria <= 90) {
      nivel = "Diamante"
    } else if (saldoVitoria <= 100) {
      nivel = "Lendário"
    } else if (saldoVitoria >= 100) {
      nivel = "Imortal"
    }
    return `O Herói tem o saldo de ${saldoVitoria} e está no nível de ${nivel}`
  }
  
  console.log(rank())