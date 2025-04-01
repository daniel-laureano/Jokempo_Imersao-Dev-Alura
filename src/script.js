function jogar() {
  idade = prompt("Digite sua idade: ");
  
  if (idade < 18) {
    alert("Para desafiar Walter White, precisa ser maior de idade.");
  }

  if (idade >= 18) {
    alert ("You god damn right!")
    escolhaJogador = prompt("Let's cook! Digite 1-Pedra, 2-Papel ou 3- Tesoura:");
    escolhaWalter = Math.floor(Math.random() * 3) + 1;

    // Jogador Pedra, Walter White Pedra --> Empate
    // Jogador Papel, Walter White Papel --> Empate
    // Jogador Tesoura, Walter White Tesoura --> Empate

    if (escolhaJogador == escolhaWalter) {
      alert("Empate!");
    }

    if (escolhaJogador == 1) {
      if (escolhaWalter == 2) {
        // Jogador Pedra, Walter White Papel --> Walter White vence
        alert("Walter White venceu, escolheu papel!");
      }
      if (escolhaWalter == 3) {
        // Jogador Pedra, Walter White Tesoura --> Jogador vence
        alert("Você venceu, Walter White escolheu tesoura!");
      }
    }

    if (escolhaJogador == 2) {
      if (escolhaWalter == 1) {
        // Jogador Papel, Walter White Pedra --> Jogador Vence
        alert("Você venceu, Walter White escolheu pedra!");
      }
      if (escolhaWalter == 3) {
        // Jogador Papel, Walter White Tesoura --> Walter White Vence
        alert("Walter White venceu, escolheu tesoura!");
      }
    }

    if (escolhaJogador == 3) {
      if (escolhaWalter == 1) {
        // Jogador Tesoura, Walter White Pedra --> Walter White vence
        alert("Walter White venceu, escolheu pedra!");
      }
      if (escolhaWalter == 2) {
        // Jogador Tesoura, Walter White Papel --> Jogador vence
        alert("Você venceu, Walther White escolheu pedra!");
      }
    }

    alert("A escolha de Heisenberg foi: " + escolhaWalter);
  }
}
