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
                <div>
                    <div>

                    </div>
                    <div>
                        <div>
                            <button>AC</button>
                        </div>
                        <div>
                            <button>+/-</button>
                        </div>
                        <div>
                            <button>%</button>
                        </div>
                        <div>
                            <button>÷</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Front;