import React, {lazy, Suspense} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Admin from './Admin'
import {Spin} from 'antd'
const Login = lazy( () => import('./Login'))

function Main() {
    return (
        <Suspense fallback={<Spin></Spin>}>
        <Router >
            <Route path="/" exact component={Admin}></Route>
            <Route path="/Login" exact component={Login}></Route>
            <Route path="/Admin" component={Admin}></Route>
        </Router>
        </Suspense>
    )
}

export default Main