class Pessoa { //a utilizacao de chaves é feita para a abertura de arrays
    constructor(nome, idade) {
        this.nome = nome; // Propriedade // a palavra-chave this refere-se ao objeto de escopo(ela pode ser usada para modificar propriedades e metodos do objeto caso necessario tbm).
        this.idade = idade; // Propriedade
    }
    
      // Método
    apresentar() { //parenteses no javascprit servem para chamar funcoes definidas anteriormente//
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
    }
    
    // Criando um objeto (instância da classe)
    const pessoa1 = new Pessoa('João', 30); // a utilizacao de const para criar objetos se presupoe da mesma sintaxe referente a var, onde se denomina uma classe e nela colocamos seus metodos e atributos 
    console.log(pessoa1.apresentar()); // Olá, meu nome é João e tenho 30 anos.
    
    
    
    //-Heranca no JS
    
    class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    
    emitirSom() { // recaptulando a acao do paranetese, ele chama funcoes e em o
        console.log(`${this.nome} fez um som.`);  }
    }
    
    class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} latiu.`);
    }
    }
    
    const cachorro = new Cachorro('Rex');
    cachorro.emitirSom(); // Rex latiu.
    
    
    
    //-Encapsulamento no JS 
    
    class ContaBancaria {
      #saldo; // Propriedade privada
    
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    
    depositar(valor) {
        this.#saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
    }
    
      // Getter para acessar o saldo
    get saldo() {
        return this.#saldo;
    }
    }
    
    const conta = new ContaBancaria(100);
    conta.depositar(50);
    console.log(conta.saldo); // 150
    
    
    
    -//Polimorfismo no JS
    
    class Forma {
    calcularArea() {
        return 0; // Área padrão
    }
    }
    
    class Retangulo extends Forma {
    constructor(altura, largura) {
        super();
        this.altura = altura;
        this.largura = largura;
    }
    
    calcularArea() {
        return this.altura * this.largura;
    }
    }
    
    const retangulo = new Retangulo(5, 10);
    console.log(retangulo.calcularArea()); // 50
    
    
    
    
    //-Objeto e Prototipagem no JS
    
    function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }
    
    Pessoa.prototype.apresentar = function () {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    };
    
    const pessoa2 = new Pessoa('Maria', 25);
    console.log(pessoa2.apresentar()); // Olá, meu nome é Maria e tenho 25 anos.
    