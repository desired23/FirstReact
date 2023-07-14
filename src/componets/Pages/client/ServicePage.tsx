import React from 'react'

const ServicePage = () => {
  const templateHTML = `
  
  <!--================ Start Banner Area =================-->
  <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
          <div class="container">
              <div class="banner_content text-center">
                  <h2>Services</h2>
                  <div class="page_link">
                      <a href="index.html">Home</a>
                      <a href="services.html">Services</a>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End Banner Area =================--> <!--================ Start Features Area =================-->
  <section class="features_area">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-8 text-center">
                  <div class="main_title">
                      <h2>service offers </h2>
                      <p>
                          Is give may shall likeness made yielding spirit a itself togeth created 
                          after sea <br> is in beast beginning signs open god you're gathering ithe
                      </p>
                  </div>
              </div>
          </div>
          <div class="row feature_inner">
              <div class="col-lg-3 col-md-6">
                  <div class="feature_item">
                      <img src="../src/assets/img/services/s1.png" alt="">
                      <h4>Wp developing</h4>
                      <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="feature_item">
                      <img src="../src/assets/img/services/s2.png" alt="">
                      <h4>UI/ux design</h4>
                      <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="feature_item">
                      <img src="../src/assets/img/services/s3.png" alt="">
                      <h4>Web design</h4>
                      <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6">
                  <div class="feature_item">
                      <img src="../src/assets/img/services/s4.png" alt="">
                      <h4>seo optimize</h4>
                      <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End Features Area =================-->`
  return (<div dangerouslySetInnerHTML={{ __html: templateHTML }} />)

}

export default ServicePage