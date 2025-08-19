import { useRef, useState } from 'react';
import styles from './FormScreen.module.css';
import PrivacyPolicy from '../privacy/Privacy';

const FormScreen = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const nameRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
  const reasonRef = useRef('');
  const webhookUrl = "https://hook.eu2.make.com/h8noe5ahyibi2ie9i6jy9u6ir2d5v3hd";
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "aviarc100@gmail.com";

  // פונקציה שמונעת מהטופס להגיב על קליק בקישור
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const submitHandler = async(e) => {
      e.preventDefault();

      // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
      if (!agreed) {
        alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
        return;
      }

      const name = nameRef?.current?.value;
      const phone = phoneRef?.current?.value;
      const email = emailRef?.current?.value;
      const reason = reasonRef?.current?.value;
      
      if(name.trim().length <= 2) {
          alert("אנא הכניסי שם מלא ");
          return;
      }
      if(phone.trim().length !== 10) {
          alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ");
          return;
      }
      if(!email.includes("@")) {
          alert("אנא הכניסי מייל תקין ");
          return;
      }
      if(reason.trim().length <= 2) {
          alert("אנא הכניסי סיבת פנייה ");
          return;
      }
   
      // נתונים לשרת המקורי
      const serverData = {
          name: name,
          phone: phone,
          email: email,
          reason: reason,
          reciver: reciver
      };

      // נתונים לווב-הוק - פורמט פשוט יותר
      const webhookData = {
          data: {
              name: name,
              phone: phone,
              email: email,
              reason: reason
          }
      };

      try {
          // שליחה במקביל לשני היעדים
          const [serverResponse, webhookResponse] = await Promise.all([
              fetch(serverUrl, {
                  method: "POST",
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(serverData)
              }),
              fetch(webhookUrl, {
                  method: "POST",
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify(webhookData)
              })
          ]);

          if (serverResponse.ok && webhookResponse.ok) {
              alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
              nameRef.current.value = "";
              phoneRef.current.value = "";
              emailRef.current.value = "";
              reasonRef.current.value = "";
              setSubmitted(true);
              setAgreed(false);
          } else {
              throw new Error('Failed to submit form to one or both endpoints');
          }
      } catch (error) {
          alert("התרחשה שגיאה, אנא נסי שוב מאוחר יותר");
          console.error('Error submitting form:', error);
      }
  };

  return <>
      <div className={styles.title} id="צרי קשר">{props.title}</div>
      <div className={styles.formContainer}>
          <form className={styles.form}>
              <input
                  type="text"
                  className={styles.input}
                  placeholder="שם מלא"
                  ref={nameRef}
              />
              <input
                  type="tel"
                  className={styles.input}
                  placeholder="מספר טלפון"
                  ref={phoneRef}
              />
              <input
                  type="email"
                  className={styles.input}
                  placeholder="מייל"
                  ref={emailRef}
              />
              <textarea
                  className={styles.input}
                  placeholder="סיבת הפנייה"
                  ref={reasonRef}
                  rows="4"
              />

              {/* תיבת האישור למדיניות הפרטיות */}
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                marginTop: "20px",
                marginBottom: "20px"
              }}>
                <label style={{ 
                  direction: "rtl", 
                  fontFamily: "AssistantR", 
                  fontSize: "0.9rem", 
                  textAlign: "right", 
                  display: "flex", 
                  alignItems: "center", 
                  flexWrap: "wrap", 
                  gap: "5px" 
                }}>
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    style={{ marginLeft: "10px" }}
                  />
                  קראתי את
                  <span onClick={handlePrivacyClick}>
                    <PrivacyPolicy 
  ownerName="אביה הרשיש" 
  email="Aviarc100@gmail.com" 
  phone="+972 52-260-5557" 
  domain="https://avia-arch.co.il/" 
/>
                  </span>
                  ואני מאשר/ת
                </label>
              </div>

              <button onClick={submitHandler} className={styles.button}>
                  אביה, צרי איתי קשר
              </button>
          </form>
      </div>
  </>
};

export default FormScreen