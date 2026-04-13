import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Questions.module.css';
import aviaAvatar from '../../images/אביה הרשיש תדמית.webp';

function TypingIndicator() {
  return (
    <div className={styles.typingDots}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
}

const faqs = [
  {
    q: 'קניתי דירה מקבלן - למה אני צריכה אדריכלית?',
    a: 'דירת קבלן היא תכנון סטנדרטי שלא תמיד מותאם אליכם. אני עוברת איתכם על התכניות (חשמל, מים ובינוי), משדרגת ומדייקת את הדירה לצרכים שלכם כבר בשלב התשתיות - כדי למנוע טעויות יקרות ולהוציא את המקסימום מהבית שלכם.',
  },
  {
    q: 'אם אני רוצה לשפץ - האם אני חייב היתר בנייה?',
    a: 'זה תלוי בסוג השיפוץ. אם מדובר בשיפוץ פנימי בלבד, בלי שינוי בחזיתות (חלונות, פתחים, דלתות) ובלי תוספת שטח או קומה - לרוב אין צורך בהיתר בנייה. במקרים שכן משנים את המבנה החיצוני או מוסיפים שטח - כן נדרש היתר.',
  },
  {
    q: 'למה חשוב לעשות הדמיות?',
    a: 'הדמיות מצמצמות את חוסר הוודאות ונותנות לכם תמונה ברורה של איך הבית ייראה בסוף. הן מאפשרות להבין את התכנון בצורה מוחשית, לראות את הבחירות שעשינו, ולקבל החלטות מדויקות יותר - גם בעיצוב הפנים וגם בחוץ הבית.',
  },
  {
    q: 'קניתי דירת קבלן ואני רוצה לעשות תוספת בנייה - אפשר כבר עכשיו?',
    a: 'לא. אי אפשר להוציא היתר בנייה לפני קבלת טופס 4 ואכלוס הדירה. רק לאחר מכן ניתן להתחיל תהליך מול הרשות ולהיכנס שוב לשיפוץ. מה כן עושים בשלב שינויי דיירים? מכינים את התשתיות מראש (חשמל, מים וכו\') כדי להקל ולחסוך בעלויות כשיגיע הזמן לבצע את התוספת.',
  },
  {
    q: 'איזה בעלי מקצוע אני צריכה לצורך הוצאת היתר בנייה?',
    a: 'לצורך הוצאת היתר בנייה תצטרכו מספר בעלי מקצוע מרכזיים: מודד מוסמך שיבצע מדידה עדכנית (בתוקף של עד חצי שנה), מהנדס שילווה את הפרויקט, ואדריכל שיתכנן ויגיש את הבקשה להיתר.',
  },
  {
    q: 'האם את מתעסקת עם כל האישורים?',
    a: 'כן. האדריכל מנהל את כל התהליך מול היועצים והרשויות, ומלווה אתכם עד לקבלת היתר הבנייה.',
  },
  {
    q: 'מה זה תוכניות לביצוע ומה מקבלים בפועל?',
    a: 'תוכניות לביצוע שונות מתוכניות להיתר - הן מפורטות הרבה יותר ויורדות לרמת הפרטים הקטנים, כדי שהקבלן יוכל לעבוד בצורה מדויקת בשטח. במסגרת התוכניות תקבלו: תוכנית אדריכלית, תוכנית חשמל, תוכנית אינסטלציה, פריסות לחדרי רחצה, תוכנית ריצוף, תוכנית בנייה והריסה, רשימת אלומיניום ופרטי נגרות.',
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [typingIndex, setTypingIndex] = useState(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    };
  }, []);

  const handleQuestionClick = useCallback((i) => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    if (openIndex === i) {
      setOpenIndex(null);
      setTypingIndex(null);
      return;
    }

    setOpenIndex(null);
    setTypingIndex(i);

    typingTimeoutRef.current = setTimeout(() => {
      setTypingIndex(null);
      setOpenIndex(i);
    }, 800);
  }, [openIndex]);

  const handleCtaClick = () => {
    const phoneNumber = "972522605557";
    const message = "היי אביה, הגעתי מהדף שלך ואשמח לשמוע עוד על..";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section className={styles.faq} id="שאלות תשובות">
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            שאלות <em className={styles.em}>נפוצות</em>
          </h2>
          <p className={styles.subtitle}>ריכזתי כאן את השאלות שאני נשאלת הכי הרבה - אז כל התשובות כאן</p>
          <p className={styles.description}>לחצו על כל שאלה והתשובה תיפתח</p>
        </div>

        <div className={styles.chatFrame}>
          <div className={styles.messagesArea}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.messageGroup}>
                <div className={styles.questionRow}>
                  <button
                    className={`${styles.questionBubble} ${openIndex === i ? styles.questionBubbleActive : ''}`}
                    onClick={() => handleQuestionClick(i)}
                  >
                    {faq.q}
                  </button>
                </div>

                {(typingIndex === i || openIndex === i) && (
                  <div className={`${styles.answerRow} ${styles.answerEnter}`}>
                    <img src={aviaAvatar} alt="" className={styles.aviaAvatar} loading="lazy" />
                    <div className={styles.answerBubble}>
                      {typingIndex === i ? <TypingIndicator /> : <p>{faq.a}</p>}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className={styles.ctaMessageGroup}>
              <div className={styles.answerRow}>
                <img src={aviaAvatar} alt="" className={styles.aviaAvatar} loading="lazy" />
                <div className={styles.ctaBubble}>
                  <p className={styles.ctaText}>יש לכם עוד שאלות? אני כאן</p>
                  <button
                    className={styles.ctaButton}
                    onClick={handleCtaClick}
                  >
                    <span>בואו נדבר</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
