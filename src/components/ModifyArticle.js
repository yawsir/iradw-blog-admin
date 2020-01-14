import React, {useEffect, useState} from 'react'
import ModifyArticleUI from './UI/ModifyArticleUI'
import {message} from 'antd'
import {api} from '../blog.config'
import marked from 'marked'
import hljs from "highlight.js"
import {postFetch, getFetch} from '../utils/utils'
import 'highlight.js/styles/monokai-sublime.css'
export default function ModifyArticle(props) {

    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer: renderer, 
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })

    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [introduce, setIntroduce] = useState('')
    const [introducePreview, setIntroducePreview] = useState('')
    const [content, setContent] = useState('')
    const [contentPreview, setContentPreview] = useState('')
    const [tagList, setTagList] = useState([])
    const [selectedTagList, setSelectedTagList] = useState([])
    const [type, setType] = useState(1)
    const [ishome, setIshome] = useState(0)

    const getAllTags = () => {
        setLoading(true)
        getFetch(`${api}/admin/getAllTags`)
        .then(res => {
            setLoading(false)
            if (res.login === false) {  //用户没有登录就到了不应该去的页面
                message.warn('请先登录', 1, ()=>{props.history.push('/Login')})
                return
            }
            setTagList(res.tagList)
        })
    }

    const getArticleInfoById = (id) => {
        getFetch(`${api}/admin/getArticleById?article_id=${id}`)
        .then(res => {
            const article = res.article
            console.log(article)
            setTitle(article.article_title)
            setContent(article.article_content)
            setContentPreview(marked(article.article_content))
            setIntroduce(article.article_introduce)
            setIntroducePreview(marked(article.article_introduce))
            setType(article.article_type_id)
            setSelectedTagList(article.tags)
            setIshome(article.article_ishome)
        })
    }


    useEffect(() => {
        getAllTags()
        getArticleInfoById(props.match.params.id)
    }, [])

    // 选中标签
    const selectTag = (tag) => {
        const isExist = selectedTagList.some(item => item.tag_id === tag.tag_id)
        if (isExist) {
            return
        }
        postFetch(`${api}/admin/appendTag`, {article_id: props.match.params.id, tag_id: tag.tag_id})
        .then(res => {
            console.log(res)
            if (res.success === true) {
                setSelectedTagList([...selectedTagList, tag])
                message.success('追加标签成功', 1.5)
            }
        })
    }

    // 移除已选择的标签
    const removeTag = (index) => {
        const tag_id = selectedTagList[index].tag_id
        postFetch(`${api}/admin/removeTag`, {article_id: props.match.params.id, tag_id})
        .then(res => {
            console.log(res)
            if (res.success === true) {
                const newSelected = [...selectedTagList]
                newSelected.splice(index, 1)
                setSelectedTagList(newSelected)
                message.success('移除标签成功', 1.5)
            }
        })
        
    }

    // 改变文章是否在首页
    const toogleIshome = (checked) => {
        const newVal = checked ? 1 : 0
        postFetch(`${api}/admin/toogleIshome`, {ishome: newVal, article_id: props.match.params.id})
        .then(res => {
            console.log(res)
            if (res.success) {
                setIshome(newVal)
            }
        })
    }


    /**
     * 发表文章
     */
    const releaseArticle = () => {
        message.loading('正在修改')
        const params = {
            id: props.match.params.id,
            title, 
            introduce, 
            content,  
            type
        }
        postFetch(`${api}/admin/modifyArticle`, params)
        .then(res => {
            console.log(res)
            if (res.success === true) {
                message.success('修改成功')
            }
        })
    }

    // 输入标题
    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    // 输入简介
    const introduceChange = (e) => {
        setIntroduce(e.target.value)
        setIntroducePreview(marked(e.target.value))
    }

    // 输入内容
    const contentChange = (e) => {
        setContent(e.target.value)
        setContentPreview(marked(e.target.value))
    }

    const keyDown = (e) => {
        if (e.keyCode == 9) {
            e.preventDefault();
            var indent = '    '
            console.log(e)
            setContent(content+indent)
        }
    }
    return (
        <ModifyArticleUI 
        loading={loading}
        title={title}
        titleChange={titleChange}
        introduce={introduce}
        introducePreview={introducePreview}
        introduceChange={introduceChange}
        content={content}
        contentPreview={contentPreview}
        contentChange={contentChange}
        type={type}
        setType={setType}
        releaseArticle={releaseArticle}
        tagList={tagList}
        selectedTagList={selectedTagList}
        selectTag={selectTag}
        removeTag={removeTag}
        ishome={ishome}
        toogleIshome={toogleIshome}
        keyDown={keyDown}></ModifyArticleUI>
    )
}