import React from 'react';
import styles from './Me.module.css';
import ester from "../../images/אביה הרשיש תדמית.png";

const AboutMe = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.header} id="מי אני">קצת עלי</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={ester} alt="אביה הרשיש" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>אביה הרשיש</h1>
          <div className={styles.subtitle}>"הבית זה השקט הנפשי שלך"</div>
          <p className={styles.description}>
            אני זוכרת שנדל"ן תמיד עניין אותי - עוד מגיל קטן כשאמא שלי הייתה עוברת בין בתים. תמיד חיפשתי להביןמ איך הדברים קורים. אדריכלות תמיד קרצה לי, במיוחד התהליך משלב התכנון ועד התוצאה המוגמרת.
          </p>
          <p className={styles.description}>
            במהלך שש השנים האחרונות צברתי ניסיון מקצועי עשיר בתחום, הפרויקט הראשון שלי היה תכנון בית כנסת. מאז אני ממשיכה ללוות משפחות בתכנון הבית שלהם, תוך הקשבה לצרכים ולחלומות שלהם.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;