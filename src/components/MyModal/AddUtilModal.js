import React, { useState, useEffect} from 'react'
import {Modal, Input} from 'antd'

const AddUtilModal = ({isShow, confirmLoading, onOk, onCancel, afterClose, title, values={}}) => {

    const [utilInfo, setUtilInfo] = useState({})
    useEffect( () => {
        setUtilInfo(values)
    }, [values])

    const changed = (value, key) => {
        setUtilInfo(pre => Object.assign({}, {...pre}, {[key]: value}))
    }

    const ok = () => {
        console.log(utilInfo)
        onOk(utilInfo)
        setUtilInfo({})
    }

    let {utilName, utilLogo, utilSite} = utilInfo
    return (
        <Modal title={title}
            centered={true}
            visible={isShow}
            confirmLoading={confirmLoading}
            onOk={ok}
            onCancel={onCancel}
            afterClose={afterClose}
            destroyOnClose={true}
        >
            <Input size="large" value={utilName} onChange={e => changed(e.target.value, 'utilName')} addonBefore={"工具标题"}></Input>
            <Input size="large" value={utilSite} onChange={e => changed(e.target.value, 'utilSite')} addonBefore={"网站地址"}></Input>
            <Input size="large" value={utilLogo} onChange={e => changed(e.target.value, 'utilLogo')} addonBefore={"logo地址"}></Input>
        </Modal>
    )
}
export default AddUtilModal