import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CadastroUsuario from './views/CadastroUsuario';
import Login from './views/login';
import Home from './views/home';
import ConsultaLancamentos from './views/lancamentos/ConsultaLancamentos';

function rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/Home' component={Home} />
                <Route path='/Login' component={Login} />
                <Route path='/CadastroUsuario' component={CadastroUsuario} />
                <Route path='/ConsultaLancamento' component={ConsultaLancamentos} />
            </Switch>
        </HashRouter>
    );
}

export default rotas;