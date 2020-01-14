import React, {useState, useEffect} from 'react'
import ArticleListUI from './UI/ArticleListUI'
import {api} from '../blog.config'
import {getFetch} from '../utils/utils'
export default function (props) {

    const [loading, setLoading] = useState(false)
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        setLoading(true)
        getFetch(`${api}/admin/articleList`)
        .then(res => {
            // console.log(res)
            setLoading(false)
            setArticleList(res.articleList)
        })
    }, [])

    const modifyArticle = (id) => {
        props.history.push(`/admin/modifyArticle/${id}`)
    }

    return (
        <div>
            <ArticleListUI articleList={articleList} 
            modifyArticle={modifyArticle}
            loading={loading}></ArticleListUI>
        </div>
    )
}