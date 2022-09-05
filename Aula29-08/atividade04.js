let lista = new Array();
let botao = document.getElementById('botao');
let l, t;

botao.addEventListener('click', function(){
    lista.push(document.getElementById('lista').value);
    lista.sort();
    listar();
});

function listar(){
    for(i=0;i<lista.length;i++){
        l = document.createElement("li");
        t = document.createTextNode(lista[i]);
        l.appendChild(t);
        document.getElementById('minhaLista').appendChild(l);
    }
}
