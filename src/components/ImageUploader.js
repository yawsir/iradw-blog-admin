import React, {useState} from 'react'
import { Upload, Icon, message, Select} from 'antd'
import '../style/component/ImageUploader.scss'
import {api} from '../blog.config'
export default function ImageUploader() {

    const [urlList, setUrlList] = useState([])
    const [folder, setFolder] = useState('Introduce')

    const uploadProps = {
        name: 'file',
        multiple: true,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            //   console.log(info.file, info.fileList);
            //   console.log(info.file.response.location)
              setUrlList([...urlList, info.file.response.location])
            }
            if (status === 'done') {
              message.success(`${info.file.name}上传成功`)
            } else if (status === 'error') {
              message.error(`${info.file.name}上传失败`)
            }
          }
    }


    return (
        <div className="image-uploader">
            <Select value={folder} onChange={(value)=>setFolder(value)}>
                <Select.Option value='Introduce'>简介图片</Select.Option>
                <Select.Option value='Content'>内容图片</Select.Option>
            </Select>

            <Upload.Dragger {...uploadProps} action={`${api}/admin/add${folder}Image`}>
                <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点此或拖拽文件至此上传文件</p>
                <p className="ant-upload-hint">
                支持单个或批量上传。
                </p>
            </Upload.Dragger>
            <div className="url-list">
                {
                    urlList.map((item, index) => <div key={index} className='url'>{'https://'+item}</div>)
                }
            </div>
        </div>
    )
}