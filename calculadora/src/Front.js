import React from 'react';
import './front.css';

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
                <div  id='calculadora'>
                    <div>

                    </div>
                    <div class='numero'>
                        <div>
                            <button class="ac">AC</button>
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
                    <br/>
                    <br/>
                    <div class='numero'>
                        <div>
                            <button>7</button>
                        </div>
                        <div>
                            <button>8</button>
                        </div>
                        <div>
                            <button>9</button>
                        </div>
                        <div>
                            <button>X</button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class='numero'>
                        <div>
                            <button>4</button>
                        </div>
                        <div>
                            <button>5</button>
                        </div>
                        <div>
                            <button>6</button>
                        </div>
                        <div>
                            <button>-</button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class='numero'>
                        <div>
                            <button>1</button>
                        </div>
                        <div>
                            <button>2</button>
                        </div>
                        <div>
                            <button>3</button>
                        </div>
                        <div>
                            <button>+</button>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class='numero'>
                        <div>
                            <button class="zero">0</button>
                        </div>
                        <div>
                            <button>,</button>
                        </div>
                        <div>
                            <button>=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Front;