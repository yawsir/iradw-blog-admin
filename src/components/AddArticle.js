import React, {useState, useEffect} from 'react'
import AddArticleUI from './UI/AddArticleUI'
import {message} from 'antd'
import {api} from '../blog.config'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/monokai-sublime.css'
import {postFetch, getFetch, now, localStorageGet, localStorageSet, localStorageRemove} from '../utils/utils'
export default function AddArticle(props) {

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
    /**
     * 文章标题
     * 文章简介
     * 文章内容
     * 选择的文章标签
     * 数据库中的标签
     * 文章分类
     * 发布时间
     */
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [introduce, setIntroduce] = useState('')
    const [introducePreview, setIntroducePreview] = useState('')
    const [content, setContent] = useState('')
    const [contentPreview, setContentPreview] = useState('')
    const [tagList, setTagList] = useState([])
    const [selectedTagList, setSelectedTagList] = useState([])
    const [type, setType] = useState(1)

    /**
     * 获取所有标签 在这里做了登录验证
     */
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

    const getTemArticle = () => {
        const temArticle = localStorageGet('temArticle')
        if (temArticle) {
            setTitle(temArticle.title)
        setIntroduce(temArticle.introduce)
        setContent(temArticle.content)
        }
        
    } 


    useEffect(() => {
        getAllTags()
        getTemArticle()
    }, [])

    // 选中标签
    const selectTag = (tag) => {
        const isExist = selectedTagList.some(item => item.tag_id === tag.tag_id)
        if (isExist) {
            return
        }
        setSelectedTagList([...selectedTagList, tag])
    }

    // 移除已选择的标签
    const removeTag = (index) => {
        const newSelected = [...selectedTagList]
        newSelected.splice(index, 1)
        setSelectedTagList(newSelected)
    }

    // 暂存文章
    const saveArticle = () => {
        const temArticle = {
            title,
            introduce,
            content
        }
        localStorageSet('temArticle', temArticle)
        message.success('暂存成功')
    }

    /**
     * 发表文章
     */
    const releaseArticle = () => {
        message.loading('正在发布')
        const params = {
            title, 
            introduce, 
            content, 
            tags: selectedTagList.map(item => item.tag_id), 
            type, 
            date: now()
        }
        postFetch(`${api}/admin/releaseArticle`, params)
        .then(res => {
            if (res.success === true) {
                message.success('发布成功')
                setTitle('')
                setIntroduce('')
                setIntroducePreview('')
                setContent('')
                setContentPreview('')
                setSelectedTagList([])
                localStorageRemove('temArticle')
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
            var indent = '    ';
            setContent(content+indent)
        }
    }

    return (
        <AddArticleUI 
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
        saveArticle={saveArticle}
        releaseArticle={releaseArticle}
        tagList={tagList}
        selectedTagList={selectedTagList}
        selectTag={selectTag}
        removeTag={removeTag}
        keyDown={keyDown}></AddArticleUI>
    )
}