import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Login from './views/login'
import CadastroUsuario from './views/CadastroUsuario';

function rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/Login' component={Login} />
                <Route path='/CadastroUsuario' component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    );
}

export default rotas;