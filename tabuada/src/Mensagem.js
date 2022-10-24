import React from "react";

class Mensagem extends React.Component{
    msg(t){
        alert(t);
    }

    render(){
        return(
            <button onClick={() => this.msg("Olá Mundo!")}>Mensagem</button>
        );
    }
}

export default Mensagem;