import FAQItem from "../components/questions/Questions"
import styles from "./SecondScreen.module.css"

const SecondScreen=()=>{
    return <>
<div className={styles.title} id="שאלות תשובות">פרטים שבטוח רציתם לדעת</div>
<FAQItem question="אני רוצה לשפץ את הבית אבל יש לי חריגת בנייה,האם אני אצטרך להרוס את החריגה?" answer=""/>
<FAQItem question="כמה זמן לוקח תהליך ליווי איתך מקצה לקצה?" answer="מרגע התכנון עד רגע הביצוע - אני איתך במאה אחוז"/>
<FAQItem question="קניתי דירה מקבלן, איך את יכולה לעזור לי?" answer="אני יכולה לעזור לך בכל מה שקשור לשינוי אכלוס דיירים,תכנון הבית,ליווי אדריכלי מלא."/>
    </>
}
export default SecondScreen