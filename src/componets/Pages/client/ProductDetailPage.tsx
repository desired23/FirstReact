import React from 'react'
import { ICategory } from '../../../interfaces/category'
import { IProduct } from '../../../interfaces/product'
import { useEffect } from 'react';
import {useState} from 'react';
import { useParams } from 'react-router';
interface IProps {
    categories: ICategory[],
    products: IProduct[]

  }
const ProductDetailPage = (props:IProps) => {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct>()
  useEffect(() => {  
    setProduct(props.products.find((product: IProduct) => product.id == String(id)))
  }, [props, id])
  const categories = props.categories.filter(category => product?.categoryId.includes(category.id));
  return (
    <div>
      {/* Start Banner Area */}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content text-center">
              <h2>Portfolio Details</h2>
              <div className="page_link">
                <a href="/">Home</a>
                <a href="/products">Portfolio</a>
                <a href="#">Portfolio Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}

      {/* Start Portfolio Details Area */}
      <section className="portfolio_details_area section_gap">
        <div className="container">
        <div className="portfolio_details_inner">
  <div className="row">
    <div className="col-lg-6">
      <div className="left_img">
        {product?.images.map((image, index) => (
          <img key={index} className="img-fluid" src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
    <div className="offset-lg-1 col-lg-5">
      <div className="portfolio_right_text mt-30">
        <h4 className="text-uppercase">{product?.title}</h4>
        <p>{product?.description}</p>
        <ul className="list">
          <li><span>Github Link</span>: {product?.github}</li>
          <li>
  <span>Categories</span>: 
  {categories.map(category => (
    <a className='btn btn-outline-primary' key={category.id}>  {category.name}</a>
  ))}
</li>
        </ul>
      </div>
    </div>
  </div>

</div>
        </div>
      </section>
      {/* End Portfolio Details Area */}

      {/* Start Newsletter Area */}
      {/* <section className="newsletter_area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="subscription_box text-center">
                <h2 className="text-uppercase text-white">get update from anywhere</h2>
                <p className="text-white">
                  Bearing Void gathering light light his eavening unto dont afraid.
                </p>
                <div className="subcribe-form" id="mc_embed_signup">
                  <form target="_blank" noValidate={true} action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscription relative">
                    <input name="EMAIL" placeholder="Email address" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required type="email" />
                    <div style={{ position: 'absolute', left: '-5000px' }}>
                      <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} value="" type="text" />
                    </div>
                    <button className="primary-btn hover d-inline">Get Started</button>
                    <div className="info"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Newsletter Area */}
    </div>
  )
}

export default ProductDetailPage