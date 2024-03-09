import React from 'react';
import Link from 'next/link';

function Header(props) {
    const logo_image = process.env.IMAGE_PATH+'/Linkssets/images/logo.svg';
    const logo_white_image = process.env.IMAGE_PATH+'/Linkssets/images/logo-light.svg';

    return (
      <>
        <header className="header-sticky header-absolute">
            
            <nav className="navbar navbar-expand-xl">
                <div className="container">
                    
                    <Link className="navbar-brand me-0" href="index.html">
                        <img className="light-mode-item navbar-brand-item" src={logo_image} alt="logo" />
                        <img className="dark-mode-item navbar-brand-item" src={logo_white_image} alt="logo" />
                    </Link>
                    
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">

                        
                            <li className="nav-item">
                                <Link className="nav-link active" href={'/'}>Demos</Link>
                            </li>

                        
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                <ul className="dropdown-menu">
                                
                                    <li className="dropdown dropend">
                                        <Link className="nav-link dropdown-link dropdown-toggle" data-bs-toggle="dropdown" href="#">About</Link>
                                        <ul className="dropdown-menu" data-bs-popper="none">
                                            <li> <Link className="dropdown-item" href="/about">About v.1</Link></li>
                                            <li> <Link className="dropdown-item" href="/about2">About v.2</Link></li>
                                            <li> <Link className="dropdown-item" href="/about3">About v.3</Link></li>
                                            <li> <Link className="dropdown-item" href="/team">Team</Link></li>
                                            <li> <Link className="dropdown-item" href="/services">Services v.1</Link></li>
                                            <li> <Link className="dropdown-item" href="/services2">Services v.2</Link></li>
                                            <li> <Link className="dropdown-item" href="/service-single">Service Single</Link></li>
                                            <li> <Link className="dropdown-item" href="/customer-stories">Customer Stories</Link></li>
                                            <li> <Link className="dropdown-item" href="/customer-story-single">Customer Story Single</Link></li>
                                            <li> <Link className="dropdown-item" href="/career">Career <span className="badge text-bg-primary ms-2">2 Job</span></Link></li>
                                            <li> <Link className="dropdown-item" href="/career-single">Career Single</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li> <Link className="dropdown-item" href="/contact">Contact v.1</Link></li>
                                    <li> <Link className="dropdown-item" href="/contact2">Contact v.2</Link></li>

                                
                                    <li className="dropdown dropend">
                                        <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">SaaS Pages</Link>
                                        <ul className="dropdown-menu">
                                            <li> <Link className="dropdown-item" href="/features">Features</Link></li>
                                            <li> <Link className="dropdown-item" href="/feature-single">Feature Single</Link></li>
                                            <li> <Link className="dropdown-item" href="/integrations">Integrations</Link></li>
                                            <li> <Link className="dropdown-item" href="/integration-single">Integration Single</Link></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown dropend">
                                        <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Shop</Link>
                                        <ul className="dropdown-menu" >
                                            <li> <Link className="dropdown-item" href="/shop-grid">Shop Grid</Link></li>
                                            <li> <Link className="dropdown-item" href="/shop-single">Shop Single</Link></li>
                                            <li> <Link className="dropdown-item" href="/shop-cart">Shop Cart</Link></li>
                                            <li> <Link className="dropdown-item" href="/shop-empty-cart">Shop Empty Cart</Link></li>
                                            <li> <Link className="dropdown-item" href="/shop-checkout">Shop Checkout</Link></li>
                                        </ul>
                                    </li>

                                    
                                    <li className="dropdown dropend">
                                        <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Blog</Link>
                                        <ul className="dropdown-menu" >
                                            <li> <Link className="dropdown-item" href="/blog-grid">Blog Grid</Link></li>
                                            <li> <Link className="dropdown-item" href="/blog-list-sidebar">Blog List Sidebar</Link></li>
                                            <li> <Link className="dropdown-item" href="/blog-single-v1">Blog Single v.1</Link></li>
                                            <li> <Link className="dropdown-item" href="/blog-single-v2">Blog Single v.2</Link></li>
                                        </ul>
                                    </li>

                                
                                    <li className="dropdown dropend">
                                        <Link className="nav-link dropdown-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Specialty Pages</Link>
                                        <ul className="dropdown-menu" data-bs-popper="none">
                                            <li> <Link className="dropdown-item" href="/help-center">Help Center</Link></li>
                                            <li> <Link className="dropdown-item" href="/help-center-detail">Help Center Detail</Link></li>
                                            <li> <Link className="dropdown-item" href="/pricing">Pricing</Link></li>
                                            <li> <Link className="dropdown-item" href="/faq">Faqs</Link></li>
                                            <li> <Link className="dropdown-item" href="/error-404">Error 404</Link></li>
                                            <li> <Link className="dropdown-item" href="/coming-soon">Coming Soon</Link></li>
                                            <li> <Link className="dropdown-item" href="/terms-and-condition">Terms & Conditions</Link></li>
                                        </ul>
                                    </li>

                                    
                                    <li className="dropdown dropend">
                                        <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Authentication</Link>
                                        <ul className="dropdown-menu" data-bs-popper="none">
                                            <li> <Link className="dropdown-item" href="/sign-up">Sign Up</Link></li>
                                            <li> <Link className="dropdown-item" href="/sign-in">Sign In</Link></li>
                                            <li> <Link className="dropdown-item" href="/forgot-password">Forgot Password</Link></li>
                                        </ul>
                                    </li>

                                
                                    <li className="dropdown dropend">
                                        <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Accounts</Link>
                                        <ul className="dropdown-menu" data-bs-popper="none">
                                            <li> <Link className="dropdown-item" href="/account-detail">Details</Link></li>
                                            <li> <Link className="dropdown-item" href="/account-security">Security</Link></li>
                                            <li> <Link className="dropdown-item" href="/account-notification">Notifications</Link></li>
                                            <li> <Link className="dropdown-item" href="/account-projects">My Projects</Link></li>
                                            <li> <Link className="dropdown-item" href="/account-payment-details">Payment Details</Link></li>
                                            <li> <Link className="dropdown-item" href="/account-order">Order History</Link></li>
                                            <li> <Link className="dropdown-item" href="/account-wishlist">Wishlist</Link></li>
                                            <li> <Link className="dropdown-item" href="/account-delete">Delete Profile</Link></li>
                                        </ul>
                                    </li>

                                    
                                    <li> <hr className="dropdown-divider" /></li>
                                    
                                    
                                    <li className="dropdown dropend">
                                        <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" href="#">Dropdown levels</Link>
                                        <ul className="dropdown-menu">

                                            
                                                <li className="dropdown dropend">
                                                    <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" href="#">Dropdown (end)</Link>
                                                    <ul className="dropdown-menu">
                                                        <li> <Link className="dropdown-item" href="#">Dropdown item</Link> </li>
                                                        <li> <Link className="dropdown-item" href="#">Dropdown item</Link> </li>
                                                    </ul>
                                                </li>
                                            <li> <Link className="dropdown-item" href="#">Dropdown item</Link> </li>

                                            
                                            <li className="dropdown dropstart">
                                                <Link className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" href="#">Dropdown (start)</Link>
                                                <ul className="dropdown-menu">
                                                    <li> <Link className="dropdown-item" href="#">Dropdown item</Link> </li>
                                                    <li> <Link className="dropdown-item" href="#">Dropdown item</Link> </li>
                                                </ul>
                                            </li>
                                            <li> <Link className="dropdown-item" href="#">Dropdown item</Link> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            
                            <li className="nav-item"> <Link className="nav-link" href="/contact">Contact us</Link> </li>
                        </ul>
                    </div>
                

                    
                    <ul className="nav align-items-center dropdown-hover ms-sm-2">
                     
                        <li className="nav-item me-2">
                            <Link href="/sign-up" className="btn btn-sm btn-light mb-0"><i className="bi bi-person-circle me-1"></i>Sign up</Link>
                        </li>

                        
                        <li className="nav-item d-none d-sm-block">
                            <button className="btn btn-sm btn-primary mb-0">Buy now!</button>
                        </li>
                        
                        
                        <li className="nav-item">
                            <button className="navbar-toggler ms-sm-3 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-animation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </li>	
                    </ul>
                </div>
            </nav>
        </header>
      </>
    );
}

export default Header;