import React from 'react'
import { Link,NavLink, useParams } from 'react-router-dom'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function Terms() {
  return (
    <>
    <Header />
    <section>
        <div className="container mb-15" style={{paddingTop: "10rem"}}>
              <div className="row">
                    <div className="col-lg-8">
                        <div className="termsdate pb-3">
                            <h3 style={{color: "#737171"}}>Effective Date: April 4, 2022</h3>
                        </div>
                        <div className="terms-heading">
                            <h1>NES GLOBAL TERMS & CONDITIONS</h1>
                        </div>
                        <div className="terms-paragrapgh">
                            <p style={{color: "#737171"}}>By requesting or accepting goods or services from Nes Global LLP and/or its subsidiariesand affiliates (collectively, “NES GLOBAL”), the Customer agrees to the following terms and conditions of service (“Terms and Conditions”).
                                <br/>
                                <br/>
                                NES GLOBAL may from time to time change these Terms and Conditions. Any changes are effective immediately upon publication on our website at <a href='/terms'><span style={{color: "#0060BE", fontWeight: "500"}}>www.Nesglobal.in/terms</span></a>.
                                <br/>
                                <br/>
                                Nesglobal Privacy Policy: <a href='/Privacy'><span style={{color: "#0060BE", fontWeight: "500"}}>www.Nesglobal.in/privacy</span></a>
                            </p>
                        </div>
                        <div className="terms-list mt-5">
                            <ul>
                                <li>
                                    <a href='/TermsAndCondition/OceanTnC'>International Ocean Bill of Lading Terms & Conditions – Nes Global LLP</a>
                                </li>
                                <li>
                                    <a href='#'>Nes Global International Air Waybill Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href='#'>Nes Global Customs Brokerage and General Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href='#'>Nes Global Software and Visibility Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
              </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}
