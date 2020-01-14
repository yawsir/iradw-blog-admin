import React from 'react'
import {Tag, Divider} from 'antd'
import PropTypes from 'prop-types'
import '../../style/component/tagSelector.scss'
export default function TagSelectorUI({tagList, selectedTagList,selectTag, removeTag}) {

    return (
        <div className='tag-selector'>
            <p>已选</p>
            <div className="tag-list">
                {
                    selectedTagList.map( (item, index) => <Tag key={item.tag_id} color={item.tag_color} className="tag-item" onClose={(e)=>{removeTag(index)}} closable={true} >{item.tag_name}</Tag> )
                }
            </div>
            <Divider />
            <p>所有标签</p>
            <div className="tag-list">
                {
                    tagList.map( item => <Tag key={item.tag_id} color={item.tag_color} className="tag-item" onClick={(e)=>{selectTag(item)}}>{item.tag_name}</Tag>)
                }
            </div>
            <Divider />
        </div>
    )
    
}

TagSelectorUI.propTypes = {
    tagList: PropTypes.arrayOf(PropTypes.shape({
        tag_name: PropTypes.string,
        tag_color: PropTypes.string,
        tag_id: PropTypes.number.isRequired
    })).isRequired,
    selectTag: PropTypes.func,
    removeTag: PropTypes.func
}