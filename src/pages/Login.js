import React, {useState} from 'react'
import {Input, Card, Button, Icon, Spin, message} from 'antd'
import '../style/page/login.scss'
import {api} from '../blog.config'
import {postFetch} from '../utils/utils'
function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const doLogin = () => {
        setIsLoading(true)
        const params = {username, password}
        postFetch(`${api}/admin/login`, params)
        .then(res => {
            console.log(res)
            if (res.success ) {
                setIsLoading(false)
                localStorage.setItem('openId', res.openId)
                props.history.push('/Admin')
            }else {
                message.error(res.msg, 1.5, ()=>{setIsLoading(false)})
            }
        })
    }
    return (
        <div className="login">
            <Spin spinning={isLoading} size="large" tip="请稍后。。。">
                <Card title="登录">
                    <Input id="username" placeholder="用户名" 
                        prefix={<Icon type="user"></Icon>}
                        onChange={(e)=>{setUsername(e.target.value)}}
                        className='form-item'>
                    </Input>
                    <Input.Password id="password" placeholder="密码"
                        prefix={<Icon type="lock"></Icon>}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        className="form-item">
                    </Input.Password>
                    <Button type="primary" size="large" onClick={doLogin} shape="round" className="btn" disabled={!(username && password)}>登录</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login