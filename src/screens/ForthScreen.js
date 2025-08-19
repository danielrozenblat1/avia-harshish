import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import IconTextComponent from "../components/can/Can";
import styles from "./ForthScreen.module.css";
import withyou from "../Icons/wired-outline-1030-service-alt-hover-pinch.json";
import money from "../Icons/wired-outline-298-coins-hover-jump.json";
import secure from "../Icons/wired-outline-2257-gdpr-hover-pinch.json";
import house from "../Icons/wired-outline-63-home-hover-3d-roll.json";
import time from "../Icons/wired-outline-1334-order-history-hover-pinch.json";
import { Home, FileQuestion, Tools, Brain, FileStack, AlertTriangle, Calculator, HelpCircle } from 'lucide-react';
import FormScreen from "../components/form/FormScreen"
const ForthScreen = () => {
    const [index, setIndex] = useState(0);
    
    const INTRO_TEXTS = [
        "רכשתם דירה מקבלן?",
        "מתכננים בית חדש?",
        "רוצים לשפץ?"
    ];

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex(index => index + 1),
            3000 // Change every 3 seconds
        );
        return () => clearInterval(intervalId);
    }, []);

    return <>
        <div className={styles.container}>
            <div className={styles.introSection}>
                <div className={styles.introBox}>
                    <TextTransition springConfig={presets.wobbly} inline>
                        <span>{INTRO_TEXTS[index % INTRO_TEXTS.length]}</span>
                    </TextTransition>
                </div>
            </div>
            
            <div className={styles.description}>
                אני מבינה בדיוק את החששות שלכם...
            </div>

            <div className={styles.concernsContainer}>
                <div className={styles.concernItem}>
                    <Brain className={styles.icon} />
                    <span>מרגישים מוצפים מכמות ההחלטות שצריך לקבל?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Calculator className={styles.icon} />
                    <span>חוששים מטעויות שיעלו לכם עשרות אלפי שקלים?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <Home className={styles.icon} />
                    <span>מפחדים שהבית לא יראה כמו שדמיינתם?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <FileQuestion className={styles.icon} />
                    <span>לא בטוחים איך להתנהל מול הקבלן?</span>
                </div>
                
                <div className={styles.concernItem}>
                    <HelpCircle className={styles.icon} />
                    <span>מבולבלים מכל המושגים המקצועיים?</span>
                </div>
            </div>

            <div className={styles.notAlone}>
                אתם לא לבד!
            </div>

            <div className={styles.description}>
                כאדריכלית שליוותה מאות משפחות בתכנון ביתם, אני רואה שוב ושוב את אותם
                חששות ופחדים. וזה טבעי - הרי בית בונים פעם אחת, וההשקעה היא עצומה.
            </div>

            <div className={styles.goodNews}>
                אבל.. יש גם בשורות טובות!
            </div>

            <div className={styles.title}>אני כאן כדי</div>

            <div className={styles.row}>
                <IconTextComponent text="להוביל אתכם צעד אחר צעד בתהליך" icon={withyou} />
                <IconTextComponent text="למנוע טעויות יקרות מראש" icon={money} />
                <IconTextComponent text="לתת לכם ביטחון בכל החלטה" icon={secure} />
                <IconTextComponent text="להראות לכם בדיוק איך הבית יראה דרך הדמיות" icon={house} />
                <IconTextComponent text="לחסוך לכם זמן, כסף ועוגמת נפש" icon={time} />
            </div>
        </div>
        <div className={styles.title}>בואו נדבר</div>
        <FormScreen />
    </>
};

export default ForthScreen;