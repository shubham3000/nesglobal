import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function CargoInsurance() {
  return (
    <>
    <Header showNav={true} isWhite={true} />

<section style={{ background: "#10243E" }}>
    <div className="container">
        <div className="top-section d-flex align-items-center mb-5">
            <div className="row">
                <div className="col-lg-7">
                    <div className="product-topic">
                        <h4>Cargo Insurance</h4>
                    </div>
                    <div className="product-heading mt-4">
                        <h1>Tailor make your policy as per your convenience</h1>
                    </div>
                    <div className="product-get-started mt-4">
                        <button type='submit'>Connect with our advisor</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<section>
        <div className="container mt-15">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='../images/product/cargo_insurance/cover.png' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Customized Policies for Every Size Company</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>Scale your insurance to your supply chain. Cover all your cargo end-to-end under one policy or single out shipments that need it most. Mix in extra coverages for a policy that fits  the bill and the bill of lading.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='../images/product/cargo_insurance/cover.png' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Coverage No Matter Who Ships Your Cargo</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>There’s no competition: NES can insure your goods with the same scalable coverages and digital conveniences—even if you ship with another logistics provider.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='../images/product/cargo_insurance/cover.png' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Faster, Easier Automated Claims</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>Easy quotes? Check. Automated claims? That’s also a check—or a wire, usually within 30 days, when under $10,000. Digital workflows make cargo insurance as painless as possible </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
                <div className="container mt-15">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-img">
                                <img src='../images/product/product_classification/' />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="product-topic1 mb-4">
                                <h4>PER SHIPMENT</h4>
                            </div>
                            <div className="product-heading1">
                                <h3 style={{color: "#403F3E"}}>Only Pay for What You Need</h3>
                            </div>
                            <div className="product-paragraph">
                                <p style={{color: "#737171"}}>Choose which shipments to protect—and how with options like retail value coverage. Pay per use to
                                    precisely match coverage with your changing needs.</p>
                            </div>
                            <div className="product-get-started mt-4">
                                <button type='submit'>Get A Quote Now</button>
                            </div>
                        </div>


                        <div className="mt-15"></div>


                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="product-topic1 mb-4">
                                <h4>CLAIMS PROCESS</h4>
                            </div>
                            <div className="product-heading1">
                                <h3 style={{color: "#403F3E"}}>Automated Claims via Your Shipment Data</h3>
                            </div>
                            <div className="product-paragraph">
                                <p style={{color: "#737171"}}>Submit your claim in minutes. The NES Platform uses your shipping data to automate and
                                    validate. Message threads and updates attach to claims and shipments for real time tracking. If you need a human along the way, just ask.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-img">
                                <img src='../images/product/product_classification/' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQS */}

<section class="product-faq mt-15 mb-15">
        <div class="container">
          <div className="product-topic1 mb-5 text-center">
                <h4>NEED ANY HELP?</h4>
          </div>
          <div className="product-faq-heading">
           <h3 class="text-center" style={{color: "#403F3E"}}>Frequently Asked Questions</h3>
          </div>
        
          <div class="accordion accordion-flush product-faq__accordian" id="product-faq__accordian">

            <div class="accordion accordion-flush product-faq__accordian" id="product-faq__accordian">
              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                   What if I already have a cargo insurance policy?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingFiveOne">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFiveOne"
                    aria-expanded="false" aria-controls="flush-collapseFiveOne">
                   Do I really need insurance? I don’t want to pay for it.
                  </button>
                </h2>
                <div id="flush-collapseFiveOne" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFiveOne" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">
                  Consider what you have invested in a single shipment and where you would be with a total loss. NES competitive pricing is a small fraction of your shipment value, but provides total peace of mind. Contact us today to learn more about our low rates.
                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingTen">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                    aria-expanded="false" aria-controls="flush-collapseTen">
                   We use a different freight forwarder. Can I still insure my shipments with NES?
                  </button>
                </h2>
                <div id="flush-collapseTen" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>

              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingTen">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                    aria-expanded="false" aria-controls="flush-collapseTen">
                  Can we partner with NES to distribute cargo insurance products?
                  </button>
                </h2>
                <div id="flush-collapseTen" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingFiveOne">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFiveOne"
                    aria-expanded="false" aria-controls="flush-collapseFiveOne">
                   Do you do all your underwriting in-house
                  </button>
                </h2>
                <div id="flush-collapseFiveOne" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFiveOne" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">
                 
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* signup */}
    <section style={{background: "#E6EFF9"}}>
        <div className="container mt-15 py-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="signup-heading">
                        <h3>Sign-Up for Our Intelligent Commerce Newsletter</h3>
                    </div>
                    <div className="signup-paragraph">
                        <p style={{color: "#595858"}}>Insider perspectives, news, updates and expert advice for retail and  e-commerce brands</p>
                    </div>
                    <div className="signup-img mt-5">
                        <img src='../images/product/nesplatform/signup.png' height={187} width={410} />
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="signup-box">
                        <h4>Work Email ID:</h4>
                        <input type={'email'} className="email" placeholder="Enter Email Address"/>
                        
                        <input type={"checkbox"} className="mt-3"></input>
                        <label className='signup-agree' style={{marginLeft: "1rem"}}>I agree to the <a href='#'><span style={{color: "#0060BE"}}>Terms</span></a> of Service and <a href='#'><span style={{color: "#0060BE"}}>Privacy Policy</span></a></label>
                        
                        <button type='submit' className='signup-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
  )
}
