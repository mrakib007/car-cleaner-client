import React from "react";
import Service1 from "../../../images/service1.jpg";
import Service2 from "../../../images/service2.jpg";
import Service3 from "../../../images/service3.jpg";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Car Cleaning",
    image: Service1,
  },
  {
    name: "Car Servicing",
    image: Service2,
  },
  {
    name: "Car Test Drive",
    image: Service3,
  },
];
const Services = () => {
  return (
    <div>
      <div className="m-3">
        <h3 className="text-center">Services We Provide</h3>
      </div>
      <div className="d-flex justify-content-center">
          <div className="w-15 row container mt-3 pt-5">
              {
                  serviceData.map(service => <ServiceDetail service = {service} key = {service.name}></ServiceDetail>)
              }
          </div>
      </div>
    </div>
  );
};

export default Services;
