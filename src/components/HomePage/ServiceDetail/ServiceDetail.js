import React from "react";
import { Button, Card } from "react-bootstrap";
import './ServiceDetail.css';

const ServiceDetail = (props) => {
  const { image, name } = props.service;
  return (
    <div className="col-md-4 text-center">
      <Card style={{ width: "18rem" }} className="mt-3 service-info">
        <Card.Img variant="top" src={image} />
        <Card.Body style={{ background: "#dadfe1" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
