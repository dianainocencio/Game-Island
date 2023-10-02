const numero_secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

for (let tentativa = 1; tentativa <= 5; tentativa++) {
    const palpite = Number(prompt("Digite seu palpite entre 1 e 100"));

    if (palpite < 1 || palpite > 100) {
        console.log("Insira um número entre 1 e 100");
        continue;
    }

    tentativas++; // Incrementa o número de tentativas

    if (palpite === numero_secreto) {
        console.log(`Parabéns você acertou! O número secreto era ${numero_secreto} em ${tentativas} tentativas.`);
        break;
    } else if (palpite < numero_secreto) {
        console.log('Palpite abaixo do número secreto. Tente novamente.');
    } else {
        console.log('Palpite acima do número secreto. Tente novamente.');
    }
}

if (tentativas === 5 && palpite !== numero_secreto) {
    console.log(`Você perdeu! O número era ${numero_secreto}`);
}
