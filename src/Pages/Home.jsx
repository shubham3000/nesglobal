import React from 'react'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'

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


{/* supply chain */}
    <section>
        <div className="container mt-5">
            <div className="section-head mb-3">
                <h4>SUPPLY CHAIN</h4>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="supply-chain-head">
                        <h3>Find Out What Your Supply Chain Can Really Do</h3>
                    </div>
                    <div className="supply-chain-build p-5">
                        <div className="supply-chain-build--img">
                            <img src='images/Home/umbrella.png' height={40} width={40} />
                        </div>
                        <div className="supply-chain-build--details">
                            <h3>Build Resilience</h3>
                            <p>Insure all your cargo or cover it by the shipment. Access capital for logistics costs & focus on opportunity</p>
                            <a href='#'>Learn More <i class="fas fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src='images/Home/supplychain.png' />
                </div>
            </div>
        </div>
    </section>


{/* find */}
    <section>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 p-5" style={{backgroundColor: "#0060BE"}}>
                    <div className="find">
                        <div className="find-heading">
                            <h3 style={{color: "#FFFFFF"}}>Find Ship, Track, & Scale in Just a Few Clicks</h3>
                        </div>
                        <div className="find-paragraph">
                            <p style={{color: "#FFFFFF"}}>With logistics partners in more than 80 countries, companies of any size can transport goods to and from more places</p>
                        </div>
                    </div>

                    <div className="find mt-4">
                        <div className="find-heading">
                            <h3 style={{color: "#FFFFFF"}}>80+ countries</h3>
                        </div>
                        <div className="find-paragraph">
                            <p style={{color: "#FFFFFF"}}>with Flexport Platform users</p>
                        </div>
                    </div>

                    <div className="find mt-4">
                        <div className="find-heading">
                            <h3 style={{color: "#FFFFFF"}}>265K+ shipping docs</h3>
                        </div>
                        <div className="find-paragraph">
                            <p style={{color: "#FFFFFF"}}>digitized for speed and accuracy</p>
                        </div>
                    </div>

                    <div className="find mt-4">
                        <div className="find-heading">
                            <h3 style={{color: "#FFFFFF"}}>4.8M+ milestones</h3>
                        </div>
                        <div className="find-paragraph">
                            <p style={{color: "#FFFFFF"}}>tracked annually for greater shipment visibility</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 px-0">
                    <div className="find">
                        <div className="find-img">
                            <img src='images/Home/findship.png' height={570} width={684} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* case study */}
    <section>
        <div className="container mt-15">
            <div className="section-head mb-3 text-center">
                <h4>CASE STUDY</h4>
            </div>
            <div className="case-study-head text-center">
                <h3>See Why 10,000+ Companies Choose Flexport</h3>
            </div>

            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="case">
                        <div className="case-header">
                            <h3 style={{color: "#3D4B5D"}}>What Could You Achieve with Your Supply Chain in One View?</h3>
                        </div>
                        <div className="case-paragraph mt-4">
                            <p>At Georgia-Pacific, replacing thousands of email updates and attachments with a single view led to 100% on-time customs filings. That means faster arrivals and lower landed costs. Now, they extend the same visibility to their own customers.</p>
                        </div>
                        <div className="case-btn d-flex mt-5">
                            <div className="read-btn">
                                <button type='submit'>Read Case Study</button>
                            </div>
                            <div className="get-started-btn">
                                <button type='submit'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 px-0">
                    <div className="case-img">
                        <img src='images/Home/findship.png' />
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* Blogs */}

    <section className="informational-content" style={{background: "#10243E"}}>
        <div className="container">
            <div className="section-head mb-3 text-center">
                <h2 style={{color: "#FFFFFF", fontWeight: '700'}}>Join NES for Happy Nes Customers</h2>
            </div>
            <div className="case-study-head text-center">
                <p style={{color: "#FFFFFF"}}>The organization is not built and driven on commercial short term objectives but on long term goals of
                    making it a strong force of good to deliver a social and environmental impact. To measure carbon
                    emissions, reduce and also offset shipping impacts is a sure and sustainable way to the future of logistics
                    and transportation.
                </p>
            </div>
        </div>
    </section>


{/* signup */}
    <section>
        <div className="container mt-15 mb-15">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="signup-heading">
                        <h3>Sign-Up for Our Intelligent Commerce Newsletter</h3>
                    </div>
                    <div className="signup-paragraph">
                        <p>Insider perspectives, news, updates and expert advice for retail and  e-commerce brands</p>
                    </div>
                    <div className="signup-img mt-5">
                        <img src='images/Home/signup.png' height={187} width={410} />
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="signup-box">
                        <h4>Work Email ID:</h4>
                        <input type={'email'} className="email" placeholder="Enter Email Address"/>
                        
                        <input type={"checkbox"} className="mt-3"></input>
                        <label className='signup-agree' style={{marginLeft: "1rem"}}>I agree to the <a href='#'><span style={{color: "#0060BE"}}>Terms</span></a> of Service and <a href='#'><span style={{color: "#0060BE"}}>Privacy Policy</span></a></label>
                        
                        <button type='submit' className='signup-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
  )
}
