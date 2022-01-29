import React from 'react';
import Card from '../components/card'
import { withRouter } from 'react-router-dom';
import UsuarioService from '../app/service/usuarioService';
import { mensagemErro, mostrarMensagem } from '../components/toastr';

class CadastroUsuario extends React.Component {

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    state = {
        nome: '',
        email: '',
        senha1: '',
        senha2: ''
    }

    cadastrar = () => {
        const msgs = this.validar();
        if (msgs && msgs.length > 0) {
            msgs.forEach((msg, index) => {
                mensagemErro(msg);
            });
            return false;
        }
        this.service.salvar({
            nome: this.state.nome.trim(),
            email: this.state.email.trim(),
            senha: this.state.senha1.trim()
        }).then(response => {
            mostrarMensagem("Cadastro Usuário", "Usuário cadastrado! Faça login para acessar o sistema.", "info");
            this.props.history.push('/login');
        }).catch(erro => {
            mensagemErro(erro.response.data);
        });
    }

    validar() {
        const msgs = [];
        if (!this.state.nome) {
            msgs.push('O campo Nome é obrigatório!');
        }
        if (!this.state.email) {
            msgs.push('O campo Email é obrigatório!');
        } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            msgs.push('Campo Email inválido!');
        }
        if (!this.state.senha1 || !this.state.senha2) {
            msgs.push("Os campos Senha são obrigatórios!");
        } else if (this.state.senha1 !== this.state.senha2) {
            msgs.push("O campo senha não confere, precisam ser iguais!")
        }
        return msgs;
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