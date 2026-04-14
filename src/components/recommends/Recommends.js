import React from 'react';
import styles from "./Recommends.module.css";

// Import images (webp for performance)
import result3 from "../../images/אביה הרשיש פרוייקט 3.webp";
import result4 from "../../images/אביה הרשיש פרוייקט 2.webp";
import result5 from "../../images/אביה הרשיש בית כנסת תוצאה 1.webp";
import result6 from "../../images/אביה הרשיש בית כנסת תוצאה 2.webp";
import result7 from "../../images/אביה הרשיש פרוייקט חדש.webp";
import result8 from "../../images/אביה הרשיש פרוייקט חדש 2.webp";
import result9 from "../../images/אביה הרשיש פרוייקט חדש 3.webp";
import result10 from "../../images/אביה פרוייקטים חדשים 1.webp";
import result14 from "../../images/אביה פרוייקטים חדשים 5.webp";
import newResult1 from "../../images/אביה תמונות חדשות 1.webp";
import newResult2 from "../../images/אביה תמונות חדשות 2.webp";
import newResult3 from "../../images/אביה תמונות חדשות 3.webp";
import newResult4 from "../../images/אביה תמונות חדשות 4.webp";
import newResult5 from "../../images/אביה תמונות חדשות 5.webp";
import newResult6 from "../../images/אביה תמונות חדשות 6.webp";
import newResult7 from "../../images/אביה תמונות חדשות 7.webp";

const Recommends = () => {
  const images = [
    newResult6, newResult7,
    newResult1, newResult2, newResult3, newResult4, newResult5,
    result5, result6, result7, result8, result9, result3, result4,
    result10, result14
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
                  loading="lazy"
                  decoding="async"
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
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Recommends;
