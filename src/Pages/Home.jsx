import React from 'react'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'
import Signup from '../Partials/Signup'
import Carosoul from './Carosoul'

export default function Home() {
  return (
    <>
    <Header />

    <section style={{ backgroundImage: "url(/images/Home/home.png)", backgroundSize: "cover", opacity: "5" }}>
        <div className="container">
            <div className="top-section  d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="home-details">
                            <h1>Take Control of your Supply Chain.</h1>
                            <p>Accelerate performance and growth for your entire supply chain. Ship to and from anywhere. Track everything. Collaborate with everyone</p>
                        </div>
                        <div className="home-bottom d-flex align-items-center mt-5">
                            <div className="talk-to-expert">
                                <button type='submit'>Talk to an Expert</button>
                            </div>
                            <div className="watch-video" style={{marginLeft: "60px"}}>
                                <img src='images/Home/playicon.png' height={48} width={48} />
                                <a href='#'>Watch Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* key to sucess */}
    <section>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8 d-flex flex-column justify-content-center">
                    <div className="keySucess-head">
                        <h3>Key to Success</h3>
                    </div>
                    <div className="keySucess-paragraph">
                        <p>Supply Chain plays a vital role in delivering economic prosperity. A strong logistics service provider ensures his customer is empowered to operate on a seamless ecosystem through which he can export his products or import raw materials use data from his historical transactions to make informed decisions and build sustainable relationships. Partner with Nes Global to get full control of your supply chain.
                            </p>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <img src='images/Home/keySucess.png' />
                </div>
            </div>
        </div>
    </section>

{/* Supply chain */}


<section>
    <div className="container mt-15 mb-5">
        <div className="supply-chain__head text-center mb-15">
            <h3>Deep Diving Into Your Supply Chain</h3>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <img src='images/Home/nesplatformimage.png' />
            </div>
            <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
                
                    <Carosoul/>
                
            </div>
        </div>
    </div>
</section>


<section>
        <div className="container mt-15 mb-15">
            <div className="row">
                <div className="col-lg-4 d-flex flex-column justify-content-center">
                    <img src='images/Home/partnering.png' />
                </div>
                <div className="col-lg-8" style={{paddingLeft: "4rem"}}>
                    <div className="keySucess-head">
                        <h3>Why is Partnering with NES the new Imperative:</h3>
                    </div>
                    <div className="keySucess-paragraph">
                        <p>International trade is crucial for any economy and its no different in India. To execute trade in a fragmented ecosystem puts a significant pressure on exporter or the importer in India. There is an impact of over 14% on the cost of the product manufactured in India due to a fragmented ecosystem. Nes Global is endeavoring to address these factors by the introduction of its digitized platform with an ecosystem which would empower the industry to execute imports and exports seamlessly and more importantly in a compliant manner. All the digital enhancements lead to facilitating global trade via the system and this would contribute to end to end visibility and lowering indirect costs and therefore improving landed costs making Indian products more competitive internationally.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

{/* nes community */}

    <section style={{backgroundColor: "#10243E"}}>
        <div className="container d-flex justify-content-center text-center" style={{padding: "96px 185px"}}>
            <div className="nes-community">
                <div className="nes-community__header">
                    <h3 style={{color: "#FFFFFF"}}>Join Nes to be a part of <br/> Happy’NES Community</h3>
                </div>
                <div className="nes-community__paragrapgh pt-4">
                    <p style={{color: "#FFFFFF"}}>The organization is not built and driven on commercial short term objectives but on long term goals of
                        making it a strong force of good to not only deliver a social and environmental impact but also to measure carbon
                        emissions, reduce and also offset shipping impacts is a sure and sustainable way to the future of logistics
                        and transportation.</p>
                </div>
            </div>
        </div>
    </section>

    <Signup />

    <Footer />
    </>
  )
}
