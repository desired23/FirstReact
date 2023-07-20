
const AboutPage = () => {
  const templateHTML = `    <!--================ Start Banner Area =================-->
  <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
          <div class="container">
              <div class="banner_content text-center">
                  <h2>About Us</h2>
                  <div class="page_link">
                      <a href="index.html">Home</a>
                      <a href="about.html">About</a>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End Banner Area =================-->
  
 <!--================ Start About Us Area =================-->
<section class="about_area section_gap">
      <div class="container">
          <div class="row justify-content-start align-items-center">
              <div class="col-lg-5">
                  <div class="about_img">
                      <img class="" src="img/about-us.png" alt="">
                  </div>
              </div>

              <div class="offset-lg-1 col-lg-5">
                  <div class="main_title text-left">
                      <h2>let’s <br>
                          Introduce about <br>
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
                      <a class="primary_btn" href="#"><span>Download CV</span></a>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End About Us Area =================-->

<!--================ Srart Brand Area =================-->
<section class="brand_area section_gap_bottom">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-6">
                  <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo1.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo2.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo3.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo4.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo5.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo6.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo7.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo8.png" alt="">
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-6">
                          <div class="single-brand-item d-table">
                              <div class="d-table-cell text-center">
                                  <img src="img/brands/logo9.png" alt="">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="offset-lg-2 col-lg-4 col-md-6">
                  <div class="client-info">
                      <div class="d-flex mb-50">
                          <span class="lage">10</span>
                          <span class="smll">Years Experience Working</span>
                      </div>
                      <div class="call-now d-flex">
                          <div>
                              <span class="fa fa-phone"></span>
                          </div>
                          <div class="ml-15">
                              <p>call us now</p>
                              <h3>(+1)-800-555-6789</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--================ End Brand Area =================-->`
  return (<div dangerouslySetInnerHTML={{ __html: templateHTML }} />)

}

export default AboutPage