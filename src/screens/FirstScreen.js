import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';
import image1 from "../images/אביה הרשיש בית כנסת 1.png"
import image2 from "../images/אביה הרשיש בית כנסת 2.png"
import LoadingEffect from '../components/loader/Loader';
import logo from "../images/אביה הרשיש לוגו.png"

const FirstScreen = (props) => {
 const [currentSlide, setCurrentSlide] = useState(0);
 const [imagesLoaded, setImagesLoaded] = useState(false);

 const images = [image2, image1];

 useEffect(() => {
   const loadImage = (imageSrc) => {
     return new Promise((resolve, reject) => {
       const img = new Image();
       img.src = imageSrc;
       img.onload = resolve;
       img.onerror = reject;
     });
   };

   const timer = setInterval(() => {
     setCurrentSlide((prev) => (prev + 1) % images.length);
   }, 4000);

   Promise.all(images.map(imageSrc => loadImage(imageSrc)))
     .then(() => {
       setImagesLoaded(true);
     })
     .catch((err) => console.error("Error loading images", err));

   return () => clearInterval(timer);
 }, [images.length]);

 if (!imagesLoaded) {
   return <LoadingEffect/>
 }

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