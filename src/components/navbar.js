import React from 'react';
import NavBarItem from './navbaritem';

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="home.html" className="navbar-brand" style={{ fontSize: '20px', fontWeight: 'bolder' }}>Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem label="Home" href="#/Home" />
                        <NavBarItem label="Usuários" href="#/CadastroUsuario" />
                        <NavBarItem label="Lançamentos" href="/" />
                        <NavBarItem label="Login" href="#/Login" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;