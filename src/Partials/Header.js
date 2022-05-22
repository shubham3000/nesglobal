import React from 'react'
import { Link,NavLink, useParams } from 'react-router-dom'


export default function header() {
  return (
    <>
    <nav>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to={"/"}><img src='/images/Home/logo.png' height={20} width={150} /></Link>
                </div>

                <div className="menu">
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" >Products<i class="fal fa-angle-down"></i></NavLink>
                        </li>
                        <li>
                            <NavLink to="/" >Use Cases<i class="fal fa-angle-down"></i></NavLink>
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

                <div className="search-nav">
                    <ul>
                        <li>
                            <i class="far fa-search"></i>
                        </li>
                        <li>
                            <button type='submit'>Get Started</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
