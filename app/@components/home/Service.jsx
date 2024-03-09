import React from 'react';
import ServiceCard from '../common/ServiceCard';
import {BusinessSvg, PlanningSvg, MarketingSvg} from '../svg/service/ServiceSvg';

function Service(props) {
    const services = [
        {
            id: 1,
            title: "Business analysis",
            description: "Our Business Analysis service is the first step in understanding your organization's current state.",
            link: '/service/1',
            svg: <BusinessSvg/>
        },
        {
            id: 2,
            title: "Strategic planning",
            description: "We work closely with you to develop a tailored roadmap that aligns with your goals and objectives",
            link: '/service/2',
            svg: <PlanningSvg/>
        },
        {
            id: 3,
            title: "Marketing strategy",
            description: "Our Marketing Strategy service is designed to elevate your brand's visibility and engagement.",
            link: '/service/3',
            svg: <MarketingSvg/>
        },

    ];

    return (
        <section className="pb-0">
            <div className="container">
                {/* <!-- Title --> */}
                <div className="inner-container text-center mb-4 mb-sm-6">
                    <h2 className="mb-0">Our Comprehensive Services</h2>
                </div>

                {/* <!-- Service list START --> */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

                    {services.map((service) => (
                        <div key={service.id} className="col">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                    
                   

                

                    {/* <!-- Service item --> */}
                    <div className="col">
                        <div className="card card-hover-shadow border h-100 p-4">
                            {/* <!-- Card body --> */}
                            <div className="card-body p-0">
                                {/* <!-- Icon --> */}
                                <figure className="text-primary mb-4">
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.523 8.92914C17.523 9.94279 16.6746 10.7645 15.6281 10.7645C14.5816 10.7645 13.7333 9.94279 13.7333 8.92914C13.7333 7.91548 14.5816 7.09375 15.6281 7.09375C16.6746 7.09375 17.523 7.91548 17.523 8.92914Z" fill="currentColor"/>
                                        <path d="M10.485 8.92914C10.485 9.94279 9.63664 10.7645 8.59015 10.7645C7.54366 10.7645 6.69531 9.94279 6.69531 8.92914C6.69531 7.91548 7.54366 7.09375 8.59015 7.09375C9.63664 7.09375 10.485 7.91548 10.485 8.92914Z" fill="currentColor"/>
                                        <path d="M11.0264 15.2219C11.0264 16.2355 10.178 17.0573 9.13154 17.0573C8.08504 17.0573 7.2367 16.2355 7.2367 15.2219C7.2367 14.2082 8.08504 13.3865 9.13154 13.3865C10.178 13.3865 11.0264 14.2082 11.0264 15.2219Z" fill="currentColor"/>
                                        <path d="M21.748 9.45998C21.4753 4.55256 14.4854 1.4706 9.28231 2.41642C4.07925 3.36223 1.56208 8.48915 2.41245 13.4547C3.23924 18.2826 8.68956 21.7459 12.1134 21.7459C15 21.7459 17.25 20.6058 17.25 18.9959C17.25 18.9959 17.2846 18.5254 16.98 17.9961C16.7157 17.5369 16.4642 17.3392 16.07 16.9961C15.8584 16.8119 15.5273 16.5296 15.15 15.9959C14.9079 15.6534 14.8139 15.4137 14.8 15.3435C14.7846 14.9174 15.0127 14.407 15.5 14.2561C15.6439 14.2115 15.8105 14.2221 16 14.2459C18 14.3961 22 13.9961 21.748 9.45998Z" fill="currentColor" fill-opacity="0.25"/>
                                        </svg>
                                </figure>
            
                                {/* <!-- Content --> */}
                                <h5 className="mb-3"><a href="#">Experience design</a></h5>
                                <p>From website design to app development, we blend aesthetics with usability to leave a lasting impression.</p>
                            </div>

                            {/* <!-- Card footer --> */}
                            <div className="card-footer mt-auto p-0 pt-2">
                                <a className="icon-link icon-link-hover stretched-link z-index-2" href="#">View detail<i className="bi bi-arrow-right"></i> </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service item --> */}
                    <div className="col">
                        <div className="card card-hover-shadow border h-100 p-4">
                            {/* <!-- Card body --> */}
                            <div className="card-body p-0">
                                {/* <!-- Icon --> */}
                                <figure className="text-primary mb-4">
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 18V15M12 13V18M16 18V11M6.5 11.5L7.9646 9.7913C8.91547 8.68195 10.3837 8.16067 11.8212 8.42204V8.42204C13.812 8.78401 15.8538 8.14622 17.2846 6.71542L17.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.2 2.25H10.8C7.23775 2.25 5.45663 2.25 4.20802 3.15717C3.80477 3.45015 3.45015 3.80477 3.15717 4.20802C2.25 5.45663 2.25 7.23775 2.25 10.8V13.2C2.25 16.7622 2.25 18.5434 3.15717 19.792C3.45015 20.1952 3.80477 20.5499 4.20802 20.8428C5.45663 21.75 7.23775 21.75 10.8 21.75H13.2C16.7622 21.75 18.5434 21.75 19.792 20.8428C20.1952 20.5499 20.5499 20.1952 20.8428 19.792C21.75 18.5434 21.75 16.7622 21.75 13.2V10.8C21.75 7.23775 21.75 5.45663 20.8428 4.20802C20.5499 3.80477 20.1952 3.45015 19.792 3.15717C18.5434 2.25 16.7622 2.25 13.2 2.25Z" fill="currentColor" fill-opacity="0.25"/>
                                    </svg>
                                </figure>
            
                                {/* <!-- Content --> */}
                                <h5 className="mb-3"><a href="#">Business consulting</a></h5>
                                <p>Our consultants become your trusted advisors on the path to success.</p>
                            </div>

                            {/* <!-- Card footer --> */}
                            <div className="card-footer mt-auto p-0 pt-2">
                                <a className="icon-link icon-link-hover stretched-link z-index-2" href="#">View detail<i className="bi bi-arrow-right"></i> </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Service item --> */}
                    <div className="col">
                        <div className="card card-hover-shadow border h-100 p-4">
                            {/* <!-- Card body --> */}
                            <div className="card-body p-0">
                                {/* <!-- Icon --> */}
                                <figure className="text-primary mb-4">
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75Z" fill="currentColor" fill-opacity="0.25"/>
                                        <path d="M14.5 10V10C14.5 8.89543 13.6046 8 12.5 8H12M12 8H11.5C10.3954 8 9.5 8.89543 9.5 10V10C9.5 11.1046 10.3954 12 11.5 12H12M12 8V6.5M12 8V12M12 12H12.5C13.6046 12 14.5 12.8954 14.5 14V14C14.5 15.1046 13.6046 16 12.5 16H12M12 12V16M12 16H11.5C10.3954 16 9.5 15.1046 9.5 14V14M12 16V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </figure>
            
                                {/* <!-- Content --> */}
                                <h5 className="mb-3"><a href="#">Tax consultant</a></h5>
                                <p>We're here to optimize your tax strategy, so you can focus on what matters most to your business.</p>
                            </div>

                            {/* <!-- Card footer --> */}
                            <div className="card-footer mt-auto p-0 pt-2">
                                <a className="icon-link icon-link-hover stretched-link z-index-2" href="#">View detail<i className="bi bi-arrow-right"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Service list END --> */}
            </div>	
        </section>
    );
}

export default Service;