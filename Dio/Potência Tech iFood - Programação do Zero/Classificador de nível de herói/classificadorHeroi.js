let nick = "Shaolin Matador de Porco";
let xp = 2000;

if (xp <= 1000) {
    console.log("\x1b[31m", "O Herói de nome " + nick + " está no nível ferro"); // Vermelho
} else if (xp > 1000 && xp <= 2000) {
    console.log("\x1b[33m", "O Herói de nome " + nick + " está no nível bronze"); // Amarelo
} else if (xp > 2000 && xp <= 6000) {
    console.log("\x1b[32m", "O Herói de nome " + nick + " está no nível prata"); // Verde
} else if (xp > 6000 && xp <= 7000) {
    console.log("\x1b[34m", "O Herói de nome " + nick + " está no nível ouro"); // Azul
} else if (xp > 7000 && xp <= 8000) {
    console.log("\x1b[35m", "O Herói de nome " + nick + " está no nível platina"); // Magenta
} else if (xp > 8000 && xp <= 9000) {
    console.log("\x1b[36m", "O Herói de nome " + nick + " está no nível ascendente"); // Ciano
} else if (xp > 9000 && xp <= 10000) {
    console.log("\x1b[37m", "O Herói de nome " + nick + " está no nível imortal"); // Branco
} else if (xp > 10000) {
    console.log("\x1b[90m", "O Herói de nome " + nick + " está no nível radiante"); // Cinza
}