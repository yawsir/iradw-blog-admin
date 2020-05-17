import React, {useState, useEffect} from 'react'
import './UtilList.scss'
import UtilRow from './UtilRow'
import {getFetch} from '../../../utils/utils'
import {api} from '../../../blog.config'
import UtilModal from '../../MyModal/AddUtilModal'


const UtilList = () => {

    const [utilsList, setUtilsList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedInfo, setSelectedInfo] = useState({})
    const getUtilList = () => {
        getFetch(`${api}/blog/getUtilsList`)
        .then( res => {
            setUtilsList(res.utils)
        })
    }

    useEffect( () => {
        getUtilList()
    }, [])

    //点击修改按钮
    const clickModifyBtn = (utilInfo) => {
        setSelectedInfo(utilInfo)
        setShowModal(true)
    }

    //点击删除按钮
    const clickDeleteBtn = (utilInfo) => {
        console.log('删除')
        console.log(utilInfo)
    }

    //点击弹窗的确认
    const onOk = (newUtilInfo) => {
        console.log(newUtilInfo)
        setTimeout(() => {
            setShowModal(false)
        }, 1000)
    }

    //点击取消
    const onCancel = () => {
        setShowModal(false)
    }


    return (
        <div className="utils-manage">
            <div className="util-table">
                <ul className="label-list">
                    <li className="label-item">工具图标</li>
                    <li className="label-item">工具分类</li>
                    <li className="label-item">工具名称</li>
                    <li className="label-item">操作</li>
                </ul>
                <ul className="util-list">
                    <li className="util-item">
                        {
                            utilsList.map( cate => {
                                return cate.list.map(item => 
                                <UtilRow key={item.utilId} utilCateId={cate.utilCateId} 
                                    utilCateName={cate.utilCateName} {...item}
                                    clickDeleteBtn={clickDeleteBtn}    
                                    clickModifyBtn={clickModifyBtn}
                                >
                                </UtilRow>)
                            })
                        }
                    </li>
                </ul>
            </div>

            <UtilModal isShow={showModal} onOk={onOk} 
                onCancel={onCancel}
                values={selectedInfo}>
                
            </UtilModal>
        </div>
    )
}

export default UtilList