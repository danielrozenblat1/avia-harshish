import FAQItem from "../components/questions/Questions"
import styles from "./SecondScreen.module.css"

const SecondScreen = () => {
    return <>
        <div className={styles.title} id="שאלות תשובות">פרטים שבטוח רציתם לדעת</div>
        <FAQItem 
            question="כמה זמן לוקח תהליך תכנון דירה?" 
            answer="תהליך תכנון מלא לוקח בממוצע כ-6-8 שבועות, כולל פגישות, הכנת תכניות, הדמיות ותיקונים. התהליך תלוי בגודל הפרויקט ומורכבותו."
        />
        <FAQItem 
            question="מה כולל התהליך התכנוני?" 
            answer="התהליך כולל פגישת אפיון צרכים, הכנת תכנית ראשונית, במידת הצורך הגשה לרשויות ,הדמיות תלת מימד, תכניות עבודה מפורטות, פריסות חדרים רטובים, ותכניות חשמל."
        />
        <FAQItem 
            question="למה לי לקחת אדריכל ולא לתת למעצבת או קבלן שיכינו לי תוכנית ?" 
            answer="כן, תכנון מקצועי חוסך טעויות יקרות, מייעל את השימוש בחלל, ומונע בזבוז של זמן וכסף בתיקונים."
        />
        <FAQItem 
            question="מתי הזמן האידיאלי להתחיל תכנון שינויי דיירים?" 
            answer="מומלץ להתחיל מיד אחרי חתימת החוזה עם הקבלן, כי יש מגבלות זמן לביצוע שינויים."
        />
        <FAQItem 
            question="מה מותר ומה אסור בשינויי דיירים?" 
            answer="תלוי בקבלן וחוזה הרכישה. בדרך כלל אסור לשנות עמודים נושאים ותשתיות ראשיות, אבל ניתן לשנות מחיצות פנים, מיקומי כלים סניטריים ונקודות חשמל"
        />
        <FAQItem 
            question="למה חשוב לקבל הדמיות?" 
            answer="הדמיות מאפשרות לראות איך הבית ייראה לפני הביצוע, מונעות טעויות והפתעות, ועוזרות לקבל החלטות תכנוניות טובות יותר."
        />
        <FAQItem 
            question="כמה זמן תכנון צריך להקדיש לפני שמתחילים שיפוץ?" 
            answer="מומלץ להקדיש 2-3 חודשים לתכנון מפורט לפני תחילת השיפוץ. תכנון מוקדם מונע טעויות ועיכובים במהלך הביצוע."
        />
        <FAQItem 
            question="האם אפשר לשנות תכנון במהלך הביצוע?" 
            answer="אפשרי אבל לא מומלץ. שינויים במהלך ביצוע יקרים יותר ועלולים לגרום לעיכובים משמעותיים."
        />
        <FAQItem 
            question="איך מחשבים נכון תקציב לפרויקט?" 
            answer="מוסיפים 20% לתקציב המתוכנן עבור הפתעות, מפרטים כל הוצאה, כוללים עלויות נלוות כמו פינוי פסולת והובלות."
        />
    </>
}

export default SecondScreen