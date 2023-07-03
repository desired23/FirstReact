
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './componets/Pages/client/HomePage'
import ProductPage from './componets/Pages/client/ProductPage'
import ProductDetailPage from './componets/Pages/client/ProductDetailPage'
import DashBoard from './componets/Pages/admin/DashBoard'
import ProductManagementPage from './componets/Pages/admin/product/ProductManagementPage'
import AddProductPage from './componets/Pages/admin/product/AddProductPage'
import UpdateProductPage from './componets/Pages/admin/product/UpdateProductPage'
import { useEffect, useState } from 'react'
import { IProduct } from './interfaces/product';
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './utils/api/product'
import { ICategory } from './interfaces/category'
import { addCategory, delCategory, editCategory, getAllCategory } from './utils/api/category'
import CategoryManagement from './componets/Pages/admin/category/CategoryManagement'


function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(()=>{
    getAllProduct().then(({data})=>setProducts(data))
  }, [])

  useEffect(()=>{
    getAllCategory().then(({data})=>setCategories(data))
  }, [])

  //product function
  const onHandleRemove = (id:string)=> {
    deleteProduct(id).then(()=>setProducts(products.filter((item:IProduct)=>item.id!==id)))
  }
  const onHandleAdd = (product:IProduct)=>{
    addProduct(product).then(()=>getAllProduct().then(({data})=>setProducts(data)))
  }
  const onHandleUpdate = (product:IProduct)=>{
    updateProduct(product).then(()=>getAllProduct().then(({data})=>setProducts(data)))
  }
  //category function
  const onHandleRemoveCategory = (id:string)=> {
    delCategory(id).then(()=>setCategories(categories.filter((item:ICategory)=>item.id!==id)))
  }
  const onHandleAddCategory = (category:ICategory)=>{
    addCategory(category).then(()=>getAllCategory().then(({data})=>setCategories(data)))
  }
  const onHandleUpdateCategory = (category:ICategory)=>{
    editCategory(category).then(()=>getAllCategory().then(({data})=>setCategories(data)))
  }
  return (
    <Routes>
    <Route path='/'>
      <Route index element={<HomePage />} />
      <Route path='products' element={<ProductPage  />} />
      <Route path='products/:id' element={<ProductDetailPage />} />
      <Route path='about' element={<ProductDetailPage  />} />
      <Route path='services' element={<ProductDetailPage  />} />
      <Route path='contact' element={<ProductDetailPage  />} />
      <Route path='blogs' element={<ProductDetailPage  />} />
      <Route path='blogs/:id' element={<ProductDetailPage  />} />



    </Route>
    <Route path='/admin'>
      <Route index element={<DashBoard />} />
      <Route path='products'>
        <Route index element={<ProductManagementPage products={products} onHandleRemove={onHandleRemove}  />} />
        <Route path='add' element={<AddProductPage categories={categories} onAdd={onHandleAdd} />} />
        <Route path=':id/update' element={<UpdateProductPage products={products} categories={categories} onUpdate={onHandleUpdate}/>} />
      </Route>
      <Route path='categories'>
        <Route index element={<CategoryManagement categories={categories} onHandleRemove={onHandleRemoveCategory}  />} />
        <Route path='add' element={<AddProductPage categories={categories} onAdd={onHandleAddCategory} />} />
        <Route path=':id/update' element={<UpdateProductPage categories={categories}  onUpdate={onHandleUpdateCategory}/>} />
      </Route>
    </Route>
  </Routes>
  )
}

export default App
