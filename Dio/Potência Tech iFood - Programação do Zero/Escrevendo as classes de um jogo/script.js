class hero {
  nome;
  idade;
  tipo;

    constructor(idade, tipo, name) {
      this.name = name;
      this.idade = idade;
      this.tipo = tipo;
    }
  attack() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default: 
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`)
  }
}


let heroi = new hero(23, "mago");
heroi.attack();