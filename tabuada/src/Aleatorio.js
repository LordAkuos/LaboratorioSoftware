import React from "react";

class Aleatorio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: true,
            contagemDeClicks: 0
        };
        this.pickRandom = this.pickRandom.bind(this);
    }
    pickRandom(){
        this.setState({
            value: Math.random() > 0.5,
            contagemDeClicks: this.state.countOfClicks + 1
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.state.value != nextState.value;
    }
    render(){
        return(
            <div>
                <p><b>{this.state.contagemDeClicks}</b></p>
                <p>Contagem de cliques: <b>{this.state.contagemDeClicks}</b></p>
                <button onClick={this.pickRandom}>
                    Clique para selecionar aleatoriamente: true ou false
                </button>
            </div>
        )
    }
}

export default Aleatorio;