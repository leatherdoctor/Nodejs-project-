import React from 'react';
import styles from './ScrollerContainer.module.css'; // Import CSS module
import img1 from "./imgs/g1.jpg";
import img2 from './imgs/g2.jpeg';
import img3 from "./imgs/img1.jpg";
import img4 from "./imgs/g3.jpg";
import img5 from "./imgs/g7.jpg";
import img6 from "./imgs/g8.png";
import img7 from "./imgs/g4.jpg";
import img8 from "./imgs/g5.jpg";
import img9 from "./imgs/g6.jpeg";



const Card = ({ id, imageUrl, title, content, name }) => (
  <div className={styles.card} key={id}>
    <div className={styles.cardImage}>
      <img src={imageUrl} alt={`Image${id}`} />
    </div>
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{name}</p>
    </div>
  </div>
);

const ScrollerContainer = () => (
  <div className={styles.scrollerContainer}>
    <h2 className={styles.heading}>Hello Aayush ! Your Todays recommendations are</h2>
    <div className={styles.cardsWrapper}>
      <div className={styles.cardList}>
        {/* Duplicate the Card component */}
        <Card id={1} imageUrl={img1} title="Card 1" content="This is the content of Card 1" name="Name 1" />
        <Card id={2} imageUrl={img2} title="Card 2" content="This is the content of Card 2" name="Name 2" />
        <Card id={3} imageUrl={img3} title="Card 3" content="This is the content of Card 3" name="Name 3" />
        <Card id={4} imageUrl={img4} title="Card 4" content="This is the content of Card 4" name="Name 4" />
        <Card id={5} imageUrl={img5} title="Card 5" content="This is the content of Card 5" name="Name 5" />
        <Card id={6} imageUrl={img6} title="Card 6" content="This is the content of Card 6" name="Name 6" />
        <Card id={7} imageUrl={img7} title="Card 7" content="This is the content of Card 7" name="Name 7" />
        <Card id={8} imageUrl={img8} title="Card 8" content="This is the content of Card 8" name="Name 8" />
        <Card id={9} imageUrl={img9} title="Card 9" content="This is the content of Card 9" name="Name 9" />
      </div>
    </div>
  </div>
);

export default ScrollerContainer;
