import React from 'react'
import { Link,NavLink, useParams } from 'react-router-dom'


export default function header(props) {
    const showNav = props.showNav??true;
    const isWhite = props.isWhite??false;

  return (
    <>
    <nav style={{background: isWhite?'#10243E':"#FFFFFF"}}>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to={"/"}><img src={isWhite?"/images/Home/logowhite1.png":"/images/Home/logo.png"} height={20} width={150} /></Link>
                </div>

                {showNav?
                    <div className="menu">
                        <ul className="menu-list">
                            <li>
                                <div className="dropdown">
                                    <NavLink to="/" className="dropbtn">Products<i class="fal fa-angle-down"></i>
                                    </NavLink>
                                    <div className='dropdown-content'>
                                        <a href='#'>Logistics<i class="fal fa-angle-right"></i>
                                            <div className="sub-dropdown-content">
                                                <a href='/Product/Nesplatform'>Nes Platform</a>
                                                <a href='/Product/Visibility'>Visiblity</a>
                                                <a href='/Product/Customs'>Customs</a>
                                            </div>
                                        </a>

                                        <a href='#'>Transportation<i class="fal fa-angle-right"></i>
                                            <div className="sub-dropdown-content">
                                                <a href='/Product/AirFreight'>Air Freight</a>
                                                <a href='/Product/OceanFreight'>Ocean Freight</a>
                                                <a href='/Product/ProjectAirAndOceanCharters'>Project Air And Ocean Charters</a>
                                            </div>
                                        </a>

                                        <a href='#'>Trade Management<i class="fal fa-angle-right"></i>
                                            <div className="sub-dropdown-content">
                                                <a href='/Product/TradeFinance'>Trade Finance</a>
                                                <a href='/Product/TradeAdvisory'>Trade Advisory</a>
                                                <a href='/Product/Dutydrawbacks'>Duty Drawbacks</a>
                                                <a href='/Product/ProductClassification'>Product Classification</a>
                                                <a href='/Product/CargoInsurance'>Cargo Insurance</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>    
                            </li>
                            <li>
                                <NavLink to="/" >Resources<i class="fal fa-angle-down"></i></NavLink>
                            </li>
                            <li>
                                <div className="dropdown">
                                <NavLink to="/" className="dropbtn">Company<i class="fal fa-angle-down"></i></NavLink>
                                    <div className='dropdown-content'>
                                        <a href='/Company/AboutUs'>About Us</a>
                                        <a href='/Company/Leadership'>Leadership</a>
                                        <a href='/Company/Engineering'>Engineering</a>
                                        <a href='/Company/ContactUs'>Contact Us</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                :""}

                {showNav?
                    <div className="search-nav">
                        <ul>
                            <li>
                                <a href='#'><i class="far fa-search" style={{color: isWhite?"#E6E5E5":'#0060BE'}}></i></a>
                            </li>
                            <li>
                                <button type='submit'>Get Started</button>
                            </li>
                        </ul>
                    </div>
                :""}
            </div>
        </div>
    </nav>
    </>
  )
}
