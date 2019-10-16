
//recuperar o botão calcular xp
let btn = document.querySelector('#btn-calcular');
btn.addEventListener('click', CalcularXP);


// criar a função para calcular XP
function CalcularXP() {
    //calcular o xp dos herois - pegar os herois
    let herois = document.querySelectorAll('.heroi');
    console.log(herois);

    for (let i = 0; i < herois.length; i++) {

      //pegando a velocidade
      let velocidade = herois[i].querySelector('.velocidade').textContent;

      //pegando a agilidade
      let agilidade = herois[i].querySelector('.agilidade').textContent;

      //pegando a forca
      let forca = herois[i].querySelector('.forca').textContent;

      //calcular o XP
      let xp = (Number(velocidade) + Number(agilidade) + Number(forca));
      console.log(xp);

      //exibir
      herois[i].querySelector('.xp-final').textContent = xp;

      //verificar se precisa melhorar habilidades
      if (xp < 250) {
        //fazer isso apenas aqui, NUNCA NO MUNDÃO
        // herois[i].style.backgroundColor = '#f60';
        // herois[i].style.color = '#fff';
        herois[i].classList.add('bg-warning','text-light');
      }
}






}
