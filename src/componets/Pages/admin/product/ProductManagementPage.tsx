
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import { IProduct } from '../../../../interfaces/product';
import ImageList from '../../../Common/product';
import { ICategory } from '../../../../interfaces/category';
import HandleCateId from '../../../Common/HandleCateId';
interface DataType {
    key: string | number;
    id: string;
    title: string;
    description: string;
    github: string,
    images: string[],
    categoryId: string[]

}
interface IProps {
    categories: ICategory[],
    products: IProduct[],
    onHandleRemove: (id: string) => void
}
const ProductManagementPage = (props: IProps) => {
    const removeProduct = (id: string) => props.onHandleRemove(id)

    const columns: ColumnsType<DataType> = [
        {
            title: 'ProductTitle',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Product github',
            dataIndex: 'github',
            key: 'github',
        },
        {
            title: 'Product Image',
            dataIndex: 'images',
            key: 'image',
            render: (text) => <ImageList images={text || [""]} />
        },
        {
            title: 'Product Category',
            dataIndex: 'categoryId',
            key: 'categoryId',
            render: (text) => <HandleCateId categories={props.categories} cates={text }/>


        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/products/${record.id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ProductManagementPage