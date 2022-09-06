let carro = {
    marca: document.getElementById('marca'),
    modelo: document.getElementById('modelo'),
    ano: document.getElementById('ano'),
    cor: document.getElementById('cor'),
    quilometragem: document.getElementById('km'),
    valor_fipe: document.getElementById('valor_fipe'),
    anosUtilizacao(){
        let data = new Date();
        if(this.ano < data){
            return data - this.ano;
        }
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
    }
}

let botao = document.getElementById('calcular');
botao.addEventListener('click', function(){
    
});