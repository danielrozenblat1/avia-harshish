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
      title: "שלב ראשון - פגישת היכרות ראשונית",
      content: "תהליך התכנון מתחיל בפגישת היכרות שבה נכיר את המשפחה שלכם, אורח החיים והצרכים המיוחדים שלכם. אשב איתכם לשיחה על החזון לבית,אסביר את תהליך העבודה המלא. המטרה שלי היא ליצור בסיס יציב לתכנון בית שיתאים בדיוק עבורכם."
    },
    {
      number: 2,
      title: "שלב שני - שלב מקדים - במידה וצריך היתר בניה",
      content: "בשלב המקדים אבצע בדיקה מקיפה של כל ההיבטים הטכניים והחוקיים של המגרש שלכם מול הרשויות . נבדוק את זכויות הבנייה, נלמד את התב\"ע והמגבלות, ננתח את אילוצי השטח ומשם נצא לתכנון ראשוני"
    },
    {
      number: 3,
      title: "שלב שלישי - תכנון ראשוני",
      content: "בשלב זה אני מתחילה את התכנון הראשוני של הבית - ממקמת את התוכנית על גבי המדידה, מתכננת את חלוקת החללים הפנימית, ומעצבת את המראה החיצוני. אציג בפניכם מספר חלופות תכנוניות ונבחר יחד את הסקיצה שהכי התחברתם אליה. לאחר בחירת הסקיצה המועדפת, אכין עבורכם הדמיה תלת מימדית שתאפשר לכם לראות בדיוק איך הבית ייראה במציאות, כך שתוכלו להיות בטוחים לחלוטין בבחירה שלכם."
    },
    {
      number: 4,
      title: "שלב רביעי - הגשה לרשויות",
      content: "לאחר אישור הסקיצה, נפנה לאחד משני מסלולים: במקרה שנדרש היתר בנייה, נתחיל בהכנת תיק היתר מקיף והגשתו לרשויות, כולל תיאום מול הגורמים הרלוונטיים ומענה לכל הדרישות עד לקבלת ההיתר. במידה ולא נדרש היתר, נעבור ישירות להכנת תכניות עבודה מפורטות לביצוע."
    },
    {
      number: 5,
      title: "שלב חמישי - תכניות עבודה מפורטות",
      content: "אני אכין עבורכם את כל תכניות העבודה המפורטות לביצוע - כולל פריסות מדויקות לחדרים הרטובים, תכניות ריצוף וחיפוי, תכנון מערכת החשמל המלאה, ופרטי נגרות ואלומיניום. התכניות שאכין יהוו את המפה המדויקת עבור כל בעלי המקצוע בפרויקט"
    },
    {
      number: 6,
      title: "שלב שישי - יועצים ואישורים",
      content: "בשלב זה אני מתאמת את התכנון מול צוות היועצים המקצועיים - מהנדס קונסטרוקציה לתכנון השלד, יועץ אינסטלציה למערכות המים והביוב, ויועץ חשמל לתכנון מערכות החשמל. לאחר קבלת כל התכניות מהיועצים, אבצע בדיקת התאמה מקיפה (סופרפוזיציה) כדי לוודא שכל המערכות משתלבות בצורה מושלמת וללא התנגשויות."
    },
    {
      number: 7,
      title: "שלב שביעי - בחירת חומרים",
      content: "נלווה אתכם בבחירת כל חומרי הגמר לבית שלכם - החל מריצוף וחיפויים, דרך דלתות וחלונות, כלים סניטריים למטבח וחדרי הרחצה, ועד לחומרי הגמר החיצוניים. נדאג שכל הבחירות יתאימו לסגנון העיצובי שהגדרנו, לתקציב ולפונקציונליות הנדרשת"
    },
    {
      number: 8,
      title: "שלב שמיני - פיקוח עליון",
      content: "אני אבצע ביקורים מתוזמנים באתר הבנייה שלכם, אוודא שהעבודות מתבצעות בהתאם לתכניות ולסטנדרטים הגבוהים ביותר, ואספק פתרונות מקצועיים לכל בעיה שעולה בשטח. המטרה שלי היא להבטיח שהבית שלכם ייבנה בדיוק כפי שתוכנן."
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
          תהליך העבודה שלנו
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
    </div>
  );
};

export default Timeline;