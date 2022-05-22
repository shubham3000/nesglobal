import React from 'react'

import { Link,NavLink, useParams } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer>
        <section style={{backgroundColor: "#10243E"}}>
            <div className="container">
                <div className="footer p-5">
                    <div className="footer-top d-flex justify-content-between">
                        <div className="footer-logo">
                            <Link to={"/"}><img src='/images/Home/logowhite.png' height={20} width={150} /></Link>
                        </div>
                        <div className="social-icon d-flex">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    </>
  )
}
