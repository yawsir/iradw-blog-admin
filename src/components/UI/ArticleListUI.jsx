import React from 'react'
import {List, Spin} from 'antd'
import '../../style/component/ArticleList.scss'
export default function ({articleList, modifyArticle, loading}) {


    
    return (
        <Spin spinning={loading}>
            <div className='article-list'>
                <List dataSource={articleList}
                renderItem={item => (
                    <List.Item onClick={()=>{modifyArticle(item.article_id)}} className='article-item'>
                        <List.Item.Meta title={item.article_title} description={`发布日期${item.article_date}`} />
                    </List.Item>)}>
                </List>
            </div>
        </Spin>
    )
}