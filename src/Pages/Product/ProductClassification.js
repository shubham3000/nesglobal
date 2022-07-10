import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import Signup from '../../Partials/Signup'

export default function ProductClassification() {
    return (
        <>
            <Header showNav={true} isWhite={true} />

            <section style={{ background: "url('../images/product/prouct_classification/home.png')", backgroundSize: "cover", height: "680px" }}>
                <div className="container">
                    <div className="top-section d-flex align-items-center">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="product-topic">
                                    <h4>Product Classifications</h4>
                                </div>
                                <div className="product-heading mt-4">
                                    <h1>Code Up, No secret Code</h1>
                                </div>
                                <div className="product-paragraph mt-4">
                                    <p>These 6-10 digit numbered Harmonized Product Tariff Codes serve two major roles and purposes aside from helping goods clear through customs: They identify products that are being imported or exported through a country's borders. They classify and categorize products in a worldwide system used for customs clearance purposes.</p>
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
            <div className="container mt-15 mb-15">
                <div className="product-item mt-15">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="product-img">
                                <img src='../images/product/prouct_classification/facilitating.png' />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="product-topic1 mb-4">
                                <h4>Why NES</h4>
                            </div>
                            <div className="product-heading1">
                                <h3 style={{color: "#403F3E"}}>Facilitating Trade Compliance</h3>
                            </div>
                            <div className="product-paragraph">
                                <p style={{color: "#737171"}}>Trade Compliance is key to building trust in international trade and also opens doors to benefits of products are classified accurately. Product Classification is a standalone fee based service offered by NES Global to ensure that the customer can sanitize their invoices and declarations and facilitate minimized customs duties and a seamless custom clearance of their shipments. The advisors would also assist in building a compliant harmonized product library for the products which would mitigate future risks and also reduce duty exposures or seek trade benefits impacting to making healthy bottom lines.</p>
                            </div>
                            <div className="learn-more-btn mt-4">
                                <button type='submit'>Connect with our advisor</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-item mt-15">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            {/* <div className="product-topic1 mb-4">
                                <h4>Why NES</h4>
                            </div> */}
                            <div className="product-heading1">
                                <h3 style={{color: "#403F3E"}}>Product Classification</h3>
                            </div>
                            <div className="product-paragraph">
                                <p style={{color: "#737171"}}>Minor physical changes to the product could lead to classifying the product to a harmonized code that could avail lower duty tariffs. This is a clever and 100% compliant practice in trade that the NES advisors can guide the customer to avail significant trade benefits.</p>
                            </div>
                            <div className="learn-more-btn mt-4">
                                <button type='submit'>Connect with our advisor</button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="product-img">
                                <img src='../images/product/prouct_classification/classification.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <Signup/>
    <Footer />
        </>
    )
}
