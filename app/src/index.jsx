import React from 'react';
import {render} from 'react-dom';
import Estado from 'prodesp-estados';
import Cidade from 'prodesp-cidades';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            estados: [{sigla:"SP", nome:"Sao Paulo"}, {sigla:"RJ", nome:"Rio de Janeiro"}],
            cidades: [],
            title: "Relaçao de Cidades"
        }
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(data){
        console.log(data);

        var cidades = [];
        if (data.sigla === "SP"){
            cidades.push({nome:"Sao Paulo", area: 450234, populacao: 10000000, capital: true});
            cidades.push({nome:"Santo Andre", area: 350234, populacao: 5000000, capital: false});
            cidades.push({nome:"Sao Bernardo", area: 234321, populacao: 7000000, capital: false});
        } else {
            cidades.push({nome:"Angra dos Reis", area: 450234, populacao: 10000000, capital: false});
            cidades.push({nome:"Barra Mansa", area: 350234, populacao: 5000000, capital: false});
            cidades.push({nome:"Rio de Janeiro", area: 234321, populacao: 7000000, capital: true});
            cidades.push({nome:"Macae", area: 234321, populacao: 7000000, capital: false});
            cidades.push({nome:"Marica", area: 234321, populacao: 7000000, capital: false});
        }

        this.setState({
            title: "Relaçao de Cidades do Estado " + data.nome,
            cidades: cidades
        });
    }

    render () {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <Estado datasource={this.state.estados} onSelected={this.onSelected} />
                </div>
                <div className="col-lg-6">
                    <Cidade datasource={this.state.cidades} title={this.state.title} />
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));