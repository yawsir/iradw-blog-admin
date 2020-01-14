import React from 'react'
import {Input, Button, Select, Spin} from 'antd'
import '../../style/component/AddArticle.scss'
import TagSelector from './TagSelectorUI'
import ImageUploader from '../ImageUploader'

const {TextArea} = Input
const {Option} = Select
export default function AddArticleUI({title, introduce, content, introducePreview, contentPreview,
    tagList, selectedTagList, type, selectTag, removeTag, titleChange, introduceChange, 
    contentChange, setType, saveArticle, releaseArticle, keyDown, loading}) {

    return (
        <Spin spinning={loading} >
            <div className="add-article">
                
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
                        <Select defaultValue={type} 
                        style={{width: 180}}
                        onChange={value=>setType(value)}>
                            <Option value={1}>技术文章</Option>
                            <Option value={2}>生活文章</Option>
                        </Select>
                    </div>

                    <div className="btns">
                        <Button onClick={saveArticle}>暂存文章</Button>
                        <Button type="primary" onClick={releaseArticle}>发布文章</Button>
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