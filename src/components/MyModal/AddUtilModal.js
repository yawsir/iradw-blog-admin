import React, { useState, useEffect} from 'react'
import {Modal, Input} from 'antd'

const UtilModal = ({isShow, onOk, onCancel, values={}}) => {

    const [utilInfo, setUtilInfo] = useState({})
    useEffect( () => {
        setUtilInfo(values)
    }, [values])

    const changed = (value, key) => {
        setUtilInfo(pre => Object.assign({}, {...pre}, {[key]: value}))
    }

    const ok = () => {
        onOk(utilInfo)
        setUtilInfo({})

    }

    let {utilName, utilLogo, utilSite} = utilInfo
    return (
        <Modal title="修改工具属性"
            centered={true}
            visible={isShow}
            onOk={ok}
            onCancel={onCancel}
            destroyOnClose={true}
        >
            <Input size="large" value={utilName} onChange={e => changed(e.target.value, 'utilName')} addonBefore={"工具标题"}></Input>
            <Input size="large" value={utilSite} onChange={e => changed(e.target.value, 'utilSite')} addonBefore={"网站地址"}></Input>
            <Input size="large" value={utilLogo} onChange={e => changed(e.target.value, 'utilLogo')} addonBefore={"logo地址"}></Input>
        </Modal>
    )
}
export default UtilModal