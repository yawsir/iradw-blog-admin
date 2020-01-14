import React from 'react'
import {Tag, Button, Input} from 'antd'
export default function TagInfo({tag_name, tag_color, tag_id, index, modifyTagInfo, changeColor, changeName}) {
    return (
        <ul className="tag-info-list">
            <li className="tag-info-name"><Input type="text" value={tag_name} onChange={(e)=>{changeName(index, e.target.value)}} style={{width: 'auto'}}></Input></li>
            {/* <li className="tag-info-color"><div className="bg-color" style={{backgroundColor: tag_color}}></div></li> */}
            <li className="tag-info-color"><input type="color" value={tag_color} onChange={(e)=>{changeColor(index, e.target.value)}} /></li>
            <li className="tag-info-preview"><Tag color={tag_color}>{tag_name}</Tag></li>
            <li className="tag-info-btn"><Button size="small" type="primary" onClick={()=>{modifyTagInfo(tag_id, tag_name, tag_color)}}>确认修改</Button></li>
        </ul>
    )
}