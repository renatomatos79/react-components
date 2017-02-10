import React from 'react';
import {render} from 'react-dom';
import Estado from './estado.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(data){
        console.log(data);
    }

    render () {
        let items = [{sigla:"SP", nome:"Sao Paulo"}, {sigla:"RJ", nome:"Rio de Janeiro"}];
        return (
            <div>
                <Estado datasource={items} onSelected={this.onSelected} />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
