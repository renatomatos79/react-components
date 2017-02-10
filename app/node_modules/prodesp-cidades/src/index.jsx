import React from 'react';
import {render} from 'react-dom';
import Cidade from './cidade.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        let items =
            [
                {nome:"Sao Paulo", area: 450234, populacao: 10000000, capital: true},
                {nome:"Santo Andre", area: 350234, populacao: 5000000, capital: false},
                {nome:"Sao Bernardo", area: 234321, populacao: 7000000, capital: false}
            ];
        return (
            <div className="bs-example" data-example-id="simple-table">
                <Cidade datasource={items} title={"Relacao de Cidades do Estado de SP"}  />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
