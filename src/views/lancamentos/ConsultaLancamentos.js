import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../../components/card';
import LancamentosTable from './lancamentosTable';
import LancamentosService from '../../app/service/lancamentoService';
import { mensagemErro, mostrarMensagem } from '../../components/toastr';

class ConsultaLancamentos extends React.Component {

    state = {
        ano: '',
        mes: '',
        tipo: '',
        usuario: '',
        lancamentos: []
    }

    constructor() {
        super();
        this.service = new LancamentosService();
    }

    buscar = () => {
        if (!this.state.ano) {
            mensagemErro("Campo 'Ano' é obrigatório!");
            return false;
        }
        const usuarioLogado = JSON.parse(localStorage.getItem('_usuario_logado'));
        console.log("usuarioLogado = " + usuarioLogado);
        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            tipo: this.state.tipo,
            usuario: usuarioLogado.id
        }
        console.log("lancamentoFiltro = " + JSON.stringify(lancamentoFiltro));
        this.service.consultar(lancamentoFiltro).then(
            response => {
                this.setState({ lancamentos: response.data });
            }).catch(erro => {
                console.log(erro);
            })
    }

    editar = (id) => {
        console.log("edit id = " + id);
    }

    deletar = (lancamento) => {
        console.log("delete id = " + lancamento.id);
        this.service.deletar(lancamento.id)
            .then(response => {
                const index = this.state.lancamentos.indexOf(lancamento);
                this.state.lancamentos.splice(index,1);
                mostrarMensagem("Exclusão","Registro excluído com sucesso!","info");
            });
    }

    render() {

        return (
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div col="col-md-6">
                        <div className="bs-component">
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="inputAno">Ano: *</label>
                                        <input
                                            value={this.state.ano}
                                            onChange={(e) => this.setState({ ano: e.target.value })}
                                            type="text"
                                            className="form-control"
                                            id="inputAno"
                                            placeholder="Digite o Ano">
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputMes">Mês: *</label>
                                        <select className="form-control"
                                            id="inputMes"
                                            value={this.state.mes}
                                            onChange={e => this.setState({ mes: e.target.value })}
                                        >
                                            <option value="0">SELECIONE...</option>
                                            <option value="1">Janeiro</option>
                                            <option value="2">Fevereiro</option>
                                            <option value="3">Março</option>
                                            <option value="4">Abril</option>
                                            <option value="5">Maio</option>
                                            <option value="6">Junho</option>
                                            <option value="7">Julho</option>
                                            <option value="8">Agosto</option>
                                            <option value="9">Setembro</option>
                                            <option value="10">Outubro</option>
                                            <option value="11">Novembro</option>
                                            <option value="12">Dezembro</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputTipo">Tipo de Lançamento: </label>
                                        <select className="form-control"
                                            id="inputTipo"
                                            value={this.state.tipo}
                                            onChange={e => this.setState({ tipo: e.target.value })}
                                        >
                                            <option value="0">SELECIONE...</option>
                                            <option value="1">RECEITA</option>
                                            <option value="2">DESPESA</option>
                                        </select>
                                    </div>
                                    <br />
                                    <button type="button" className="btn btn-success" onClick={this.buscar}>Buscar</button>
                                    <button type="button" className="btn btn-danger">Cadastrar</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable
                                lancamentos={this.state.lancamentos}
                                editAction={this.editar}
                                deleteAction={this.deletar}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default withRouter(ConsultaLancamentos);