
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Checkbox,
    Col,
    Form,
    InputNumber,
    Radio,
    Rate,
    Row,
    Select,
    Slider,
    Space,
    Switch,
    Upload,
    Input
} from 'antd';
// import { Button, Checkbox, Form, Input, Select } from 'antd';
import { ICategory } from '../../../../interfaces/category';
import { IProduct } from '../../../../interfaces/product';
import axios from 'axios';

interface IProps {
    categories: ICategory[]
    onAdd: (product: IProduct) => void
}
const AddProduct = (props: IProps) => {
    const [isUploading, setIsUploading] = useState(false);

    const [urls, setUrls] = useState<string[]>([])
    console.log(props.categories)
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        console.log(values);
        if (isUploading) {
            // Hiển thị thông báo lỗi cho người dùng
            console.log("Please wait for the image upload to complete.");
            return;
        } 

        props.onAdd({
            ...values,
            images: urls
        });

        console.log(values);

        navigate('/admin/products');
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    function normFile(e: any) {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    const handleUpload = async (ev: any) => {
        setIsUploading(true);
        const e = await normFile(ev)
        const CLOUD_NAME = "dqzopvk2t";
        const PRESET_NAME = "ph26019";
        const urls: string[] = [];
        const FOLDER_NAME = "ecma";
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);

        for (const file of e) {
            formData.append("file", file.originFileObj);

            const response = await axios.post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            urls.push(response.data.secure_url);
        }
        setIsUploading(false)
        setUrls(urls)
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your Product Title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="githubLink"
                    name="github"
                    rules={[{ required: true, message: 'Please input your link source!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item

                    name="images"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}

                >
                    <Upload beforeUpload={() => false} name="logo" onChange={handleUpload} listType="picture" multiple >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="CategoryId"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please select your Product Category!' }]}
                >
                    <Select mode='multiple'>
                        {props.categories.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}


                    </Select>
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" disabled={isUploading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProduct