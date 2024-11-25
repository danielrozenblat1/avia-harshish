import FAQItem from "../components/questions/Questions"
import styles from "./SecondScreen.module.css"

const SecondScreen=()=>{


    return <>
<div className={styles.title} id="שאלות תשובות">פרטים שבטוח רציתם לדעת</div>
<FAQItem question="כמה זמן לוקח כל התהליך?" answer="כחצי שנה"/>
<FAQItem question="כמה זמן לוקח כל התהליך?" answer="כחצי שנה"/>
<FAQItem question="כמה זמן לוקח כל התהליך?" answer="כחצי שנה"/>
    </>
}
export default SecondScreen