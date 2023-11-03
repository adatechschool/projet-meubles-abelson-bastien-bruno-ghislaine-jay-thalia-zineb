import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import chaise from '../../src/assets/images/chaise.jpg';
import table_basse from '../../src/assets/images/table_basse.jpg';
import chaise2 from '../../src/assets/images/chaise2.jpg';



const Carroussel = () => {
    return (
        <div id="carrousel">
            <Carousel data-bg-theme="dark">
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        class = "imgSize"
                        src={chaise}
                        alt="First slide"
                    />
                
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={table_basse}
                        alt="Second slide"
                        class = "imgSize"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={chaise2}
                        alt="Third slide"
                        class = "imgSize"
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>




    );

};

export default Carroussel;