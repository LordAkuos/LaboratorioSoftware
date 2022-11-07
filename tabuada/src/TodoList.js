import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state;
    }

    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <ul>
                    {this.props.itens.map(
                        item => (<li key={item.id}>{item.text}</li>)
                    )}
                </ul>
            </div>
        );
    }
}