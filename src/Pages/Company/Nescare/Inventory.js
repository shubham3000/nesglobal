import React from 'react'

import Copyright from '../../../Partials/Copyright'

import Header from '../../../Partials/Header'
import '../../../Styles/global.css'

export default function Inventory() {
  return (
    <>
    <Header showNav={false} ContactNav={true} />

<section  style={{background: "#10243E"}}>
    <div className="container" style={{paddingTop: "7rem"}}>
        <div className="nescare-top pt-5">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center" style={{paddingRight: "125px"}}>
                    <div className="nescare-heading">
                        <h1>Don’t Need It? <br/>
                            Someone Else Does</h1>
                    </div>
                    <div className="nescare-paragraph mt-3">
                        <p>Donated products like medical supplies, building materials, or daily necessities, are always in demand.
                            <br/>
                            <br/>
                            With Nesglobal.org, excess inventory due to returns, imperfections, or product changes needn’t go to waste. Just ask, and we can tell you how to put your items to good use.</p>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <img src='../images/Company/nescare/serviceshome.png' />
                </div>
            </div>
        </div>
    </div>
</section>

<section>
        <div className="container mt-15">
            <div className="row">
                <div className="col-lg-6 p-5">
                     <img src='../images/Company/nescare/help.png' />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                    <div className="nescare-heading">
                        <h1 style={{color: "#403F3E"}}>Your Platform for <br/><span style={{color: "#24C6AF"}}>How To Help</span></h1>
                    </div>
                    <div className="nescare-paragraph mt-3">
                        <p style={{color: "#737171"}}>How do you help in a crisis? The NES platform, designed to bring visibility and control to global trade, can be your guide. You and your Nesglobal.org team can use this technology—without charge—to move donations, see real-time progress, and coordinate with nonprofit partners on the ground.</p>
                    </div>
                </div>

                <div className="mt-15"></div>

                <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                    <div className="nescare-heading">
                        <h1 style={{color: "#403F3E"}}>Get <span style={{color: "#24C6AF"}}>Discounted</span> Shipping and Marketing Support </h1>
                    </div>
                    <div className="nescare-paragraph mt-3">
                        <p style={{color: "#737171"}}>When you donate products or supplies through Nesglobal.org, you may also get significant discounts on shipping for those shipments. Additionally, we can highlight your donation with press releases, case studies, or other marketing support.</p>
                    </div>
                </div>
                <div className="col-lg-6 p-5">
                     <img src='../images/Company/nescare/discounted.png' />
                </div>
            </div>
        </div>
    </section>

    <Copyright/>
    </>
  )
}
