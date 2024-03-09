import Content from '@/app/@components/about/Content';
import Feature from '@/app/@components/about/Feature';
import Location from '@/app/@components/about/Location';
import Testimonial from '@/app/@components/about/Testimonial';
import React from 'react';


function page(props) {
    return (
        <div>
            <Content />
            <Feature/>
            <Testimonial/>
            <Location />
        </div>
    );
}

export default page;