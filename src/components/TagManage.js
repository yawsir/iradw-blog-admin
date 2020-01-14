import React, {useEffect, useState} from 'react'
import TagManageUI from './UI/TagManageUI'
import {message} from 'antd'
import {api} from '../blog.config'
import {getFetch, postFetch} from '../utils/utils'
export default function TagManage(props) {

    const [loading, setLoading] = useState(false)
    const [tagList, setTagList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [newTagName, setNewTagName] = useState('')
    const [newTagColor, setNewTagColor] = useState('#000000')


    // 获取数据库中的所有标签
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

    useEffect(() => {
        getAllTags()
    }, [])

    // 点击确认修改按钮
    const modifyTagInfo = (tag_id, tag_name, tag_color) => {
        console.log(tag_id, tag_name, tag_color)
        postFetch(`${api}/admin/modifyTagInfo`, {tag_id, tag_name, tag_color})
        .then(res => {
            console.log(res)
            if (res.success === true) {
                message.success('修改标签成功', 1.5)
            }
        })
    }

    // 改变标签列表中的标签颜色
    const changeColor = (indexOfTagList, newColor) => {
        const tagListCopy = [...tagList]
        tagListCopy[indexOfTagList].tag_color = newColor
        setTagList(tagListCopy)
    }

    // 改变标签列表中的标签名
    const changeName = (indexOfTagList, newName) => {
        const tagListCopy = [...tagList]
        tagListCopy[indexOfTagList].tag_name = newName
        setTagList(tagListCopy)
    }

    // 网数据库中添加标签
    const addTag = () => {
        postFetch(`${api}/admin/addTag`, {newTagName, newTagColor})
        .then(res => {
            if (res.success === true) {
                setShowModal(false)
                message.success('添加标签成功', 1.5)
            }
        })
    }
    
    return (
        <TagManageUI
        tagList={tagList}
        modifyTagInfo={modifyTagInfo}
        changeColor={changeColor}
        changeName={changeName}
        showModal={showModal}
        setShowModal={setShowModal}
        newTagName={newTagName}
        setNewTagName={setNewTagName}
        newTagColor={newTagColor}
        setNewTagColor={setNewTagColor}
        addTag={addTag}
        loading={loading}></TagManageUI>
    )
}