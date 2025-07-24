# CarthiNó

**CarthiNó** é um jogo de dominó mobile para até 4 jogadores simultâneos, com chat de voz integrado, peças com poderes especiais, animações vibrantes e uma mesa 3D estilizada. Inspirado nas rodas de dominó entre amigos, o jogo traz uma experiência moderna, dinâmica e divertida.

## Universo

O jogo se passa em um mundo onde o dominó é mais do que um passatempo: é uma competição oficial entre bairros coloridos. Cada jogador representa uma região com seu estilo, cores e truques únicos. Nesse universo, as peças ganham vida com poderes especiais, e partidas são eventos animados, cheios de efeitos, barulho e torcida.

## 🎮 Visão Geral do Jogo

- Em vez de números, as peças têm **cores**
- Algumas peças possuem **poderes especiais**
- Jogadas são feitas por **encaixe de cor** (como no Uno)
- Vence quem **ficar sem peças primeiro** ou quem **fizer mais pontos**

## 🧩 Como São as Peças

- Cada peça tem **dois lados coloridos** (ex: vermelho | azul)
- Algumas possuem **ícones no meio** que indicam poderes:
  - 🔁 Inverter
  - ⏭️ Pular
  - 💣 Explosão
  - 🔄 Troca-mão
  - 🎨 Curinga

## 🕹️ Regras do Jogo

### 🔄 Turnos

- 4 jogadores por partida, jogando um por vez
- Só é possível jogar se **uma das cores da peça** combinar com as pontas da mesa
- Se não tiver peça jogável, o jogador **compra do monte** ou **passa**

### 🧠 Jogada

- O jogador arrasta ou clica numa peça da mão
- O jogo **destaca os encaixes possíveis**
- Se a peça tiver poder, ele é **executado automaticamente**

## 🌈 Curingas e Poderes

- 🎨 **Curinga** → pode ser jogada em qualquer lugar, define a nova cor da mesa
- 💣 **Explosão** → remove a última peça do tabuleiro
- 🔄 **Troca-mão** → troca sua mão com outro jogador
- 🔁 **Inverter** → inverte a ordem dos turnos
- ⏭️ **Pular** → pula o turno do próximo jogador

## 🧾 Modos de Vitória

- **Modo Clássico** → vence quem ficar sem peças
- **Modo Pontuação** → vence quem tiver mais pontos após X rodadas  
  - Peças normais valem 1 ponto  
  - Peças com poder valem mais

## 🔊 Som e Fala

- Voz digital anuncia poderes usados  
  (ex: “Jogador 2 usou Explosão!”)
- Efeitos sonoros para:
  - Jogar peça
  - Ativar poder
  - Vencer rodada

## 🎨 Animação

- Peças deslizam suavemente até a posição
- Peças especiais **brilham ou piscam**
- A mesa tem efeitos leves (ex: glow, pulsação de cor)

## 🛠️ Modo Online

- Cada jogador está em um dispositivo diferente
- Sincronização em tempo real com **Socket.io**
- Comunicação via **microfone** ou **chat com frases rápidas**

## 👁️ Exemplo de Jogada

- Você tem 🟩|🔴 na mão  
- A mesa tem ponta 🔴  
- Você joga 🟩|🔴, encaixando o lado vermelho  
- A peça tem 💣 (Explosão), então a última peça da mesa é removida  
- O jogo diz: “Jogador 1 usou Explosão!”  
- Próximo jogador é avisado da vez dele

## Fluxograma das Cenas

1. Tela de abertura  
2. Login / cadastro  
3. Lobby  
4. Escolha da sala
5. Mesa de jogo  
6. Tela de resultado  

## Ativos e Mapas

- **Peças** com cores e ícones de poder  
- **Avatares** com reações animadas (sorrisos, provocações, aplausos)  
- **Mesas** com temas variados:
  - Bairro padrão
  - Neon / noturna
  - Boteco
  - Futurista
- Sons ambientes personalizados por mapa
