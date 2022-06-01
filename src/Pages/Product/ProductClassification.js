import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function ProductClassification() {
    return (
        <>
            <Header showNav={true} isWhite={true} />

            <section style={{ background: "#10243E" }}>
                <div className="container">
                    <div className="top-section d-flex align-items-center mb-5">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="product-topic">
                                    <h4>Product Classifications</h4>
                                </div>
                                <div className="product-heading mt-4">
                                    <h1>A Few Digits Can Make a Big Difference</h1>
                                </div>
                                <div className="product-paragraph mt-4">
                                    <p>The HTS codes in your NES Product Library are used for total transactional consistency. Data is structured to advance trade strategy: With the right eyes on it, your six to ten-digit
                                        codes could reveal six-digit or higher financial opportunities.</p>
                                </div>
                                <div className="product-get-started mt-4">
                                    <button type='submit'>Talk To Us</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-15">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="product-topic1 mb-4">
                                <h4>TARIFF ENGINEERING</h4>
                            </div>
                            <div className="product-heading1">
                                <h3 style={{color: "#403F3E"}}>Minor Product Changes Major Duty Reductions</h3>
                            </div>
                            <div className="product-paragraph">
                                <p style={{color: "#737171"}}>Should that pocket move down, that piece of glass curve? Tariff engineering is the genius practice of modifying products to satisfy import classifications at a lower duty rate. Tweak a little, save a lot.
                                    </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-img">
                                <img src='../images/product/product_classification/' />
                            </div>
                        </div>

                        <div className="mt-15"></div>


                        <div className="col-lg-6">
                            <div className="product-img">
                                <img src='../images/product/product_classification/' />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="product-topic1 mb-4">
                                <h4>BLOG</h4>
                            </div>
                            <div className="product-heading1">
                                <h3 style={{color: "#403F3E"}}>Can You Engineer Lower Duties? Yes, if You Can Find the Customs Codes</h3>
                            </div>
                            <div className="product-paragraph">
                                <p style={{color: "#737171"}}>Rules don’t have to be broken to lower or limit duties. Certain circumstances allow for tariff
                                    engineering, shaping the design of goods for better duty rates.</p>
                            </div>
                            <div className="learn-more-btn mt-4">
                                <button type='submit'>Read More</button>
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
