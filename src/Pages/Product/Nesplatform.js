import React from 'react'
import Header from '../../Partials/Header'

export default function Nesplatform() {
  return (
    <>
    <Header showNav={true} isWhite={true} />

    <section style={{background: "#10243E"}}>
        <div className="container">
            <div className="top-section d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="product-topic">
                            <h4>NESSIE</h4>
                        </div>
                        <div className="product-heading mt-4">
                            <h1>Unleashing Capabilities and Delivering Experience</h1>
                        </div>
                        <div className="product-paragraph mt-4">
                            <p>Imagine a picture with trade without challenges…that’s what the NES platform is about. We aim to deliver the highest customer experience to our customers by delivering a seamless end to end supply chain.</p>
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
