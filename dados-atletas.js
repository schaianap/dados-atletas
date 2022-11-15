class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if (this.idade >=9 && this.idade <=11){
            return "Categoria: Infantil";

        } else if (this.idade >=12 && this.idade <=13){
            return "Categoria: Juvenil";

        } else if (this.idade >= 14 && this.idade <= 15){
            return "Categoria: Intermediário";

        } else if (this.idade >=16 && this.idade <= 30){
            return "Categoria: Adulto";

        } else {
            return "Sem Categoria";
        }
    }

    calculaIMC(){
        let multiplicacao = this.altura * this.altura;
        let imc = this.peso / multiplicacao;
        return imc;
    }

    calculaMediaValida(){
        let soma = 0;
        let media = 0;
        let notas = Atleta.notas;

        notas.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
        notas.pop();
        notas.shift();
        notas = notas;

        Atleta.notas.forEach(function(nota){
        soma = soma + nota
        media = soma/this.notas.length
        })
        return media;
    }

    obtemNomeDoAtleta(){
        return "Nome: " + this.nome;
    }

    obtemIdadeAtleta(){
        return "Idade: " + this.idade;
    }

    obtemPesoAtleta(){
        return "Peso: " + this.peso;
    }

    obtemNotasAtleta(){
        return "Notas: " + this.notas;
    }

    obtemCategoria(){
        return Atleta.calculaCategoria;
    }

    obtemIMC(){
        return Atleta.calculaIMC;
    }

    obtemMediaValida(){
        return Atleta.calculaMediaValida;
    }
}