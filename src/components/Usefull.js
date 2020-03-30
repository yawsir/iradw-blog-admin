import React, {useState} from 'react'
import UsefullUI from './UI/UsefullUI'

const data = [
    {
        utilCateId: '1',
        utilCateName: 'javeScript框架',
        list: [
            {
                utilId: '11',
                utilLogo: 'https://cn.vuejs.org/images/logo.png', 
                utilName: 'vue', 
                utilSite: 'https://cn.vuejs.org/'
            },
            {
                utilId: '12',
                utilLogo: 'https://cn.vuejs.org/images/logo.png', 
                utilName: 'vue', 
                utilSite: 'https://cn.vuejs.org/'
            },
        ]
    },
    {
        utilCateId: '2',
        utilCateName: '交流社区',
        list: [
            {
                utilId: '21',
                utilLogo: 'https://cn.vuejs.org/images/logo.png', 
                utilName: '掘金', 
                utilSite: 'https://cn.vuejs.org/'
            },
            {
                utilId: '22',
                utilLogo: 'https://cn.vuejs.org/images/logo.png', 
                utilName: 'github', 
                utilSite: 'https://cn.vuejs.org/'
            },
        ]
    },
]





const Usefull = () => {
    const [usefullUtilsList] = useState(data)
    const [addCateModalShow, setAddCateModalShow] = useState(false)
    const [addCateModalCfmLoading, setAddCateModalCfmLoading] = useState(false)
    const [addUtilModalShow, setAddUtilModalShow] = useState(false)
    const [addUtilModalCfmLoading, setAddUtilModalCfmLoading] = useState(false)
    const [selectedCateId, setSelectedCateId] = useState(0)
    const [selectedCateName, setSelectedCateName] = useState('')
    const [selectedItem, setSelectedItem] = useState({})

    //点击添加分类按钮
    const onAddCate = () => {
        setAddCateModalShow(true)
    }

    //添加分类弹窗上点击确认
    const onAddCateModalOk = (value) => {
        setAddCateModalCfmLoading(true)
        setTimeout(() => {
            setAddCateModalShow(false)
            setAddCateModalCfmLoading(false)
        }, 2000)
        
    }

    //添加分类弹窗上点击取消
    const onAddCateModalCancel = () => {
        setAddCateModalShow(false)
    }

    //添加分类弹窗关闭后
    const afterAddCateModalClose = () => {
        
    }


    //点击添加工具按钮
    const onAddItem = (utilCateId, utilCateName) => {
        setSelectedCateId(() => utilCateId)
        setSelectedCateName(() => utilCateName)
        setSelectedItem(() => {})
        setAddUtilModalShow(true)
    }
    
    //添加工具弹窗上点击确认
    const onAddUtilModalOk = (values) => {
        setAddUtilModalCfmLoading(true)
        console.log('selectedCateId: '+selectedCateId)
        console.log(selectedItem)
        console.log(values)
        setTimeout(() => {
            setAddUtilModalShow(false)
            setAddUtilModalCfmLoading(false)
        }, 2000)
        
    }

    //添加分类弹窗上点击取消
    const onAddUtilModalCancel = () => {
        setAddUtilModalShow(false)
    }

    //添加分类弹窗关闭后
    const afterAddUtilModalClose = () => {

    }

    const onClickItem = (values) => {
        setSelectedItem(() => values)
        setAddUtilModalShow(true)
    }

    return (
        <UsefullUI 
        usefullUtilsList={usefullUtilsList} 
        onAddCate={onAddCate} 
        addCateModalShow={addCateModalShow}
        addCateModalCfmLoading={addCateModalCfmLoading}
        onAddCateModalOk={onAddCateModalOk}
        onAddCateModalCancel={onAddCateModalCancel}
        afterAddCateModalClose={afterAddCateModalClose}
        onAddItem={onAddItem}
        onClickItem={onClickItem}
        addUtilModalShow={addUtilModalShow}
        addUtilModalCfmLoading={addUtilModalCfmLoading}
        onAddUtilModalOk={onAddUtilModalOk}
        onAddUtilModalCancel={onAddUtilModalCancel}
        afterAddUtilModalClose={afterAddUtilModalClose}
        addUtilModalTitle={selectedCateName}
        selectedItem={selectedItem}
        ></UsefullUI>
    )
}

export default Usefull