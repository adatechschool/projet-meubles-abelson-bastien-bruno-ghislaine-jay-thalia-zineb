import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import chaise from '../../src/assets/images/chaise.jpg';
import table_basse from '../../src/assets/images/table_basse.jpg';
import chaise2 from '../../src/assets/images/chaise2.jpg';



const Carroussel = () => {
    return (
        <div id="carrousel" style={{ width:"20%",margin: "0 auto" }}>
            <Carousel data-bs-theme="dark">
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={chaise}
                        alt="First slide"

                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={table_basse}
                        alt="Second slide"

                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={chaise2}
                        alt="Third slide"

                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>




    );

};

export default Carroussel;