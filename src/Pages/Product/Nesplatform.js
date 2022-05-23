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

    <section>
        <div className="container mt-15">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='images/product/track.png' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Track Everything Effortlessly</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>Track your freight over ocean, air, and land. Get milestone updates, exception alerts, landed cost, and inventory impacts at a glance.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='images/product/flow.png' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>More Flow. Less	Work.</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>Collaborate in real time. Order from suppliers. Track inventory in motion. Message your warehouse. The Nes Platform speeds workflows, addresses inefficiencies for everyone in your supply chain.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='images/product/data.png' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Your Data for Better Decisions</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>Transit time, landed costs, and container utilization is data within reach—thanks to the Nes Platform’s power to structure, store, and safeguard your data.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style={{background: "#10243E"}}>
        <div className="container mt-15 p-5">
            <div className="leading-brands">
                <h3>Join Thousands of Leading Brands on Flexport</h3>
            </div>
            <div className="leading-brands-logos d-flex flex-row justify-content-between align-items-center mt-5">
                <img src='images/product/sonos-logo.png' height={61} width={131} />
                <img src='images/product/Fairphone-logo.png' height={65} width={182}/>
                <img src='images/product/outdoor-voices-logo.png' height={77} width={214}/>
                <img src='images/product/jlab-audio-logo.png' height={61} width={170}/>
                <img src='images/product/Rothy_s-logo.png' height={54} width={145}/>
            </div>
        </div>
    </section>
    </>
  )
}
