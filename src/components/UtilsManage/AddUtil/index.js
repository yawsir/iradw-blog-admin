import React, {useRef} from 'react'
import { Input, Button } from 'antd'
import UtilItem from './UtilItem'
import './AddUtil.scss'

const AddUtil = () => {
    const siteRef = useRef()
    const logoRef = useRef()
    const cateRef = useRef()
    const nameRef = useRef()

    return (
        <div className="utils-manage">
            <div className="add-util">
                <h4 className="util-manage-title">添加工具</h4>
                <div className="add-util-inner">
                    <div className="add-util-writing">
                        <div className="add-util-row">
                            <label htmlFor="utilSite">工具地址</label>
                            <Input id="utilSite" ref={siteRef}></Input>    
                        </div>    
                        <div className="add-util-row">
                            <label htmlFor="utilLogo">工具图标</label>
                            <Input id="utilLogo"  ref={logoRef}></Input>    
                        </div>    
                        <div className="add-util-row">
                            <label htmlFor="utilCate">工具分类</label>
                            <Input id="utilCate" ref={cateRef}></Input>    
                        </div>    
                        <div className="add-util-row">
                            <label htmlFor="utilName">工具名称</label>
                            <Input id="utilName" ref={nameRef}></Input>    
                        </div>    
                    </div>
                    <div className="add-util-preview">
                        <UtilItem />
                    </div>
                </div>
                <div className="btn-group">
                    <Button type="primary">预览</Button>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <Button type="primary">添加</Button>
                </div>
            </div>

            
            <div className="add-cate">
                <h4 className="util-manage-title">添加分类</h4>
                <div className="add-util-row">
                    <label htmlFor="cateName">分类名称</label>
                    <Input id="cateName"></Input>    
                </div>   
            </div>
            <div className="btn-group">
                    <Button type="primary">添加</Button>
                </div>
        </div>
    )
}

export default AddUtil