import React from "react";
import Image from "next/image";

function Clinets(props) {
  const client_images = [
    {
      url: process.env.IMAGE_PATH + "/assets/images/client/01.svg",
    },
    {
      url: process.env.IMAGE_PATH + "/assets/images/client/02.svg",
    },
    {
      url: process.env.IMAGE_PATH + "/assets/images/client/03.svg",
    },
    {
      url: process.env.IMAGE_PATH + "/assets/images/client/04.svg",
    },
  ];

  return (
    <div className="row">
      <div className="col-md-6 col-xl-7 mb-5 mb-md-0">
        <p className="mb-0">
          <i className="bi bi-shield-check"></i> | We believe in going above and
          beyond to exceed. We reached <b className="text-primary fs-6">19k</b>
        </p>

        <div className="swiper mt-2 mt-md-4">
          <div className="swiper-wrapper d-flex align-items-center">
            {client_images.map((image, index) => (
              <div key={index} className="swiper-slide">
                <Image
                  src={image.url}
                  className="px-3 ps-0"
                  alt="client-img"
                  width={"160"}
                  height={"27"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-5 col-xl-3 ms-auto text-md-end">
        <p className="mb-0 me-2">
          Trusted by Customers <span className="badge bg-dark">Active</span>
        </p>

        <div className="d-flex justify-content-md-end mt-2 mt-md-4">
          <div>
            <div className="d-flex justify-content-md-end">
              <h4
                className="purecounter mb-0"
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-delay="300"
              >
                0
              </h4>
              <span className="h4 mb-0">k+</span>
            </div>
            <p className="mb-0">Active users</p>
          </div>

          <div className="vr mx-3 mx-sm-4"></div>

          <div>
            <div className="d-flex justify-content-md-end">
              <h4
                className="purecounter mb-0"
                data-purecounter-start="0"
                data-purecounter-end="56"
                data-purecounter-delay="300"
              >
                0
              </h4>
              <span className="h4 mb-0">+</span>
            </div>
            <p className="mb-0">Completed projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clinets;
