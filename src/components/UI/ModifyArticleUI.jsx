import React from 'react'
import {Input, Select, Button, Switch, Spin} from 'antd'
import TagSelector from './TagSelectorUI'
import ImageUploader from '../ImageUploader'
import '../../style/component/ModifyArticle.scss'
const {TextArea} = Input
const {Option} = Select
export default function ModifyArticleUI({title, introduce, content, introducePreview, contentPreview,
    tagList, selectedTagList, type, selectTag, removeTag, titleChange, introduceChange, 
    contentChange, setType, releaseArticle, ishome, toogleIshome, keyDown, loading}) {
    return (
        <Spin spinning={loading}>
        <div className="modify-article">
            <div className="left">
                <Input placeholder="文章标题" 
                value={title} 
                onChange={titleChange}
                ></Input>
                <div className="markdown">
                    <div className="markdown-write">
                        <TextArea 
                        placeholder="文章简介" 
                        autoSize={{minRows: 4, maxRows:4}} 
                        value={introduce}
                        onChange={introduceChange}
                        ></TextArea>
                    </div>
                    <div className="markdown-preview introduce-preview" dangerouslySetInnerHTML={{__html:introducePreview}}></div>
                </div>
                <div className="markdown">
                    <div className="markdown-write">
                        <TextArea placeholder="文章内容" 
                        autoSize={{minRows:24, maxRows:24}}
                        value={content}
                        onChange={contentChange}
                        onKeyDown={keyDown}
                        ></TextArea>
                    </div>
                    <div className="markdown-preview content-preview" dangerouslySetInnerHTML={{__html:contentPreview}}></div>
                </div>
                
            </div>

            <div className="right">
                <div className="cate">
                    <label className="label">分类</label>
                    <Select defaultValue={1}
                    value={type} 
                    style={{width: 180}}
                    onChange={value=>setType(value)}>
                        <Option value={1}>技术文章</Option>
                        <Option value={2}>生活文章</Option>
                    </Select>
                </div>
                <div className="ishome">
                    <label className='label'>显示在首页</label>
                    <Switch checked={ishome===1} onChange={toogleIshome}></Switch>
                </div>

                <div className="btns">
                    <Button type="primary" className="btn1" onClick={releaseArticle}>修改文章内容</Button>
                </div>

                <div className="tags">
                    <TagSelector tagList={tagList}
                    selectedTagList={selectedTagList}
                    selectTag={selectTag}
                    removeTag={removeTag}
                    ></TagSelector>
                </div>
                <div className="introduce-image">
                        <ImageUploader></ImageUploader>
                    </div>
                
            </div>
            
        </div>
        </Spin>
    )
}