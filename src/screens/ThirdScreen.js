import styles from "./ThirdScreen.module.css"

import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
import ScrollReveal from "scrollreveal"
import money from "../Icons/wired-lineal-414-money-bag-dollar-hover-shake (1).json"
import birocration from "../Icons/wired-lineal-56-document-hover-swipe.json"
import wrong from "../Icons/wired-lineal-1140-error-hover-enlarge.json"
import withyou from "../Icons/wired-lineal-456-handshake-deal-hover-pinch.json"
import organize from "../Icons/wired-lineal-12-layers-hover-slide.json"
import Button from "../components/button/Button"
const ThirdScreen=()=>{

    
    const playerRef1=useRef()
    const playerRef2=useRef()
    const playerRef3=useRef()
    const playerRef4=useRef()
    const playerRef5=useRef()
    
    useEffect(()=>{
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        ScrollReveal().reveal(`.${styles.section}`, {
            duration: 1000,
            distance: "30px",
            origin: "right",
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        ScrollReveal().reveal(`.${styles.stepHeader}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-in-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();    
        playerRef5.current?.playFromBeginning();  
    },[])

    return <>
        <div className={styles.title}>למה חשוב ליווי אדריכלי בתכנון הבית שלך</div>

        <div className={styles.bigWrapper}>
            <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.icons}>
                    <Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={wrong} />
                </div>
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">מניעה מטעויות יקרות</div>
                    <div className={styles.section} itemprop="description">ליווי מקצועי מונע טעויות תכנון יקרות ומיותרות. אני מזהה בעיות פוטנציאליות מראש ומציעה פתרונות חכמים שחוסכים זמן וכסף בטווח הארוך</div>
                </div>
            </div>

            <div className={styles.step} itemscope itemtype="https://schema.org/Product">
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">בירוקרטיות מול הרשויות</div>
                    <div className={styles.section} itemprop="description">מלווה אתכם בכל התהליכים הבירוקרטיים מול הרשויות. מטפלת בהיתרים, אישורים ותיאומים נדרשים כדי להבטיח שהפרויקט יתקדם בצורה חלקה ועל פי החוק</div>
                </div>
                <div className={styles.icons}>
                    <Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={birocration} />
                </div>
            </div>

            <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.icons}>
                    <Player ref={playerRef3} size="100%" onComplete={() =>playerRef3.current?.playFromBeginning()} icon={organize} />
                </div>
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">תכנון וסדר</div>
                    <div className={styles.section} itemprop="description">יוצרת תכנון מדויק ומסודר של החלל שלכם. מתייחסת לכל הפרטים הקטנים כדי ליצור מרחב פונקציונלי ואסתטי שמתאים בדיוק לצרכים ולסגנון החיים שלכם</div>
                </div>
            </div>

            <div className={styles.step} itemscope itemtype="https://schema.org/Organization">
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">ליווי בכל התהליך</div>
                    <div className={styles.section} itemprop="description">מלווה אתכם צעד אחר צעד לאורך כל הדרך. מהתכנון הראשוני ועד לביצוע הסופי, אני כאן כדי לייעץ, להדריך ולוודא שהתוצאה הסופית תהיה בדיוק כפי שחלמתם</div>
                </div>
                <div className={styles.icons}>
                    <Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()} icon={withyou} />
                </div>
            </div>

            <div className={styles.step} itemscope itemtype="https://schema.org/Course">
                <div className={styles.icons}>
                    <Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()} icon={money} />
                </div>
                <div className={styles.text}>
                    <div className={styles.stepHeader} itemprop="name">חיסכון בזמן וכסף</div>
                    <div className={styles.section} itemprop="description">ניסיון מקצועי וידע נרחב מאפשרים לי לחסוך לכם זמן וכסף יקרים. אני מייעלת את התהליך ומונעת טעויות יקרות שעלולות להתגלות מאוחר יותר</div>
                </div>
            </div>
        </div>
        <Button text="אביה, אני רוצה לשמוע ממך פרטים!"/>
    </>
}

export default ThirdScreen