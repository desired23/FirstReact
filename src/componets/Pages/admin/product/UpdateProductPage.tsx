import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, Form, Input, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ICategory } from '../../../../interfaces/category';
import axios from 'axios';
import { IProduct } from '../../../../interfaces/product';

interface IProps {
  categories: ICategory[]
  products: IProduct[]
  onUpdate: (product: IProduct) => void
}
const UpdateProduct = (props: IProps) => {
  console.log(props.categories);
  const [urls, setUrls] = useState<string[]>([])
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState<IProduct>()
  useEffect(() => {
    setProduct(props.products.find((product: IProduct) => product._id == String(id)))
  }, [props, id])
  console.log(product);

  useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
    setFields() // gọi hàm setFields để set lại giá trị cho các input

  }, [product])
  const [form] = Form.useForm();
  // khởi tạo một instance của Form và gán vào biến form
  // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

  const setFields = () => {
    form.setFieldsValue({
      _id: product?._id,
      title: product?.title,
      description: product?.description,
      github: product?.github,
      images: product?.images.map((url) => ({
        uid: url, // Sử dụng URL làm uid để đảm bảo mỗi đối tượng có một giá trị duy nhất
        name: url, // Sử dụng URL làm tên hiển thị
        url: url, // Sử dụng URL làm URL hiển thị
      })),
      categoryId: product?.categoryId.map((category: ICategory) => category._id),
    });
  };
  const onFinish = (values: {
    _id: string;
    title: string;
    description: string;
    github: string,
    categoryId: ICategory[]
    images: {
      url: string,
      uid: string,
      name: string
    }[]
  }) => {
    if (urls.length == 0){
      const url = values.images.map(item => item.url)
      urls.push(...url)
    }

    props.onUpdate({
      ...values,
      images: [...urls]
    });

    console.log(values);

    navigate('/admin/products');
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const handleUpload = async (ev: any) => {
    console.log('Upload event:', ev);
    const e = await normFile(ev)
    console.log("e", e);
    const CLOUD_NAME = "dqzopvk2t";
    const PRESET_NAME = "ph26019";
    const urls: string[] = [];
    const FOLDER_NAME = "ecma";
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);

    for (const file of e) {
      if (file.originFileObj) {
        const fileToUpload = file.originFileObj; // Lấy đối tượng tệp từ e.fileList

        formData.append("file", fileToUpload);

        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        urls.push(response.data.secure_url);
      } else urls.push(file?.url)
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
          name="_id"
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
          <Select mode='multiple'>
            {props.categories.map((item, index) => {
              return <Select.Option key={index} value={item._id}>{item.name}</Select.Option>
            })}


          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit"  >
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProduct