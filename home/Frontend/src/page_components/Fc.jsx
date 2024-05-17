import React from 'react';
import img1 from "./imgs/Free.jpg";
import "./Free.css"; // Import your CSS file

const Fc = () => {
    // Determine if the game is free
    const isFree = true; // Set to true if the game is free

    // Details about Tomb Raider game
    const gameDetails = [
        "Explore the thrilling world of Tomb Raider, an iconic action-adventure video game series developed by Crystal Dynamics and published by Square Enix.",
        "Immerse yourself in captivating gameplay, solve challenging puzzles, and experience epic storytelling in the Tomb Raider universe.",
        "Unleash your inner adventurer as you follow the fearless archaeologist, Lara Croft, on her quest for ancient artifacts and hidden treasures.",
        "Embark on breathtaking adventures across diverse landscapes, from ancient ruins to treacherous jungles and beyond.",
        "Don't miss out on this limited-time offer! Get Tomb Raider for free and embark on an unforgettable journey today!"
    ];

    return (
        <div className="main-container">
            <div className="container-70">
                <img src={img1} alt="Tomb Raider" className="image" />
            </div>
            <div className="container-30">
                <div className="content">
                    {gameDetails.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                    <div className="cost">
                         <span className="original-price">Rs 2853</span>
                        <span className="discount">Free</span>
                    </div>
                    <button className="buy-now-button">Buy Now</button>
                </div>
            </div>
        </div>
    ); 
}   

export default Fc;
