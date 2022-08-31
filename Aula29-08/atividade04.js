let botao = document.getElementById('botao');

botao.addEventListener('click', function(){
    let lista = document.getElementById('lista').value;
    let o = document.createElement("ol");
    let l = document.createElement("li");
    l.appendChild(lista);
    o.appendChild(l);
    document.body.appendChild(o);
});

