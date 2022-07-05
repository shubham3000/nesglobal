import React from 'react'

export default function signup() {
  return (
    <section style={{background: "#E6EFF9"}}>
        <div className="container" style={{padding: "7rem 0 4rem 0"}}>
            <div className="row">
                <div className="col-lg-6 col-sm-12 pr-3">
                    <div className="signup-img mb-2">
                        <img src='images/Home/signupicon.png' height={104} width={104} />
                    </div>
                    <div className="signup-heading">
                        <h3>Sign-Up for Our Intelligent Commerce Newsletter</h3>
                    </div>
                    <div className="signup-paragraph">
                        <p>Insider perspectives, news, updates and expert advice for retail and  e-commerce brands</p>
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
  )
}
