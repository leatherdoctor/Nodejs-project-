import React from 'react';
import "./Game_Card.css"; // Import your CSS file for styling

// Sample images
import img1 from "./imgs/g1.jpg";
import img2 from './imgs/g2.jpeg';
import img3 from "./imgs/img1.jpg";
import img4 from "./imgs/g3.jpg";
import img5 from "./imgs/g7.jpg";
import img6 from "./imgs/g8.png";

const GameCardsCarousel = () => {

  // Function to calculate percentage discount
  const calculateDiscount = (originalPrice, discountedPrice) => {
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discount.toFixed(2); // Return discount percentage rounded to 2 decimal places
  };

  return (
    <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img className="card-img-top" alt="100%x280" src={img1} />
                <div className="card-body">
                  <h4 className="card-title">Far Cry 5</h4>
                  <p className="card-text">
                    <span className="price">$100</span> <span className="discount">$80</span>
                  </p>
                  <p className="card-description">Lorem ipsum dolor s</p>
                  <p className="discount-percent">Discount: {calculateDiscount(100, 80)}%</p>
                </div>
              </div>
            </div>
            {/* Add similar card structures for other games */}
            <div className="col-md-4 mb-3">
              <div className="card">
                <img className="card-img-top" alt="100%x280" src={img2} />
                <div className="card-body">
                  <h4 className="card-title">Grand Theft Auto 5</h4>
                  <p className="card-text">
                    <span className="price">$120</span> <span className="discount">$100</span>
                  </p>
                  <p className="card-description">Description for Game 2 goes here.</p>
                  <p className="discount-percent">Discount: {calculateDiscount(120, 100)}%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img className="card-img-top" alt="100%x280" src={img3} />
                <div className="card-body">
                  <h4 className="card-title">Sekiro : Shadows Die Twice</h4>
                  <p className="card-text">
                    <span className="price">$80</span> <span className="discount">$60</span>
                  </p>
                  <p className="card-description">Description for Game 3 goes here.</p>
                  <p className="discount-percent">Discount: {calculateDiscount(80, 60)}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            {/* Add more cards here */}
            <div className="col-md-4 mb-3">
              <div className="card">
                <img className="card-img-top" alt="100%x280" src={img4} />
                <div className="card-body">
                  <h4 className="card-title">Devil May Cry 5</h4>
                  <p className="card-text">
                    <span className="price">$90</span> <span className="discount">$70</span>
                  </p>
                  <p className="card-description">Description for Game 4 goes here.</p>
                  <p className="discount-percent">Discount: {calculateDiscount(90, 70)}%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img className="card-img-top" alt="100%x280" src={img5} />
                <div className="card-body">
                  <h4 className="card-title">Watch Dogs 2</h4>
                  <p className="card-text">
                    <span className="price">$110</span> <span className="discount">$90</span>
                  </p>
                  <p className="card-description">Description for Game 5 goes here.</p>
                  <p className="discount-percent">Discount: {calculateDiscount(110, 90)}%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img className="card-img-top" alt="100%x280" src={img6} />
                <div className="card-body">
                  <h4 className="card-title">Resident Evil : Village</h4>
                  <p className="card-text">
                    <span className="price">$70</span> <span className="discount">$50</span>
                  </p>
                  <p className="card-description">Description for Game 6 goes here.</p>
                  <p className="discount-percent">Discount: {calculateDiscount(70, 50)}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more carousel items as needed */}
      </div>
      {/* Carousel navigation arrows */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default GameCardsCarousel;
