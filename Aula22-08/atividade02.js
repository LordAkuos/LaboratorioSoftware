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
