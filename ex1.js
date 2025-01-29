//-Classe e Objeto no JS

// Definição de uma classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome; // Propriedade
        this.idade = idade; // Propriedade
    }
    
      // Método
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
    }
    
    // Criando um objeto (instância da classe)
    const pessoa1 = new Pessoa('João', 30);
    console.log(pessoa1.apresentar()); // Olá, meu nome é João e tenho 30 anos.
    