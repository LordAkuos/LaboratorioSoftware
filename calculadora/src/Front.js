import React from 'react';

class Front extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                    <h1>Calculadora Personalizada</h1>
                </div>
                <br/>
                <div style={{backgroudColor: "black"}}>
                    <div>

                    </div>
                    <div class="row">
                        <div class="col-3">
                            <button>AC</button>
                        </div>
                        <div class="col-3">
                            <button>+/-</button>
                        </div>
                        <div class="col-3">
                            <button>%</button>
                        </div>
                        <div class="col-3">
                            <button style={{backgroudColor: "white"}}>÷</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Front;