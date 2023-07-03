import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Checkbox, Form, Input, Select, Upload, UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IProduct } from '../../../../interfaces/product';
import { ICategory } from '../../../../interfaces/category';
import axios from 'axios';

interface IProps {
  categories: ICategory[]
  products: IProduct[]
  onUpdate: (product: IProduct) => void
}
const UpdateProduct = (props: IProps) => {

  const [urls, setUrls] = useState<string[]>([])

  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<IProduct>()
  const [existingImages, setExistingImages] = useState<string[]>([]);
  useEffect(() => {
    setProduct(props.products.find((product: IProduct) => product.id == String(id)))
  }, [props])
  useEffect(() => {
    if (product != undefined) setExistingImages(product?.images)
  }, [product])
  useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
    setFields() // gọi hàm setFields để set lại giá trị cho các input
  }, [product])
  const [form] = Form.useForm();
  // khởi tạo một instance của Form và gán vào biến form
  // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

  const setFields = () => {// hàm này để set lại giá trị cho các input
    form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
      id: product?.id,
      title: product?.title,
      description: product?.description,
      github: product?.github,
      images: [],
      categoryId: product?.categoryId
    })
  }
  const onFinish = (values: any) => {
    props.onUpdate({
      ...values,
      images: urls
    });
    navigate('/admin/products')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleUpload = async (ev: any) => {
    const e = await normFile(ev)
    console.log(e);
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
    setUrls(urls)
  };
  return (
    <div>
      <Form
        form={form}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Product id"
          name="id"
          hidden
          
        >
          <Input />
        </Form.Item>
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
          initialValue={form.getFieldValue('images')}

        >
          <Upload beforeUpload={() => false}
            name="logo" listType="picture" onChange={handleUpload} multiple>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>

        </Form.Item>

        <Form.Item
          label="CategoryId"
          name="categoryId"
          rules={[{ required: true, message: 'Please select your Product Category!' }]}
        >
          <Select>
            {props.categories.map(item => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)}


          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProduct