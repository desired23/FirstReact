import React from 'react';
import { IProduct } from '../../../interfaces/product';

interface IProps {
  products: IProduct[],

}
const HomePage = (props:IProps) => {
  return (
    <>
      {/* Start Home Banner Area */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hello</h3>
                  <h1 className="text-uppercase">I am Desired23</h1>
                  <h5 className="text-uppercase">frontend developer</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#"><span>Hire Me</span></a>
                    <a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className="" src="/src/assets/img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home Banner Area */}

      {/* Start About Us Area */}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src="/src/assets/img/about-us.png" alt="" />
              </div>
            </div>

            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>let’s <br />
                  Introduce about <br />
                  myself</h2>
                <p>
                  Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven
                  midst their. Beast creepeth. Fish days.
                </p>
                <p>
                  Is give may shall likeness made yielding spirit a itself together created after sea
                  is in beast beginning signs open god you're gathering whose gathered cattle let.
                  Creature whales fruit unto meat the life beginning all in under give two.
                </p>
                <a className="primary_btn" href="#"><span>Download CV</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Area */}

      {/* Start Brand Area */}
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo4.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo5.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo6.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo7.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo8.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="../src/assets/img/brands/logo9.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span className="lage">10</span>
                  <span className="smll">Years Experience Working</span>
                </div>
                <div className="call-now d-flex">
                  <div>
                    <span className="fa fa-phone" />
                  </div>
                  <div className="ml-15">
                    <p>call us now</p>
                    <h3>(+1)-800-555-6789</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Brand Area */}

      {/* Start Features Area */}
      <section className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>service offers</h2>
                <p>
                  Is give may shall likeness made yielding spirit a itself together created after sea <br />
                  is in beast beginning signs open god you're gathering ithe
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../src/assets/img/services/s1.png" alt="" />
                <h4>Wp developing</h4>
                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../src/assets/img/services/s2.png" alt="" />
                <h4>UI/ux design</h4>
                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../src/assets/img/services/s3.png" alt="" />
                <h4>Web design</h4>
                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="../src/assets/img/services/s4.png" alt="" />
                <h4>seo optimize</h4>
                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Area */}

      {/* Start Portfolio Area */}
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
      {/* End Portfolio Area */}

      {/* Start Testimonial Area */}
      {/* <div className="testimonial_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>client say about me</h2>
                <p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast <br />
                  beginning signs open god you're gathering ithe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="testi_slider owl-carousel">
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="/src/assets/img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div> */}
      {/* End Testimonial Area */}
    </>
  );
};

export default HomePage;