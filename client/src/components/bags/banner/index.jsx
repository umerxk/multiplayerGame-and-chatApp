import React from "react";
import { Carousel } from "react-bootstrap";

export default function index() {
  return (
    <div className="mt-2 d-lg-block d-none">
      <Carousel variant="dark" fade={true}>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="gray.png" alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-dark">First slide label</h3>
            <p className="text-dark">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="gray.png" alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-dark">Second slide label</h3>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="gray.png" alt="First slide" />

          <Carousel.Caption>
            <h3 className="text-dark">Third slide label</h3>
            <p className="text-dark">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
