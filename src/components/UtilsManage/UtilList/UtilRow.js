import React from 'react'
import {Button} from 'antd'
const UtilRow = ({utilCateId, utilCateName, utilId, utilSite, utilLogo, utilName, clickModifyBtn, clickDeleteBtn}) => {
    return (
        <ul className="util-info-list">
            <li className="util-info-logo"><img src={utilLogo}></img></li>
            <li className="util-info-cate">
                <a href={utilSite} target="_blank">{utilCateId+' '+utilCateName}</a>
            </li>
            <li className="util-info-name">{utilId+' '+utilName}</li>
            <li className="util-info-btn">
                <Button type="primary" onClick={() => clickModifyBtn({utilCateId, utilCateName, utilId, utilSite, utilLogo, utilName})}>修改</Button>
                <Button type="danger" onClick={() => clickDeleteBtn({utilCateId, utilCateName, utilId, utilSite, utilLogo, utilName})}>删除</Button>
            </li>
        </ul>
    )
}

export default UtilRow