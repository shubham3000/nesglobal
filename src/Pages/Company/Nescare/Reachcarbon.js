import React from 'react'

import Copyright from '../../../Partials/Copyright'

import Header from '../../../Partials/Header'

export default function reachcarbon() {
  return (
    <>
    <Header showNav={false} ContactNav={true} />

<section  style={{background: "#10243E"}}>
    <div className="container" style={{paddingTop: "7rem"}}>
        <div className="nescare-top pt-5">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center" style={{paddingRight: "125px"}}>
                    <div className="nescare-heading">
                        <h1>To Reduce Carbon, Start With a Calculator</h1>
                    </div>
                    <div className="nescare-paragraph mt-3">
                        <p>Measuring your emissions is step one to reducing them. nesglobal.org’s free carbon calculator sets you up for sustainability.
                            <br/>
                            <br/>
                            Featuring its own API and CSV uploader, our carbon calculator is accredited by the Smart Freight Centre in conformance with the Global Logistics Emissions Council (GLEC) Framework.
                            </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src='../images/Company/nescare/carbonhome.png' />
                </div>
            </div>
        </div>
    </div>
</section>

<section>
        <div className="container mt-15">
            <div className="row">
                <div className="col-lg-6 p-5">
                     <img src='../images/Company/nescare/lower.png' />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                    <div className="nescare-heading">
                        <h1 style={{color: "#403F3E"}}>Use Data To <span style={{color: "#24C6AF"}}>Go Lower</span></h1>
                    </div>
                    <div className="nescare-paragraph mt-3">
                        <p style={{color: "#737171"}}>Find the optimal mix of ocean, rail, air, and trucking to lower your carbon impact. NES platform and the nesglobal.org team can analyze your emissions to find the right reductions for your business.</p>
                    </div>
                </div>

                <div className="mt-15"></div>

                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                    <div className="nescare-heading">
                        <h1 style={{color: "#403F3E"}}>Neutralize <span style={{color: "#24C6AF"}}>the Rest</span></h1>
                    </div>
                    <div className="nescare-paragraph mt-3">
                        <p style={{color: "#737171"}}>You can offset up to 100% of your shipping-related emissions for a small fee per shipment. The nesglobal.org Offset Program is an easy, meaningful way to work towards your company’s sustainability goals.</p>
                    </div>
                </div>
                <div className="col-lg-6 p-5">
                     <img src='../images/Company/nescare/rest.png' />
                </div>

                <div className="mt-15"></div>

                <div className="col-lg-6 p-5">
                     <img src='../images/Company/nescare/change.png' />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                    <div className="nescare-heading">
                        <h1 style={{color: "#403F3E"}}>Partnering For <span style={{color: "#24C6AF"}}>Industry Change </span></h1>
                    </div>
                    <div className="nescare-paragraph mt-3">
                        <p style={{color: "#737171"}}>We’ve committed to carbon removal and drive the Sustainability Program. If you’d like to join us as an environmental partner, get in touch.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Copyright/>
    </>
  )
}
