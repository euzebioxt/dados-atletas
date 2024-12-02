

class Atleta {
  constructor(nome,idade,peso,altura,notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }

  calculaCategoria(){
    if (this.idade > 8 & this.idade < 12){
      return {cateegoria: "categoria Infantil"}
    }
    if (this.idade > 11 & this.idade < 14){
      return {categoria : "categoria Juvenil"}
    }
    if (this.idade > 13 & this.idade < 16){
      return {categoria:  "categoria Intermediário"}
    }
    if (this.idade > 15 & this.idade < 31){
      return {categoria :  "categoria Adulto"}
    }
    else{
      return {categoria: "Sem categoria: demais idades"}
    }

  }
  calculaIMC(){
    let imc = this.peso / (this.altura * this.altura)
    return {IMC: imc}
  }

  calculaMediaValida(){
    function ordena(a, b){
      if (a < b) return -1
      return 1
    }
    let media = []
    let total = this.notas.sort(ordena).slice(1,4) .reduce((valorAcumulado, elementoAtual) => {
      return valorAcumulado + elementoAtual
    }, 0);
    media.push(total / 3)
    return {Média_válida: media}
  }
  obtemNomeAtleta(){
    return {NOME : this.nome}
  }

  obtemIdadeAtleta(){
    return {IDADE : this.idade}
  }

  obtemPesoAtleta(){
    return {PESO : this.peso}
  }

  obtemNotasAtleta(){
    return {NOTAS : this.notas}
  }

  obtemCategoria(){
    return this.calculaCategoria()
  }

  obtemIMC(){
    return this.calculaIMC()
  }

  obtemMediaValida(){
    return this.calculaMediaValida()
  }


}

const atleta = new Atleta("Cesar Abascal",
30, 80, 1.70,
[10, 9.34, 8.42, 10, 7.88]);




console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())

