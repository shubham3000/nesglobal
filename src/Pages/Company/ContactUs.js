import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function ContactUs() {
  return (
    <>
    <Header showNav={true} isWhite={true} />

    <section style={{ background: "#10243E" }}>
        <div className="container">
            <div className="top-section" style={{paddingTop: "90px"}}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contactus">
                            <div className="contact-head mb-5">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="address-head">
                                <h4 style={{color: "#403F3E"}}>Our Address</h4>
                            </div>
                            <div className="address">
                                <p>Nes Global LLP <br/>
                                    HD 036, We Work, Two Horizon center, 5th floor, DLF phase 5, sector 43 Golf Course Road, Gurgaon, Haryana HD 122002</p>
                            </div>
                            <div className="connect mt-5 mb-4">
                                <h5>Connect With Us</h5>
                            </div>
                            <div className="team-social-links d-flex">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8"></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
