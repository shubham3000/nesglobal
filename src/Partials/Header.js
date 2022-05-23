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
                                <NavLink to="/product" >Products<i class="fal fa-angle-down"></i>
                                    <ul className='sub-menu'>
                                        <li><a>Nes Platform</a></li>
                                        <li><a>Nes Platform</a></li>
                                        <li><a>Nes Platform</a></li>
                                    </ul>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" >Use Cases<i class="fal fa-angle-down"></i>
                                    <ul className='sub-menu'>
                                        <li>Nes Platform</li>
                                        <li>Nes Platform</li>
                                        <li>Nes Platform</li>
                                    </ul>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" >Developers<i class="fal fa-angle-down"></i></NavLink>
                            </li>
                            <li>
                                <NavLink to="/" >Resources<i class="fal fa-angle-down"></i></NavLink>
                            </li>
                            <li>
                                <NavLink to="/" >Company<i class="fal fa-angle-down"></i></NavLink>
                            </li>
                        </ul>
                    </div>
                :""}

                {showNav?
                    <div className="search-nav">
                        <ul>
                            <li>
                                <a href='#'><i class="far fa-search"></i></a>
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
