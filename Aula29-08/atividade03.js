let frase = document.getElementById('resultado');

frase.addEventListener('click', function (){
    let verifica = "";
    let fraseV = document.getElementById('frase').value;
    for (let i = fraseV.length -1; i >= 0; i--) {
        verifica += fraseV.charAt(i);
    }
    if (verifica == fraseV) {
        alert('É palíndromo');
    } else {
        alert('Não é palíndromo');
    }
});