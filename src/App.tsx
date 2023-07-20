
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
import AddCategory from './componets/Pages/admin/category/AddCategory'
import UpdateCategory from './componets/Pages/admin/category/UpdateCategory'
import Layout from './componets/Pages/client/clienLayout/Layout';
import ServicePage from './componets/Pages/client/ServicePage'
import AboutPage from './componets/Pages/client/AboutPage'
import ContactPage from './componets/Pages/client/ContactPage'
import BlogPage from './componets/Pages/client/BlogPage'
import PostDetailPage from './componets/Pages/client/PostDetailPage'
import ShowInfo from './componets/Pages/admin/info/ShowInfo'
import { IData } from './interfaces/data'
import { getMyData } from './utils/api/data'


function App() {
  const [info, setInfo] = useState<IData>(null!)
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])

  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])

  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data))
  }, [])
  useEffect(() => {
    getMyData().then(({data})=> setInfo(data))
  },[])
  //product function
  const onHandleRemove = (id: string) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  //category function
  const onHandleRemoveCategory = (id: string) => {
    delCategory(id).then(() => setCategories(categories.filter((item: ICategory) => item.id !== id)))
  }
  const onHandleAddCategory = (category: ICategory) => {
    addCategory(category).then(() => getAllCategory().then(({ data }) => setCategories(data)))
  }
  const onHandleUpdateCategory = (category: ICategory) => {
    editCategory(category).then(() => getAllCategory().then(({ data }) => setCategories(data)))
  }
  return (
    <Routes>
      <Route path='/' >
        <Route index element={<Layout children={<HomePage products={products}/>} />} />
        <Route path='products' element={<Layout children={<ProductPage  products={products} />} />} />
        <Route path='products/:id' element={<Layout children={<ProductDetailPage categories={categories} products={products}/>}/>} />
        <Route path='about' element={<Layout children={<AboutPage />}/>} />
        <Route path='services' element={<Layout children={<ServicePage />}/>} />
        <Route path='contact' element={<Layout children={<ContactPage />}/>} />
        <Route path='blogs' element={<Layout children={<BlogPage />}/>} />
        <Route path='blogs/:id' element={<Layout children={<PostDetailPage />}/>} />
      </Route>

      <Route path='/admin'>
        <Route index element={<DashBoard />} />
        <Route path='products'>
          <Route index element={<ProductManagementPage categories={categories} products={products} onHandleRemove={onHandleRemove} />} />
          <Route path='add' element={<AddProductPage categories={categories} onAdd={onHandleAdd} />} />
          <Route path=':id/update' element={<UpdateProductPage products={products} categories={categories} onUpdate={onHandleUpdate} />} />
        </Route>
        <Route path='categories'>
          <Route index element={<CategoryManagement categories={categories} onHandleRemove={onHandleRemoveCategory} />} />
          <Route path='add' element={<AddCategory onAdd={onHandleAddCategory} />} />
          <Route path=':id/update' element={<UpdateCategory categories={categories} onUpdate={onHandleUpdateCategory} />} />
        </Route>
        <Route path='info'>
        <Route index element={<ShowInfo  info={info}/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
