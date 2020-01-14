import React from 'react'
import {Form, Upload, Icon} from 'antd'
export default function WorkBenckUI({uploadProps}) {
    return (
        <div className="workbench">

            <Form.Item label="添加图片">
                <Upload.Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Upload.Dragger>
            </Form.Item>
        </div>
    )
}