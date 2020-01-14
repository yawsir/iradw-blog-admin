import React from 'react'
import WorkBenchUI from './UI/WorkBenchUI'
import {message} from 'antd'
import {api} from '../blog.config'
export default function WorkBench() {

    const uploadProps = {
        name: 'file',
        multiple: true,
        action: `${api}/admin/addContentImage`,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            //   console.log(info.file, info.fileList);
              console.log(info.file.response.location)
            }
            if (status === 'done') {
              message.success(`${info.file.name}上传成功`)
            } else if (status === 'error') {
              message.error(`${info.file.name}上传失败`)
            }
          }
    }
    return (
        <WorkBenchUI uploadProps={uploadProps}></WorkBenchUI>
    )
}