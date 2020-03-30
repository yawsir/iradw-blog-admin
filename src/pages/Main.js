import React, {lazy} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Admin from './Admin'
const Login = lazy( () => import('./Login'))

function Main() {
    return (
        <Router >
            <Route path="/" exact component={Admin}></Route>
            <Route path="/Login" exact component={Login}></Route>
            <Route path="/Admin" component={Admin}></Route>
        </Router>
    )
}

export default Main