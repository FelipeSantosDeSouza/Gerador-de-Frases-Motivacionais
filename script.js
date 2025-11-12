const frases= ["Acredite em si mesmo e tudo será possível 💪",
  "Cada dia é uma nova chance de recomeçar 🌅",
  "Pequenos passos também te levam longe 👣",
  "Você é mais forte do que imagina 🦁",
  "Grandes coisas começam com pequenos começos 🌱",
  "Persistência é o caminho do êxito 🚀",
  "A vitória nasce da superação diária 🏆",
  "O sucesso é a soma de pequenos esforços 💼",
  "Nunca é tarde para ser quem você poderia ser ✨",
  "Seja a energia que você quer atrair 🔥"];


  const frase = document.getElementById("frase")
  const botao = document.getElementById("botao")


  botao.addEventListener("click", function() {
    const indice = Math.floor(Math.random() * frases.length);
    frase.textContent=(frases[indice]);
   

    localStorage.setItem("ultimaFrase",( frases[indice]));
 });

    const ultima = localStorage.getItem("ultimaFrase");
if (ultima){
 frase.textContent = ultima;
}