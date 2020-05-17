import React, {useState, lazy, Suspense, useEffect} from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Route, useHistory, useLocation} from 'react-router-dom'
import useSpin from '../HoC/useSpin'
const AddArticle = lazy(() => import('../components/AddArticle'))
const ArticleList = lazy( () => import('../components/ArticleList'))
const ModifyArticle = lazy( () => import('../components/ModifyArticle'))
const TagManage = lazy( () => import('../components/TagManage'))
const AddUtil = lazy( () => import('../components/UtilsManage/AddUtil'))
const UtilList = lazy( () => import('../components/UtilsManage/UtilList'))
const SubMenu = Menu.SubMenu
const {Sider, Header, Content} = Layout



const MySpin = useSpin()

function Admin() {

    let history = useHistory()
    const [collapsed, setCollapsed] = useState(false)
    const [selectedKeys, setSelectedKeys] = useState(['tags'])
    const currLocation = useLocation()

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    }
    const handelClick = (e) => {
        history.push(`/admin/${e.key}`)
    }

    const syncMenu =() => {
        const curr = currLocation.pathname.split('/')[2]
        console.log(curr)
        curr && setSelectedKeys(() => [curr])
    }

    useEffect(() => {
        syncMenu()
    }, [currLocation])

    return (
        <div className="admin">
             <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <Menu theme="dark" selectedKeys={selectedKeys} mode="inline" onClick={handelClick}>
                        <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="read" />
                            <span>文章管理</span>
                            </span>
                        }>
                            <Menu.Item key="addArticle">添加文章</Menu.Item>
                            <Menu.Item key="articleList">文章列表</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="tagManage">
                            <Icon type="tags" />
                            <span>标签管理</span>
                        </Menu.Item>
                        <SubMenu key="sub2"
                        title={
                            <span>
                            <Icon type="tool" />
                            <span>工具管理</span>
                            </span>
                        }>
                            <Menu.Item key="utilList">工具列表</Menu.Item>
                            <Menu.Item key="addUtil">添加工具</Menu.Item>
                            
                        </SubMenu>
                        
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#f5f5f5', padding: 0, height: 30 }} >
                        
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Suspense fallback={<MySpin size="large"></MySpin>}>
                            <div style={{ padding: '10px'}}>
                                <Route path="/admin/addArticle" component={AddArticle}></Route>
                                <Route path="/admin/articleList" component={ArticleList}></Route>
                                <Route path="/admin/modifyArticle/:id" component={ModifyArticle}></Route>
                                <Route path="/admin/tagManage" component={TagManage}></Route>
                                <Route path="/admin/addUtil" component={AddUtil}></Route>
                                <Route path="/admin/utilList" component={UtilList}></Route>
                            </div>
                        </Suspense>
                        
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin