import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import image1 from "../images/אביה הרשיש בית כנסת 1.png"
import image2 from "../images/אביה הרשיש בית כנסת 2.png"

const FirstScreen = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    image1, image2
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={props.scrolled ? styles.containerP : styles.container}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            currentSlide === index ? styles.activeSlide : styles.inactiveSlide
          }`}
        >
          <div className={styles.imageWrapper}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
            <div className={styles.overlay} />
          </div>
          
          <div className={styles.overlayContainer}>
            <div className={`${styles.textContainer} ${index === 0 ? styles.textContainerDark : styles.textContainerLight}`}>
              <h1 className={`${styles.title} ${index === 0 ? styles.titleLight : styles.titleDark}`}>
                AVIA HARSHISH
                <span className={styles.subtitle}>ARCHITECT</span>
              </h1>
            </div>
          </div>
        </div>
      ))}
      
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              currentSlide === index ? styles.activeIndicator : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FirstScreen;