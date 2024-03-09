"use client";
import React from 'react';

function Location(props) {
    return (
        <section className="py-xl-5">
            <div className="container py-xl-8" style={{ backgroundImage: 'url(/images/elements/map.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="inner-container text-center">

                    <h2 className="mb-4">We're global and growing</h2>
                    <p className="mb-6">Mizzle customer support is available free of charge. Connection charges can vary when calling from outside the area, abroad or from a mobile phone.</p>

                    <div className="row g-4 text-start justify-content-center">
            
                        <div className="col-md-5">
                            <div className="card card-body border p-4">
                            
                                <div className="avatar avatar-lg mb-4">
                                    <img className="avatar-img rounded-circle" src="/images/flags/us.svg" alt="avatar" />
                                </div>
                                <h6 className="card-title mb-3"><a href="#">United States</a></h6>
                    
                                <ul className="list-group list-group-borderless border-0">
                                    <li className="d-flex mb-3"><i className="me-2 bi bi-geo-alt"></i>55/123 Norman street, Banking road, Sydney NSW 5000</li>
                                    <li className="d-flex mb-3"><i className="me-2 bi bi-headset"></i>Call: 469-537-2410 (Toll-free)</li>
                                </ul>
                            </div>
                        </div>

                
                        <div className="col-md-5">
                            <div className="card card-body border p-4">
                        
                                <div className="avatar avatar-lg mb-4">
                                    <img className="avatar-img rounded-circle" src="/images/flags/in.svg" alt="avatar" /> 
                                </div>
                                <h6 className="card-title mb-3"><a href="#">India</a></h6>
                    
                                <ul className="list-group list-group-borderless border-0">
                                    <li className="d-flex mb-3"><i className="me-2 bi bi-geo-alt"></i>55/123 Norman street, Banking road, Sydney NSW 5000</li>
                                    <li className="d-flex mb-3"><i className="me-2 bi bi-headset"></i>Call: 469-537-2410 (Toll-free)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;