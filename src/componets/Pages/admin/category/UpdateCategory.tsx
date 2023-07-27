
import  { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    Button,
    Form,

    Input
} from 'antd';
// import { Button, Checkbox, Form, Input, Select } from 'antd';
import { ICategory } from '../../../../interfaces/category';
import { useEffect } from 'react';

interface IProps {
    categories: ICategory[]
    onUpdate: (category: ICategory) => void
}
const UpdateCategory = (props: IProps) => {
    const [category, setCategory] = useState<ICategory>()
    const { id } = useParams()

    console.log(props.categories)
    const navigate = useNavigate()
    useEffect(() => {
        setCategory(props.categories.find((category: ICategory) => category._id == String(id)))
    }
        , [props, id])

    useEffect(() => { // khi biến product thay đổi thì sẽ chạy useEffect này
        setFields() // gọi hàm setFields để set lại giá trị cho các input
    }, [category])
    const [form] = Form.useForm();
    // khởi tạo một instance của Form và gán vào biến form
    // Instance của form là một đối tượng được tạo ra bởi Ant Design để thực hiện các chức năng của form trong React

    const setFields = () => {// hàm này để set lại giá trị cho các input
        form.setFieldsValue({ // gọi hàm setFieldsValue của instance form để set lại giá trị cho các input dựa vào giá trị của biến product
            id: category?._id,
            name: category?.name,
            description: category?.description,
        })
    }
    const onFinish = (values: any) => {



        props.onUpdate({
            ...values,
        });

        console.log(values);

        navigate('/admin/categories');
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    return (
        <div>
            <Form
                form={form}
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
          label="Cate id"
          name="id"
          hidden
          
        ></Form.Item>
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Category name!' }]}
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategory