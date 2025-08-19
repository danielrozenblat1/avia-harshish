import React from 'react';
import styles from "./Recommends.module.css";

// Import images
import result3 from "../../images/אביה הרשיש פרוייקט 3.png";
import result4 from "../../images/אביה הרשיש פרוייקט 2.png";
import result5 from "../../images/אביה הרשיש בית כנסת תוצאה 1.png";
import result6 from "../../images/אביה הרשיש בית כנסת תוצאה 2.png";
import result7 from "../../images/אביה הרשיש פרוייקט חדש.png";
import result8 from "../../images/אביה הרשיש פרוייקט חדש 2.png";
import result9 from "../../images/אביה הרשיש פרוייקט חדש 3.png";
import result10 from "../../images/אביה פרוייקטים חדשים 1.png";
import result11 from "../../images/אביה פרוייקטים חדשים 2.png";
import result12 from "../../images/אביה פרוייקטים חדשים 3.png";
import result13 from "../../images/אביה פרוייקטים חדשים 4.png";
import result14 from "../../images/אביה פרוייקטים חדשים 5.png";

import Button from "../button/Button";

const Recommends = () => {
  const images = [
    result5, result6, result7, result8, result9, result3, result4, 
    result10, result11, result12, result13, result14
  ];

  return (
    <>
      <div className={styles.title} id="פרוייקטים">פרוייקטים</div>
      <div className={styles.explain}>החליקו ותהנו</div>
      
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* First group of images */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`אביה הרשיש פרוייקט ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
          
          {/* Second identical group for continuous scrolling */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  className={styles.image}
                  alt={`אביה הרשיש פרוייקט ${index + 1}`}
                  itemProp="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button text="אביה אני רוצה לשמוע עוד" />
    </>
  );
};

export default Recommends;