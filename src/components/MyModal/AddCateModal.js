import React, {useRef} from 'react'
import {Modal, Input,} from 'antd'

const AddCateModal = ({isShow, confirmLoading, onOk, onCancel, afterClose}) => {

    const inputRef = useRef()
    return (
        <Modal 
            title="添加分类"
            centered={true}
            visible={isShow}
            confirmLoading={confirmLoading}
            onOk={()=>{onOk(inputRef.current.state.value)}}
            onCancel={onCancel}
            afterClose={afterClose}
            destroyOnClose={true}
        >
            <Input size="large" ref={inputRef} addonBefore={"分类名"}></Input>
        </Modal>
    )
}

export default AddCateModal