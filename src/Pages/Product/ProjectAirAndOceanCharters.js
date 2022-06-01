import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function ProjectAirAndOceanCharters() {
  return (
    <>
    <Header showNav={true} isWhite={true} />

<section style={{ background: "#10243E" }}>
    <div className="container">
        <div className="top-section d-flex align-items-center mb-5">
            <div className="row">
                <div className="col-lg-7">
                    <div className="product-topic">
                        <h4>Project Air And Ocean Charters</h4>
                    </div>
                    <div className="product-heading mt-4">
                        <h1>You Fill the Container. We Fill In the Rest.</h1>
                    </div>
                    <div className="product-paragraph mt-4">
                        <p>With Flexport, all the ocean freight boxes are checked. Container location and contents, milestones and exceptions. It's all in the Flexport Platform for higher levels of reliability and available ocean space.
                            </p>
                    </div>
                    <div className="product-get-started mt-4">
                        <button type='submit'>Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
    </>
  )
}
