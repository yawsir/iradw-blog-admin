import React, {useRef} from 'react'
import {Modal, Input} from 'antd'

const AddUtilModal = ({isShow, confirmLoading, onOk, onCancel, afterClose, title, values={}}) => {

    const nameRef = useRef()
    const siteRef = useRef()
    const logoRef = useRef()

    const ok = () => {
        onOk(
            {
                utilName: nameRef.current.state.value,
                utilSite: siteRef.current.state.value,
                utilLogo: logoRef.current.state.value
            }
        )
    }

    let {utilName, utilLogo, utilSite} = values
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
            <Input size="large" value={utilName} ref={nameRef} addonBefore={"工具标题"}></Input>
            <Input size="large" value={utilSite} ref={siteRef} addonBefore={"网站地址"}></Input>
            <Input size="large" value={utilLogo} ref={logoRef} addonBefore={"logo地址"}></Input>
        </Modal>
    )
}
export default AddUtilModal