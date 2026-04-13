import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import image1 from "../images/אביה הרשיש בית כנסת 1.webp"
import image2 from "../images/אביה הרשיש בית כנסת 2.webp"
import image3 from "../images/אביה תמונות חדשות 3.webp"
import logo from "../images/אביה הרשיש לוגו.webp"

const FirstScreen = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isMobile ? [image2, image1, image3] : [image2, image1];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if (currentSlide >= images.length) {
      setCurrentSlide(0);
    }
  }, [images.length, currentSlide]);

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
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
            />
            <div className={styles.overlay} />
          </div>

          <div className={styles.overlayContainer}>
            <div className={`${styles.textContainer} ${
              index === 0 ? styles.textContainerDark : styles.textContainerLight
            }`}>
              <div className={styles.logoContainer}>
                <img
                  src={logo}
                  alt="אביה הרשיש"
                  className={styles.logo}
                />
              </div>
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
