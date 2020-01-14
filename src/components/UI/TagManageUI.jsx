import React from 'react'
import '../../style/component/TagManage.scss'
import TagInfo from './TagInfo'
import { Modal, Input, Button, Spin} from 'antd'
export default function TagManageUI({tagList, modifyTagInfo, 
    changeColor, changeName, showModal, setShowModal, addTag, 
    newTagName, newTagColor, setNewTagName, setNewTagColor, loading}) {

    return (
        <Spin spinning={loading}>
        <div className="tag-manage">
            <div className="tag-table">
                <ul className="label-list">
                    <li className="label-item">标签名</li>
                    <li className="label-item">颜色</li>
                    <li className="label-item">预览</li>
                    <li className="label-item">操作</li>
                </ul>
                <ul className="tag-list">
                    <li className="tag-item">
                        {
                            tagList.map( (item, index) => (
                                <TagInfo
                                key={item.tag_id}
                                tag_name={item.tag_name}
                                tag_color={item.tag_color}
                                tag_id={item.tag_id}
                                modifyTagInfo={modifyTagInfo}
                                changeColor={changeColor}
                                changeName={changeName}
                                index={index}></TagInfo>
                            ))
                        }
                        
                    </li>
                </ul>
                <Button onClick={() => setShowModal(true)} type="primary" style={{margin: '10px auto'}}>添加标签</Button>
            </div>

            <Modal
            title="添加标签"
            visible={showModal}
            onOk={addTag}
            onCancel={()=>setShowModal(false)}
            >
                <Input type="text" 
                value={newTagName} 
                prefix="标签名称"
                style={{paddingLeft: '70px', width: '300px', margin: '10px 0'}}                
                onChange={(e)=>setNewTagName(e.target.value)}>
                </Input>
                <Input type="color" 
                value={newTagColor} 
                prefix="标签颜色"
                style={{paddingLeft: '70px', width: '300px', margin: '10px 0'}}
                onChange={(e)=>setNewTagColor(e.target.value)}>
                </Input>
            </Modal>
        </div>
        </Spin>
    )
}