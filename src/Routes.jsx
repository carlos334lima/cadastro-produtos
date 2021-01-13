import React from 'react'

import { Route, HashRouter, Switch } from 'react-router-dom'

import Home from './views/home'
import CadatroProduto from './views/produtos/cadastro'

 const routes  = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cadastro' component={CadatroProduto} />
            </Switch>
        </HashRouter>
    )
}

export default routes;

