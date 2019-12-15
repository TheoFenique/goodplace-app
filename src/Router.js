import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './views/Login'
import Register from './views/Register'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/connexion" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
)

export default Router;