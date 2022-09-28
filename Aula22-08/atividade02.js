/*let p = document.getElementById('horario');
let horario = setTimeout();
p.document.write($horario);*/
/*function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);
}*/
function mostrarTempo(){
	let dateTime= new Date();
	let time = dateTime.toLocaleTimeString();
	var display = document.querySelector('.horario');
	display.textContent = time;
	console.log(time);
	setTimeout(mostrarTempo, 1000);
}

function mostrarDia(){
	let dateTime2= new Date();
	let dia = (dateTime2.toLocaleDateString('pt-BR'));
	var data = document.querySelector('.dia');
	data.textContent = dia;
	console.log(dia);
}

function diaSemana(){
	const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

	let date = new Date();
	let dia= dias[date.getDay()];
	
	var ds = document.querySelector('.diasemana');
	ds.textContent = dia;
	console.log(dia);
}
