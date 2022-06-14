import React from 'react'
import {Link, NavLink, useParams} from 'react-router-dom'
import {Navbar, Offcanvas, Nav, Button, Container, NavDropdown, Form, FormControl} from "react-bootstrap";


export default function header(props) {
    const showNav = props.showNav ?? true;
    const isWhite = props.isWhite ?? false;

    return (
        <>
            <Navbar key='md' bg="light" expand='md' style={{background: isWhite ? '#FFFFFF' : '#10243E'}}>
                <Container>
                    <Navbar.Brand href="/"><img src={isWhite ? "/images/Home/logowhite1.png" : "/images/Home/logo.png"}
                                                height={20} width={150}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <NavDropdown
                                    title="Products"
                                    id={`offcanvasNavbarDropdown-expand-md`}
                                >
                                <NavDropdown.Item href="/Product/Nesplatform">Nes Platform</NavDropdown.Item>

                                </NavDropdown>
                                <Nav.Link href="#action2">Use Cases</Nav.Link>
                                <Nav.Link href="#action2">Use Cases</Nav.Link>
                                <Nav.Link href="#action2">Use Cases</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-md`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
    // return (
    //   <>
    //   <nav style={{background: isWhite?'#FFFFFF':'#10243E'}}>
    //       <div className="container">
    //           <div className="navbar">
    //               <div className="logo">
    //                   <Link to={"/"}><img src={isWhite?"/images/Home/logowhite1.png":"/images/Home/logo.png"} height={20} width={150} /></Link>
    //               </div>
    //
    //               {showNav?
    //                   <div className="menu text-white">
    //                       <ul className="menu-list">
    //                           <li>
    //                               <div className="dropdown">
    //                                   <NavLink to="/" className="dropbtn">Products<i class="fal fa-angle-down"></i>
    //                                   </NavLink>
    //                                   <div className='dropdown-content'>
    //                                       <a href='/Product/Nesplatform'>Nes Platform</a>
    //                                       <a href='/Product/Visibility'>Visiblity</a>
    //                                       <a href='/Product/Customs'>Customs</a>
    //                                       <a href='/Product/AirFreight'>Air Freight</a>
    //                                       <a href='/Product/OceanFreight'>Ocean Freight</a>
    //                                       <a href='/Product/TradeFinance'>Trade Finance</a>
    //                                   </div>
    //                               </div>
    //
    //
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Use Cases<i class="fal fa-angle-down"></i>
    //                                   {/* <ul className='sub-menu'>
    //                                       <li>Nes Platform</li>
    //                                       <li>Nes Platform</li>
    //                                       <li>Nes Platform</li>
    //                                   </ul> */}
    //                               </NavLink>
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Developers<i class="fal fa-angle-down"></i></NavLink>
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Resources<i class="fal fa-angle-down"></i></NavLink>
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Company<i class="fal fa-angle-down"></i></NavLink>
    //                           </li>
    //                       </ul>
    //                   </div>
    //               :""}
    //
    //               {showNav?
    //                   <div className="search-nav">
    //                       <ul>
    //                           <li>
    //                               <a href='#'><i class="far fa-search" style={{color: isWhite?"#E6E5E5":'#0060BE'}}></i></a>
    //                           </li>
    //                           <li>
    //                               <button type='submit'>Get bbb Started</button>
    //                           </li>
    //                       </ul>
    //                   </div>
    //               :""}
    //           </div>
    //       </div>
    //   </nav>
    //   </>
    // )
}
