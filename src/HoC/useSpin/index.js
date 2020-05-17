import React from 'react';
import {Spin} from 'antd'

const useSpin = () => {

    return (props) => {
        return (
            <div style={{position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}>
                <Spin {...props}></Spin>
            </div>
        )
    }
}
export default useSpin