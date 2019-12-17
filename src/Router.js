import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Event from './views/Event'
import Login from './views/Login'
import Register from './views/Register'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/connexion" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/event" component={Event} />
        </Switch>
    </BrowserRouter>
)

export default Router;