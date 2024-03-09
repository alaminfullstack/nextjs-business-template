import React from 'react';
import Link from 'next/link';

function Footer(props) {
    const logo_image = process.env.IMAGE_PATH+'/assets/images/logo.svg';
    const logo_white_image = process.env.IMAGE_PATH+'/assets/images/logo-light.svg';

    const google_image = process.env.IMAGE_PATH+'/assets/images/elements/google-play.svg';
    const playstore_image = process.env.IMAGE_PATH+'/assets/images/elements/app-store.svg';

    return (
        <footer className="pt-6">
            <div className="container position-relative mt-sm-5">

                {/* <!-- CTA --> */}
                <div className="row g-3 g-md-4 align-items-center">
                    <div className="col-md-6">
                        <h2 className="mb-0 lh-base">Get started on your path to
                            <span className="position-relative z-index-1">success
                                {/* <!-- SVG START --> */}
                                <span className="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 d-none d-lg-block">
                                    <svg width="188" height="53" viewBox="0 0 188 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-primary" d="M3.50843 26.6791C5.35764 34.7553 19.176 38.9851 26.7629 41.4254C47.5981 47.4215 69.586 48.7695 91.2825 49.6062C107.583 50.0478 123.91 49.7573 140.135 48.1885C154.13 46.7243 169.469 45.5158 180.691 36.9051C185.618 33.0239 185.82 27.2834 181.324 22.9954C169.418 11.8166 138.589 7.57514 121.756 4.98378C103.226 2.36919 84.4557 3.171 65.8116 4.27494C77.9834 4.49573 90.1553 5.19295 102.238 6.57578C107.406 7.27301 112.802 8.35371 117.032 11.3053C113.093 10.457 109.015 10.4338 105 10.1084C76.8182 7.19166 47.1675 4.62355 19.9233 13.5713C13.9704 15.8256 2.97647 19.5442 3.50843 26.6791ZM0 25.7727C1.06393 10.1897 39.758 5.03027 53.3231 4.43763C51.1192 4.29818 48.9154 4.07739 46.7242 3.78688C50.3846 2.79915 54.121 2.04382 57.9081 1.60224C65.5583 0.939879 73.2464 0.753952 80.9092 0.323997C94.0944 -0.349987 107.305 0.0102456 120.414 1.56738C136.816 4.10063 197.384 11.3983 186.757 34.918C184.554 38.8573 180.399 41.4603 176.27 43.5403C166.163 48.6068 154.523 49.8618 143.263 51.1285C126.456 52.7902 109.559 53.3131 92.6631 52.825C67.7368 51.907 42.1772 50.501 18.6947 42.1459C11.1586 39.1943 0.126658 34.3834 0 25.7727Z"/>
                                    </svg>
                                </span>
                                {/* <!-- SVG END --> */}
                            </span>
                            with us
                        </h2>
                    </div>

                    {/* <!-- Button --> */}
                    <div className="col-md-5 text-md-end ms-auto">
                        <Link className="btn btn-lg btn-primary-soft icon-link icon-link-hover mb-0" href="#">Start Your Journey<i className="bi bi-arrow-right"></i> </Link>
                    </div>
                </div>

                {/* <!-- Divider --> */}
                <hr className="my-5" />

                {/* <!-- Footer Widgets --> */}
                <div className="row g-4 justify-content-between">

                    {/* <!-- Widget 1 START --> */}
                    <div className="col-lg-8 col-xl-7">
                        <div className="row g-4">
                            {/* <!-- Link block --> */}
                            <div className="col-6 col-md-3">
                                <h6 className="mb-2 mb-md-4">Quick links</h6>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><Link className="nav-link pt-0" href="/about">About us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/contact">Contact us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/career">Career <span className="badge text-bg-danger ms-2">2 Job</span></Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/career-single">Career detail</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/contact-v1">Become a partner</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/sign-in">Sign in</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/sign-up">Sign up</Link></li>
                                </ul>
                            </div>

                            {/* <!-- Link block --> */}
                            <div className="col-6 col-md-3">
                                <h6 className="mb-2 mb-md-4">Community</h6>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><Link className="nav-link pt-0" href="#">Documents</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="#">Supports <i className="bi bi-box-arrow-up-right small ms-1"></i></Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/faq">Faqs</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="#">Privacy Policy</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/blog-grid">News and blogs</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="#">Terms & condition</Link></li>
                                </ul>
                            </div>

                            {/* <!-- Link block --> */}
                            <div className="col-md-6">
                                <h6 className="mb-2 mb-md-4">Contact details</h6>
                                <ul className="list-group list-group-borderless">
                                    <li className="d-flex mb-3"><i className="me-2 text-primary bi bi-geo-alt"></i>1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548. </li>
                                    <li className="d-flex mb-3"><i className="me-2 text-primary bi bi-headset"></i> (251) 854-6308 </li>
                                    <li className="d-flex mb-3"><i className="me-2 text-primary bi bi-envelope"></i> help@example.com</li>
                                    <li className="d-flex mb-3"><i className="me-2 text-primary bi bi-clock"></i>
                                        <p className="mb-0">Mon - Fri: <strong>09:00 - 21:00</strong> <br/>Sat - Sun: <strong>Closed</strong></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Widget 1 END --> */}

                    {/* <!-- Widget 2 START --> */}
                    <div className="col-lg-3">
                        <h6 className="mb-2 mb-md-4">App available on</h6>
                        <div className="row g-2 mb-4 mb-sm-5">
                            {/* <!-- Google play store button --> */}
                            <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                <Link href="#"> <img src={google_image} alt="" /> </Link>
                            </div>
                            {/* <!-- App store button --> */}
                            <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                <Link href="#"> <img src={playstore_image} alt="app-store" /> </Link>
                            </div>
                        </div>

                        {/* <!-- Social buttons --> */}
                        <h6 className="mb-2 mb-md-4">Follow on</h6>

                        <ul className="list-inline mb-0 mt-3">
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-facebook" href="#"><i className="fab fa-fw fa-facebook-f lh-base"></i></Link> </li>
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-instagram" href="#"><i className="fab fa-fw fa-instagram lh-base"></i></Link> </li>
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-twitter" href="#"><i className="fab fa-fw fa-twitter lh-base"></i></Link> </li>
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in lh-base"></i></Link> </li>
                            <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-youtube" href="#"><i className="fab fa-fw fa-youtube lh-base"></i></Link> </li>
                        </ul>
                    </div>
                    {/* <!-- Widget 2 END --> */}
                </div>

                {/* <!-- Divider --> */}
                <hr className="mt-4 mb-3" />

                {/* <!-- Bottom footer --> */}
                <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-3">
                    {/* <!-- Logo --> */}
                    <Link className="navbar-brand" href="index.html">
                        <img className="light-mode-item navbar-brand-item h-40px" src={logo_image}alt="logo" />
                        <img className="dark-mode-item navbar-brand-item h-40px" src={logo_white_image} alt="logo" />
                    </Link>

                    {/* <!-- Copyright link--> */}
                    <div className="text-body mt-3 mt-md-0"> Copyrights ©2024 gemamin. Build by <Link href="https://www.itgeliyor.com/" className="text-body text-primary-hover">Itgeliyor</Link>. </div>
                    {/* <!-- Copyright link--> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;