
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import { ICategory } from '../../../../interfaces/category';
interface DataType {
    key: string | number;
    id: string;
    name: string;
    description: string;

}
interface IProps {
    categories: ICategory[],
    onHandleRemove: (id: string) => void
}
const CategoryManagement = (props:IProps) => {
    const removeCategory = (id:string) => props.onHandleRemove(id)

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
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record.id)}>Remove</Button>
                    <Button type="primary" ><Link to={`/admin/categories/${record.id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories.map((item: ICategory) => {
        return {
            key: item.id,
            ...item
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