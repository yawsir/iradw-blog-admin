import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Admin from './Admin'
function Main() {
    return (
        <Router>
            <Route path="/" exact component={Admin}></Route>
            <Route path="/Login" exact component={Login}></Route>
            <Route path="/Admin" component={Admin}></Route>
        </Router>
    )
}

export default Main