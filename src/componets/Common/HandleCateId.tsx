import React from 'react'
import { ICategory } from '../../interfaces/category';
interface IPropsHandleCateId {
    categories: ICategory[];
    cates: string[];
  }
const HandleCateId = (props:IPropsHandleCateId) => {
    const cateNames: string[] = [];

    props.cates.forEach((categoryId) => {
      const category = props.categories.find((cate) => cate.id === categoryId);
      if (category) {
        cateNames.push(category.name);
      }})
  return (
<div>
    {cateNames.map((name, index)=>{
        return <a className='btn btn-outline-primary' href="" key={index}>{name} </a>
    })}
</div>
  )
}

export default HandleCateId