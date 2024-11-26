import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import styles from './Steps.module.css';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "ייעוץ ותיאום ציפיות",
      content: "בפגישות היכרות אנחנו נבין בדיוק מה אתם מחפשים ואיך אתם מדמיינים את הבית החדש שלכם וכמובן נתחיל להבין מה זה מצריך "
    },
    {
      number: 2,
      title: "בדיקה מול המועצה/מול העירייה זכויות בנייה",
      content: "בדיקת זכויות הבנייה והאפשרויות העומדות בפנינו מול הרשויות."
    },
    {
      number: 3,
      title: "תכנית מדידה של הבית",
      content: "כדי שאבין את גבולות הבית ואת תחומי הפעולה שלי זה השלב שאני מקבלת את תכניות המדידה של הבית שלכם"
    },
    {
      number: 4,
      title: "הגשת מדידה למועצה",
      content: "יש לנו עד חצי שנה להגיש למועצה את המדידה לאישור מדידה ולהתחיל בעבודה!"
    },
    {
      number: 5,
      title: "סקיצה ראשונית",
      content: "אתם מקבלים ממני 3 סקיצות ראשוניות, בוחרים אחת ועוברים על התיקונים השינויים כדי שנדייק את התכנון"
    },
    {
      number: 6,
      title: "מודל תלת מימד",
      content: "שלב שאני שמה דגש עליו!  אתם מקבלים ממני מודל תלת מימדי של הבית שתוכלו לראות איך הוא נראה גם מבפנים ולקבל וודאות לגבי כל הבית שלכם ולראות את שתי החזיתות של הבית - מבחוץ ומבפנים"
    },
    {
      number: 7,
      title: "הגשת גרמושקה",
      content: "מגישים גרמושקה למועצה/עיריה"
    },
    {
      number: 8,
      title: "תכניות עבודה",
      content: "מכינים תכניות לקבלן ,שולחים לו ומזל טוב! הבית שלכם קרוב מתמיד"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} id="תהליך העבודה איתי">
      <div className={styles.content}>
        <h2 className={styles.title}>
          מהתכנון ועד התוצאה ב-8 שלבים פשוטים..
        </h2>
        
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
              >
                {visibleSteps.has(step.number) && activeStep > step.number ? (
                  <Check className={styles.checkIcon} />
                ) : (
                  <span className={styles.numberText}>{step.number}</span>
                )}
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* <div 
        className={styles.scrollProgress}
        style={{
          width: `${scrollProgress * 100}%`
        }}
      /> */}
    </div>
  );
};

export default Timeline;