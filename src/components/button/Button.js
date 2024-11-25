import styles from './Button.module.css';

const Button = (props) => {
  const handleButtonClick = () => {
    const phoneNumber = "+972522605557";
    const message = "היי אביה ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
  
  return (
    <div className={styles.center}>
      <button 
        className={styles.button}
        onClick={handleButtonClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;