
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import { ICategory } from '../../../../interfaces/category';
interface DataType {
    key: string | number;
    _id: string
    name: string;
    description: string;
    products:string[]

}
interface IProps {
    categories: ICategory[],
    onHandleRemove: (_id: string) => void
}
const CategoryManagement = (props:IProps) => {
    console.log(props.categories);
    
    const removeCategory = (_id:string) => props.onHandleRemove(_id)

    const columns: ColumnsType<DataType> = [
        {
            title: 'CategoryName',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Category description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Products',
            dataIndex: 'products',
            key: 'products',
            render: (text) => <a>{text} </a>,

        },
       
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => {
                        console.log(record);
                        removeCategory(record?._id)}}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/categories/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories?.map((item: ICategory,index:number) => {
        console.log(item._id);
        return {
            key: index,
            _id: item._id,
            name: item.name, 
            description: item.description, 
            products: item.products
        }
    })

    return (
        <div>
            <Button type='primary'><Link to={'/admin/categories/add'}>Add New Category</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default CategoryManagement