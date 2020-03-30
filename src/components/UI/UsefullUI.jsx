import React from 'react'
import {Row, Col, Icon} from 'antd'
import AddCateModal from '../MyModal/AddCateModal'
import AddUtilModal from '../MyModal/AddUtilModal'
import '../../style/component/Usefull.scss'

const AddUtilItemButton = ({onAddItem, utilCateId, utilCateName}) => {
    

    return (
        <Col className="add-util-item-button " xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className="add-util-item-wrap" onClick={() => {onAddItem(utilCateId, utilCateName)}}>
                    <Icon type="plus"></Icon>
            </div> 
        </Col>
    )
}

const UtilItem = ({utilId, utilLogo, utilName, utilSite, onClickItem}) => {
    return (
        <Col className="util-item" xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className="util-item-wrap" onClick={() => {onClickItem({utilId, utilLogo, utilName, utilSite})}}>
                <div className="img-wrap">
                    <img src={utilLogo} alt={utilName}/>
                </div>
                <p className="util-item-name">{utilName}</p>
            </div> 
            
        </Col>
    )
}

const UtilList = ({utilCateId, utilCateName, list, onAddItem, onClickItem}) => {

    return (
        <div className="util-list">
            <h4 className="util-cate">{utilCateName}</h4>
            <Row className="util-item-list">
                {
                    !!list && list.map( item => <UtilItem key={item.utilId} {...item} onClickItem={onClickItem}></UtilItem>)
                }
                <AddUtilItemButton utilCateId={utilCateId} utilCateName={utilCateName} onAddItem={onAddItem}></AddUtilItemButton>
            </Row>
            
        </div>
    )
}

const UsefullUI = ({usefullUtilsList, onAddCate, onAddItem, onClickItem, selectedItem,
    onAddCateModalOk, onAddCateModalCancel, afterAddCateModalClose, addCateModalShow, addCateModalCfmLoading,
    onAddUtilModalOk, onAddUtilModalCancel, afterAddUtilModalClose, addUtilModalShow, addUtilModalCfmLoading,
    addUtilModalTitle, 
    }) => {

    return (
        <div className="usefull">
            <Row className="usefull-wrap" type="flex" justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="usefull-content">
                    {
                        !!usefullUtilsList && usefullUtilsList.map( item => <UtilList key={item.utilCateId} onAddItem={onAddItem} {...item} onClickItem={onClickItem}></UtilList> )
                    }
                    <h4 className="add-util-cate" onClick={onAddCate}><Icon type="plus-circle"/></h4>
                </Col>
            </Row>
            <AddCateModal 
                isShow={addCateModalShow} 
                confirmLoading={addCateModalCfmLoading} 
                onOk={onAddCateModalOk} 
                onCancel={onAddCateModalCancel} 
                afterClose={afterAddCateModalClose} />
            <AddUtilModal
                isShow={addUtilModalShow} 
                confirmLoading={addUtilModalCfmLoading} 
                onOk={onAddUtilModalOk} 
                onCancel={onAddUtilModalCancel} 
                afterClose={afterAddUtilModalClose} 
                title={addUtilModalTitle}
                values={selectedItem}/>
                
        </div>
    )
}

export default UsefullUI