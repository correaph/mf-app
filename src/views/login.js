import React from "react";
import Card from '../components/card';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    };

    entrar = () => {
        console.log(this.state.email);
        console.log(this.state.senha);
    };

    prepareCadastrar = () => {
        this.props.history.push('/CadastroUsuario');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <form>
                                            <fieldset>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email: *</label>
                                                    <input
                                                        value={this.state.email}
                                                        onChange={(e) => this.setState({ email: e.target.value })}
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Digite o Email">
                                                    </input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Senha: *</label>
                                                    <input
                                                        value={this.state.senha}
                                                        onChange={(e) => this.setState({ senha: e.target.value })}
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="Password">
                                                    </input>
                                                </div>
                                                <button
                                                    onClick={this.entrar}
                                                    type="button"
                                                    className="btn btn-success">
                                                    Entrar
                                                </button>
                                                <button
                                                    onClick={this.prepareCadastrar}
                                                    type="button"
                                                    className="btn btn-danger">
                                                    Cadastrar
                                                </button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Login);

