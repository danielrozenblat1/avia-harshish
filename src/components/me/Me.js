import React, { useRef, useEffect, useState } from 'react';
import styles from './Me.module.css';
import aviaImage from "../../images/אביה הרשיש תדמית.webp";
import projectImage1 from "../../images/אביה תמונות חדשות 6.webp";
import projectImage2 from "../../images/אביה תמונות חדשות 2.webp";

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  const imageRef = useRef(null);
  const headerRef = useRef(null);
  const storyRef = useRef(null);

  const parallax1Ref = useRef(null);
  const parallax2Ref = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const parallaxElements = [parallax1Ref.current, parallax2Ref.current];
      parallaxElements.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const translateY = (scrollProgress - 0.5) * 80;
          const img = el.querySelector('img');
          if (img) {
            img.style.transform = `translateY(${translateY}px)`;
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const elements = [imageRef, headerRef, storyRef];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const ParallaxDivider = React.forwardRef(({ image, alt }, ref) => (
    <div className={styles.parallaxDivider} ref={ref}>
      <img src={image} alt={alt} className={styles.parallaxImage} loading="lazy" decoding="async" />
      <div className={styles.parallaxOverlay} />
    </div>
  ));

  const RegularDivider = () => (
    <div className={styles.divider}>
      <span className={styles.dividerDot}></span>
    </div>
  );

  return (
    <div className={styles.profileSection} id="מי אני">
      <div className={`${styles.decorCorner} ${styles.topRight}`}></div>
      <div className={`${styles.decorCorner} ${styles.bottomLeft}`}></div>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={`${styles.imageSection} ${styles.fadeInLeft}`} ref={imageRef}>
            <div className={styles.imageFrame}>
              <div className={styles.profileImage}>
                <img src={aviaImage} alt="אביה הרשיש" className={styles.profilePhoto} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.textSection}>

            <div className={`${styles.headerSection} ${styles.fadeInRight}`} ref={headerRef}>
              <span className={styles.greeting}>קצת עליי</span>
              <h1 className={styles.name}>אביה הרשיש</h1>
              <p className={styles.quote}>
                "הבית זה השקט הנפשי שלך"
              </p>
            </div>

            <div className={`${styles.story} ${styles.fadeInUp}`} ref={storyRef}>
              <p>
                מגיל מאוד צעיר אני זוכרת את עצמי מסתובבת ב<span className={styles.highlight}>אתרי בנייה</span>. אחד הזיכרונות הראשונים והמשמעותיים שלי הוא ללוות את אמא שלי כשהיא רכשה את הבית שלנו מהקבלן  שם התחילה ה<span className={styles.highlight}>סקרנות</span> שלי, הרצון להבין, לשאול ולהיות חלק מהדרך.
              </p>

              {isMobile ? (
                <ParallaxDivider ref={parallax1Ref} image={projectImage1} alt="פרויקט של אביה הרשיש" />
              ) : (
                <RegularDivider />
              )}

              <p>
                עם השנים הבנתי שהתחום הזה דורש הרבה מעבר לעין אסתטית. הוא מחייב <span className={styles.highlight}>ידע, ביטחון ויכולת לעמוד על שלך</span> - להכיר תקנים, להבין זכויות, לדעת מה מגיע ללקוח ועל מה צריך להתעקש. העבודה מול רשויות, קבלנים ובעלי מקצוע דורשת הבנה עמוקה של כל שלב בתהליך. אני תמיד אומרת: <span className={styles.highlight}>"מה שלא יודעים - לא יודעים, עד שמגלים"</span>, וכואב לי לראות לקוחות שמגלים ליקויים רק אחרי שהם כבר נכנסים לבית.
              </p>

              <RegularDivider />

              <p>
                החיבור שלי לתחום משלב <span className={styles.highlight}>פרפקציוניזם ואהבה אמיתית לאסתטיקה ולאנשים</span>. בסופו של דבר, אדריכל הוא גם קצת כמו מטפל זוגי  הוא מלווה אתכם לאורך תהליך מורכב, עם לא מעט אתגרים בדרך. לכן חשוב לעבור את הדרך הזו עם מישהו שיש איתו <span className={styles.highlight}>חיבור אישי ואמון</span>.
              </p>

              {isMobile ? (
                <ParallaxDivider ref={parallax2Ref} image={projectImage2} alt="פרויקט של אביה הרשיש" />
              ) : (
                <RegularDivider />
              )}

              <p>
                <span className={styles.highlightStrong}>קצת עליי </span> גדלתי ב<span className={styles.highlight}>אפרת שבגוש עציון</span>, שירתתי כ<span className={styles.highlight}>מש"קית ת"ש</span> בצבא, וכיום אני נשואה ו<span className={styles.highlight}>אמא לשלושה ילדים</span>.
              </p>

              <RegularDivider />

              <p>
                אני מבינה שבניית בית היא <span className={styles.highlight}>אחת ההחלטות הכלכליות והרגשיות המשמעותיות בחיים</span>. לכן חשוב לי ללוות אתכם באופן אישי ומקצועי לאורך כל הדרך משלב התכנון הראשוני, דרך התנהלות נכונה מול הקבלן ושינויי הדיירים, ועד ל<span className={styles.highlight}>חיסכון בעלויות ושמירה על האינטרסים שלכם</span>.
              </p>

              <p className={styles.closingLine}>
                <span className={styles.highlightStrong}>אני כאן כדי לוודא שתיכנסו לבית שלכם בראש שקט  ובלב שלם.</span>
              </p>
            </div>

            <div className={styles.ctaContainer}>
              <a
                href="https://wa.me/972522605557?text=היי%20אביה%20הגעתי%20מהדף%20שלך%20אשמח%20לשמוע%20עוד%20על.."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
                style={{ textDecoration: 'none' }}
              >
                <span>בואו נדבר</span>
                <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
