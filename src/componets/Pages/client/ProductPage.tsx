import React from 'react'
import { IProduct } from '../../../interfaces/product'

interface IProps {
  products: IProduct[],

}
const ProductPage = (props: IProps) => {
  return (
    <div>
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content text-center">
              <h2>Portfolio</h2>
              <div className="page_link">
                <a href="index.html">Home</a>
                <a href="portfolio.html">Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio_area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>Các dự án <br />
                  của tôi</h2>
              </div>
            </div>
          </div>
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">all</li>
              {/* <li data-filter=".popular">popular</li>
              <li data-filter=".latest"> latest</li>
              <li data-filter=".following">following</li>
              <li data-filter=".upcoming">upcoming</li> */}
            </ul>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              {props.products.map((product, index) => (
                <div key={index} className="col-lg-4 col-md-6 all upcoming">
                  <div className="portfolio_box">
                    <div className="single_portfolio">
                      <img
                        className="img-fluid w-100"
                        src={product.images[0]}
                        alt={product.title}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      <div className="overlay"></div>
                      <a href={`/products/${product.id}`}  className="img-gal">
                        <div className="icon">
                          <span className="lnr lnr-cross"></span>
                        </div>
                      </a>
                    </div>
                    <div className="short_info">
                      <h4>
                        <a href={`/products/${product.id}`} className="product-title">
                          {product.title}
                        </a>
                      </h4>
                      <p className="product-description">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage