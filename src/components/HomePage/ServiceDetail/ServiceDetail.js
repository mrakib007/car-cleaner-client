import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ServiceDetail.css';

const ServiceDetail = (props) => {
  const { _id,title,service,imageURL,amount } = props.services;
  return (
    <div className="col-md-4 text-center">
      <Card style={{ width: "18rem" }} as={Link} to={`book/${_id}`} className="mt-3 service-info">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body style={{ background: "#dadfe1" }}>
          <Card.Title>{title}</Card.Title>
          <h6>Price: {amount}</h6>
          <Card.Text>
            {service}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
