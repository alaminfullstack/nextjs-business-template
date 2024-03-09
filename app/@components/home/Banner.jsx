"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Banner(props) {
    const router = useRouter();
    const banner_image = '/images/elements/hero-finance.svg';
  return (
    <div className="row g-4 g-xxl-5">
      {/* <!-- Hero content START --> */}
      <div className="col-xl-6">
        {/* <!-- Title --> */}
        <h1 className="mb-0 lh-base">
          Transforming ideas into
          <span className="position-relative">
            digital
            {/* <!-- SVG START --> */}
            <span className="position-absolute top-50 start-50 translate-middle z-index-n1 ms-n2 d-none d-sm-block">
              <svg
                width="182"
                height="53"
                viewBox="0 0 182 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-primary"
                  d="M3.39646 26.6791C5.18665 34.7553 18.564 38.9851 25.9087 41.4254C46.0791 47.4215 67.3652 48.7695 88.3693 49.6062C104.15 50.0478 119.955 49.7573 135.662 48.1885C149.211 46.7243 164.06 45.5158 174.924 36.9051C179.694 33.0239 179.89 27.2834 175.537 22.9954C164.011 11.8166 134.166 7.57514 117.871 4.98378C99.9319 2.36919 81.7603 3.171 63.7112 4.27494C75.4946 4.49573 87.278 5.19295 98.9755 6.57578C103.978 7.27301 109.202 8.35371 113.297 11.3053C109.484 10.457 105.535 10.4338 101.649 10.1084C74.3665 7.19166 45.6622 4.62355 19.2875 13.5713C13.5245 15.8256 2.88147 19.5442 3.39646 26.6791ZM0 25.7727C1.02997 10.1897 38.4891 5.03027 51.6213 4.43763C49.4878 4.29818 47.3543 4.07739 45.233 3.78688C48.7766 2.79915 52.3938 2.04382 56.06 1.60224C63.466 0.939879 70.9088 0.753952 78.327 0.323997C91.0913 -0.349987 103.88 0.0102456 116.571 1.56738C132.45 4.10063 191.085 11.3983 180.797 34.918C178.664 38.8573 174.642 41.4603 170.645 43.5403C160.86 48.6068 149.591 49.8618 138.691 51.1285C122.42 52.7902 106.063 53.3131 89.7058 52.825C65.575 51.907 40.8311 50.501 18.0981 42.1459C10.8025 39.1943 0.122616 34.3834 0 25.7727Z"
                />
              </svg>
            </span>
            {/* <!-- SVG END --> */}
          </span>
          realities
        </h1>

        <p className="mb-0 mt-4 mt-xl-5">
          Your ideas are the driving force behind your business, and our digital
          agency is here to turn those ideas into tangible digital realities.
        </p>

        {/* <!-- Buttons --> */}
        <div className="d-flex gap-1 gap-sm-3 flex-wrap mt-4 mt-xl-5">
          <button className="btn btn-dark" type="button" onClick={() => router.push('/about')}>
            Get started
          </button>
          <button className="btn btn-outline-dark" type="button">
            Start a 14 days free trial
          </button>
        </div>

        {/* <!-- Features --> */}
        <ul className="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-0 mt-4 mt-xl-5">
          <li className="list-inline-item heading-color">
            <i className="bi bi-stopwatch me-1"></i>24/7 Supports
          </li>
          <li className="list-inline-item heading-color">
            <i className="bi bi-fire me-1"></i>Free updates
          </li>
          <li className="list-inline-item heading-color">
            <i className="bi bi-life-preserver me-1"></i>Access premium doc
          </li>
        </ul>
      </div>
      {/* <!-- Hero content END --> */}

      {/* <!-- Hero image START --> */}
      <div className="col-xl-6 text-center">
        <Image src={banner_image} alt="hero-img" width={'615'} height={'500'} />
      </div>
      {/* <!-- Hero image END --> */}
    </div>
  );
}

export default Banner;
