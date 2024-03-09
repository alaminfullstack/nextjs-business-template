import Link from 'next/link';
import React from 'react';

function ServiceCard(props) {
    const {title,description,svg,link} = props.service;
    return (
        <div className="card card-hover-shadow border h-100 p-4">
            <div className="card-body p-0">
                <figure className="text-primary mb-4">
                    {svg}
                </figure>
                <h5 className="mb-3">
                    <Link href={link}>{title}</Link>
                </h5>
                <p>{description}</p>
            </div>

            <div className="card-footer mt-auto p-0 pt-2">
                <Link className="icon-link icon-link-hover stretched-link z-index-2" href={link}>View detail<i className="bi bi-arrow-right"></i> </Link>
            </div>
        </div>
    );
}

export default ServiceCard;