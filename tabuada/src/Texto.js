import React from "react";

class Texto extends React.Component{
    state = {
        name: 'LES',
    };
    componentDidMount(){
        //Muda o state após 1 segundo
        setTimeout(()=>{
            this.setState({name: 'Laboratório de Engenharia de Software'});
        }, 2000);
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        //Desativando o valor anterior do state
        document.getElementById('prev').innerHTML = 'Nome anterior: ' + prevState.name;
    }
    componentDidUpdate(){
        //Desativando o atual valor do state
        document.getElementById('new').innerHTML='Nome atual: ' + this.state.name;
    }
    render(){
        return(
            <div>
                <div id="prev"></div>
                <div id="new"></div>
            </div>
        );
    }
}

export default Texto;