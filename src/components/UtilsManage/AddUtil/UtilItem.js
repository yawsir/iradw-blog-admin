import React from 'react'

const UtilItem = ({utilLogo, utilName, utilSite}) => {
    return (
        <div className="util-item">
            <a className="util-item-wrap" href="" target="_blank">
                <div className="img-wrap">
                    <img src="https://blog-1259762155.cos.ap-beijing.myqcloud.com/introduce/1588299193983-codepen.jpg" alt=""/>
                </div>
                <p className="util-item-name">31231231</p>
            </a> 
        </div>
    )
}

export default UtilItem