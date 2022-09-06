let Carro = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    ano: document.getElementById('ano').value,
    cor: document.getElementById('cor').value,
    quilometragem: document.getElementById('km').value,
    valor_fipe: document.getElementById('valor_fipe').value,
    anosUtilizacao(){
        let data = new Date();
        if(this.ano < data){
            return data - this.ano;
        }
        this.setAnosUtilizacao();
        this.getAnosUtilizacao();
    },
    valorMercado(){
        if(this.valor_fipe <= 30000){
            return this.valor_fipe + (this.valor_fipe * (10 / 100));
        }
        if(this.valor_fipe > 30000 && this.valor_fipe <= 50000){
            return this.valor_fipe;
        }
        if (this.valor_fipe > 50000){
            return this.valor_fipe - (this.valor_fipe * (90 / 100));
        }
        this.setValorMercado();
        this.getValorMercado();
    }
};

let botao = document.getElementById('calcular');
botao.addEventListener('click', function(){
    let carro = new Carro();
    let p = document.createElement("p");
    let t = document.createTextNode("Seu veículo tem " + carro.getAnosUtilizacao() + "anos de utilização. E seu valor de mercado é R$" + carro.getValorMercado());
    p.appendChild(t);
    document.getElementById('resultado').appendChild(p);
});