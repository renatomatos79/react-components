import React, { PropTypes } from 'react';

const propTypes = {
    datasource: PropTypes.array,
    onSelected: PropTypes.func
}

const defaultProps = {
    datasource: []
}

class Estado extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        const items = this.props.datasource.map( (item, i) =>
            <EstadoItem key={i} nome={item.nome} sigla={item.sigla} onSelected={this.props.onSelected}  />
        );

        return (
            <ul className="list-group">
            {items}
            </ul>
        );
    };
}

class EstadoItem extends React.Component {

    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(){
        let json = {sigla: this.props.sigla, nome: this.props.nome};
        this.props.onSelected(json);
    }

    render(){
        return (<li className="list-group-item" onClick={this.onItemClick}><a href="#">{this.props.nome}</a></li>);
    };
}


// associamos aqui as constantes propTypes e defaultProps ao nosso componente
Estado.propTypes = propTypes;
Estado.defaultProps = defaultProps;

// exportamos o nosso componente
export default Estado;