import ApiService from "../apiservice";

export default class LancamentoService extends ApiService {

    constructor() {
        super('/api/lancamentos');
    }

    consultar(lancamentoFiltro) {
        let params = `?ano=${lancamentoFiltro.ano}`;
        if (lancamentoFiltro.mes) {
            params += `&mes=${lancamentoFiltro.mes}`;
        }
        if (lancamentoFiltro.tipo) {
            params += `&mes=${lancamentoFiltro.tipo}`;
        }
        if (lancamentoFiltro.status) {
            params += `&mes=${lancamentoFiltro.status}`;
        }
        if (lancamentoFiltro.usuario) {
            params += `&usuario=${lancamentoFiltro.usuario}`;
        }
        return this.get(params);
    }

    deletar(id) {
        return this.delete(`/${id}`);
    }

}
