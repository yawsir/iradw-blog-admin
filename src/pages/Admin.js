import React, {useState} from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Route, useHistory} from 'react-router-dom'
import AddArticle from '../components/AddArticle'
import ArticleList from '../components/ArticleList'
import ModifyArticle from '../components/ModifyArticle'
import TagManage from '../components/TagManage'
import WorkBench from '../components/WorkBench'
const SubMenu = Menu.SubMenu
const {Sider, Header, Content} = Layout

function Admin() {

    let history = useHistory()
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    }

    const handelClick = (e) => {
        history.push(`/admin/${e.key}`)
    }

    return (
        <div className="admin">
             <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handelClick}>
                        <Menu.Item key="workbench">
                            <Icon type="pie-chart" />
                            <span>工作台</span>
                        </Menu.Item>
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
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#f5f5f5', padding: 0, height: 30 }} >
                        
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ padding: '10px'}}>
                            <Route path="/admin/addArticle" component={AddArticle}></Route>
                            <Route path="/admin/articleList" component={ArticleList}></Route>
                            <Route path="/admin/modifyArticle/:id" component={ModifyArticle}></Route>
                            <Route path="/admin/tagManage" component={TagManage}></Route>
                            <Route path="/admin/workbench" component={WorkBench}></Route>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Admin