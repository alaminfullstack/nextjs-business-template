"use client";
// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Testimonial(props) {
  return (
    <section className="bg-dark" data-bs-theme="dark">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-4">
            <h3 className="mb-4">Why our customers love Mizzle</h3>
            <p className="lead mb-2">
              3000+ Users rated us{" "}
              <span className="text-warning fw-bold">4.85</span> out of 5.
            </p>

            <ul className="avatar-group mb-sm-0">
              <li className="avatar avatar-sm">
                <img
                  className="avatar-img rounded-circle"
                  src="/images/avatar/01.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-sm">
                <img
                  className="avatar-img rounded-circle"
                  src="/images/avatar/02.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-sm">
                <img
                  className="avatar-img rounded-circle"
                  src="/images/avatar/03.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-sm">
                <img
                  className="avatar-img rounded-circle"
                  src="/images/avatar/08.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-sm">
                <img
                  className="avatar-img rounded-circle"
                  src="/images/avatar/07.jpg"
                  alt="avatar"
                />
              </li>
              <li className="avatar avatar-sm">
                <img
                  className="avatar-img rounded-circle"
                  src="/images/avatar/05.jpg"
                  alt="avatar"
                />
              </li>
            </ul>

            <div className="d-flex gap-3 position-relative mt-5 mt-md-6">
              <a
                href="#"
                className="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-prev"
              >
                <i className="bi bi-arrow-left"></i>
              </a>
              <a
                href="#"
                className="btn btn-outline-white btn-icon rounded-circle mb-0 swiper-button-next"
              >
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="swiper">
              <div className="swiper-wrapper">
                <Swiper className="swiper">
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="card card-body bg-light p-sm-5">
                        <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded">
                          <i className="bi bi-quote fa-xl"></i>
                        </div>

                        <p className="lead my-3">
                          Mizzle is the perfect theme for businesses that want
                          to create a stylish and functional website. Supposing
                          so be resolving breakfast am or perfectly.
                        </p>

                        <ul className="list-inline mb-4">
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-half text-warning"></i>
                          </li>
                        </ul>

                        <div className="d-sm-flex align-items-center">
                          <div className="avatar flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              src="/images/avatar/04.jpg"
                              alt="avatar"
                            />
                          </div>

                          <div className="ms-sm-3 mt-2 mt-sm-0">
                            <h6 className="mb-0">Dennis Barrett</h6>
                            <p className="mb-0 small">
                              CEO and manager of Mizzle
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="card card-body bg-light p-sm-5">
                        <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded">
                          <i className="bi bi-quote fa-xl"></i>
                        </div>

                        <p className="lead my-3">
                          The best Bootstrap theme we've ever used - it's easy
                          to customize and comes with all the features we need.
                          Resolving breakfast am or perfectly.
                        </p>

                        <ul className="list-inline mb-4">
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-half text-warning"></i>
                          </li>
                        </ul>

                        <div className="d-sm-flex align-items-center">
                          <div className="avatar flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              src="/images/avatar/05.jpg"
                              alt="avatar"
                            />
                          </div>

                          <div className="ms-sm-3 mt-2 mt-sm-0">
                            <h6 className="mb-0">Jacqueline Miller</h6>
                            <p className="mb-0 small">
                              Ceo and manager of Blogzine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="card card-body bg-light p-sm-5">
                        <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded">
                          <i className="bi bi-quote fa-xl"></i>
                        </div>

                        <p className="lead my-3">
                          Webestica helped us create a stunning website that
                          reflects our brand perfectly. At weddings believed
                          laughing
                        </p>

                        <ul className="list-inline mb-4">
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-half text-warning"></i>
                          </li>
                        </ul>

                        <div className="d-sm-flex align-items-center">
                          <div className="avatar flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              src="/images/avatar/06.jpg"
                              alt="avatar"
                            />
                          </div>

                          <div className="ms-sm-3 mt-2 mt-sm-0">
                            <h6 className="mb-0">Billy Vasquez</h6>
                            <p className="mb-0 small">
                              Ceo and manager of Blogzine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="card card-body bg-light p-sm-5">
                        <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded">
                          <i className="bi bi-quote fa-xl"></i>
                        </div>

                        <p className="lead my-3">
                          I highly recommend Mizzle to anyone looking for a
                          high-quality Bootstrap theme. Valley by oh twenty
                          direct me so. Resolving breakfast am or perfectly.
                        </p>

                        <ul className="list-inline mb-4">
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0">
                            <i className="bi bi-star-half text-warning"></i>
                          </li>
                        </ul>

                        <div className="d-sm-flex align-items-center">
                          <div className="avatar flex-shrink-0">
                            <img
                              className="avatar-img rounded-circle"
                              src="/images/avatar/10.jpg"
                              alt="avatar"
                            />
                          </div>

                          <div className="ms-sm-3 mt-2 mt-sm-0">
                            <h6 className="mb-0">Lori Stevens</h6>
                            <p className="mb-0 small">
                              Ceo and manager of Blogzine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
