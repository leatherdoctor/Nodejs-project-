import React, { useEffect, useRef } from 'react';
import img1 from "./imgs/1.jpg";
import img2 from './imgs/2.jpg';
import img3 from "./imgs/img1.jpg";
import img4 from "./imgs/img7.png";
import img5 from "./imgs/img8.jpg";
import "./SC.css"; // Import your CSS file

const SC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger the next slide event
      const nextButton = document.querySelector('.carousel-control-next');
      if (nextButton) nextButton.click();
    }, 3000); // Change 3000 to the desired interval in milliseconds

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Unparalleled Gaming Performance with Intel Processors</h5>
            <p>Experience unparalleled gaming performance with Intel processors. Powering some of the most immersive gaming experiences, Intel CPUs deliver exceptional speed, responsiveness, and reliability. Whether you're into competitive eSports or exploring vast open worlds, Intel processors ensure smooth gameplay and uncompromising performance.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Elevate Your Gaming Experience with NVIDIA GeForce Graphics Cards</h5>
            <p>Elevate your gaming experience with NVIDIA GeForce graphics cards. Renowned for their cutting-edge technology and unmatched graphics performance, NVIDIA GPUs deliver stunning visuals and fluid gameplay. From realistic lighting effects to smooth frame rates, NVIDIA graphics cards set the standard for immersive gaming.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Next-Level Gaming with AMD Ryzen Processors and Radeon Graphics</h5>
            <p>Immerse yourself in the next level of gaming with AMD Ryzen processors and Radeon graphics. Designed for gamers, AMD hardware offers powerful multitasking capabilities and superior graphics performance. With AMD, you'll enjoy seamless gaming experiences and unlock new levels of creativity and productivity.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>The Ultimate Gaming Ecosystem with ASUS ROG</h5>
            <p>Discover the ultimate gaming ecosystem with ASUS ROG (Republic of Gamers). From high-performance gaming laptops and desktops to innovative peripherals and accessories, ASUS ROG provides everything you need to dominate the competition. Engineered for gamers by gamers, ASUS ROG products combine cutting-edge technology with stunning design for unrivaled gaming experiences.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SC;
