import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function Engineering() {
  return (
    <>
    <Header/>

    <section style={{ backgroundImage: "url(../images/Company/engineering/engineeringhome.png)", backgroundSize: "cover"}}>
        <div className="container">
            <div className="top-section d-flex align-items-center mb-5">
                <div className="row">
                    <div className="col-lg-7">
                         <div className="product-topic">
                            <h4>ENGINEERING</h4>
                        </div>
                        <div className="product-heading mt-4">
                            <h1>Building the Technology That's Simplifying Global Trade</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
