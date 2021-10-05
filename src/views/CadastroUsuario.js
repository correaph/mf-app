import React from 'react';
import Card from '../components/card'
import { withRouter } from 'react-router-dom';

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha1: '',
        senha2: ''
    }

    cadastrar = () => {
        console.log(this.state);
    }

    cancelar = () => {
        this.props.history.push('/Login');
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="inputNome">Nome: *</label>
                                        <input
                                            value={this.state.nome}
                                            onChange={(e) => this.setState({ nome: e.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="inputNome"
                                            name="nome"
                                            aria-describedby="emailHelp"
                                            placeholder="Digite o Nome">
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail">Email: *</label>
                                        <input
                                            value-={this.state.email}
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                            type="email"
                                            className="form-control"
                                            id="inputEmail"
                                            name="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Digite o Email">
                                        </input>
                                        <small
                                            id="emailHelp"
                                            className="form-text text-muted">
                                            Não divulgamos o seu email.
                                        </small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword1">Senha: *</label>
                                        <input
                                            value={this.state.senha1}
                                            onChange={(e) => this.setState({ senha1: e.target.value })}
                                            type="password"
                                            className="form-control"
                                            id="inputPassword1"
                                            placeholder="Password">
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPassword2">Repita a Senha: *</label>
                                        <input
                                            value={this.state.senha2}
                                            onChange={(e) => this.setState({ senha2: e.target.value })}
                                            type="password"
                                            className="form-control"
                                            id="inputPassword2"
                                            placeholder="Password">
                                        </input>
                                    </div>
                                    <button
                                        onClick={this.cadastrar}
                                        type="button"
                                        className="btn btn-success">
                                        Salvar
                                    </button>
                                    <button
                                        onClick={this.cancelar}
                                        type="button"
                                        className="btn btn-danger">
                                        Voltar
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default withRouter(CadastroUsuario);