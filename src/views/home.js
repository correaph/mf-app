import React from 'react';
import { withRouter } from 'react-router-dom';
import UsuarioService from '../app/service/usuarioService';

class Home extends React.Component {

    constructor() {
        super();
        this.usuarioService = new UsuarioService(); 
    }

    cadastrarUsr = () => {
        this.props.history.push('/CadastrarUsuario');
    }

    state = {
        saldo: 0
    }

    componentDidMount() {
        const usuarioLogado = JSON.parse(localStorage.getItem('_usuario_logado'));
        this.usuarioService.obterSaldoPorUsuario(usuarioLogado.id)
            .then(response => { this.setState({ saldo: response.data }) })
            .catch(erro => { console.log(erro.response) });
    }

    render() {

        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de {this.state.saldo}</p>
                <hr className="my-4"></hr>
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg"
                        href="#/CadastroUsuario"
                        role="button"><i className="fa fa-users"></i>
                        Cadastrar Usuário
                    </a>
                    <a
                        className="btn btn-danger btn-lg"
                        href="https://bootswatch.com/flatly/#"
                        role="button"><i className="fa fa-users"></i>
                        Cadastrar Lançamento
                    </a>
                </p>
            </div>
        );
    }
}

export default withRouter(Home);