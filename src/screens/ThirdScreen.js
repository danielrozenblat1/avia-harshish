import { useEffect, useRef } from "react";
import styles from "./ThirdScreen.module.css";
import Button from "../components/button/Button";

import img1 from "../images/אביה תמונות חדשות 3.webp";
import img2 from "../images/אביה תמונות חדשות 1.webp";
import img3 from "../images/אביה תמונות חדשות 4.webp";
import img4 from "../images/אביה תמונות חדשות 7.webp";

const cardsData = [
  {
    title: "תכנון קפדני ואפיון מעמיק",
    desc: "לפני שהתהליך מתחיל, יושבים ומבינים מי אתם, איך נראה היום שלכם ומה באמת חשוב לכם בבית. כל צורך, העדפה והרגל יומיומי הופכים לחלק מהתוכנית - ככה שהבית שתקבלו לא רק ייראה טוב, אלא ירגיש שלכם מהרגע הראשון.",
    image: img1,
  },
  {
    title: "100% ודאות לגבי התוצאה הסופית",
    desc: "עוד לפני שהעבודה מתחילה אתם מקבלים הדמיות ריאליסטיות שמראות לכם בדיוק איך הבית הולך להיראות. אתם רואים את החומרים, הצבעים ואפילו את התאורה והריהוט במקום - בלי ניחושים.",
    image: img2,
  },
  {
    title: "אפס חריגות בתקציב",
    desc: "התקציב שלכם מתוכנן ומנוהל בצורה שלא משאירה מקום לטעויות או חריגות. כל החלטה נבחנת כלכלית יחד אתכם לפני שהיא יוצאת לפועל - ככה שאין הפתעות במהלך הדרך.",
    image: img3,
  },
  {
    title: "טעויות יקרות שנמנעות מראש",
    desc: "תכנון נכון הוא בדיוק המקום לוודא שכל הטעויות נמנעות כשהן עוד על הנייר - מיקום חלונות, תכנון מטבח, נקודות חשמל, פתרונות אחסון. כשהכל נבדק ומדויק מראש, אין הפתעות יקרות בשטח.",
    image: img4,
  },
];

const ThirdScreen = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = sectionRef.current?.querySelectorAll(`.${styles.revealItem}`) || [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.blueprintBg} aria-hidden="true" />

      <div className={styles.sectionHeader}>
        <h2 className={`${styles.title} ${styles.revealItem}`}>
          למה חשוב ליווי אדריכלי בתכנון הבית שלך
        </h2>
      </div>

      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <article
              key={card.title}
              className={`${styles.bpCard} ${isReversed ? styles.bpCardReversed : ""} ${styles.revealItem}`}
            >
              <div className={styles.cardFrame}>
                <span className={`${styles.cornerMark} ${styles.cornerTL}`} aria-hidden="true" />
                <span className={`${styles.cornerMark} ${styles.cornerTR}`} aria-hidden="true" />
                <span className={`${styles.cornerMark} ${styles.cornerBL}`} aria-hidden="true" />
                <span className={`${styles.cornerMark} ${styles.cornerBR}`} aria-hidden="true" />
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
              <div className={styles.cardImage}>
                <img src={card.image} alt="" loading="lazy" decoding="async" />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>
            </article>
          );
        })}
      </div>

      <div className={`${styles.ctaWrap} ${styles.revealItem}`}>
        <Button text="אביה, אני רוצה לשמוע ממך פרטים!" />
      </div>
    </section>
  );
};

export default ThirdScreen;
