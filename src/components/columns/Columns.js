// PlayerColumns.jsx
import { useEffect, useRef } from 'react';
import styles from './Columns.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
import change from "../../Icons/wired-lineal-516-square-footage-hover-layout-change.json"
import building from "../../Icons/wired-lineal-731-real-estate-building-project-hover-pinch.json"
import people from "../../Icons/wired-lineal-483-building-morph-city.json"
import withyou from "../../Icons/wired-lineal-781-rulers-hover-pinch.json"
import Button from "../../components/button/Button"
const PlayerColumns = () => {
    const playerRef1=useRef(null);
    const playerRef2=useRef(null);
    const playerRef3=useRef(null);
    const playerRef4=useRef(null);
    useEffect(()=>{
        playerRef1?.current?.playFromBeginning();
        playerRef2?.current?.playFromBeginning();
        playerRef3?.current?.playFromBeginning();
        playerRef4?.current?.playFromBeginning();
    },[])

    const handleComplete1 = () => {
      setTimeout(() => {
        playerRef1?.current?.playFromBeginning();
      }, 2500); // play again after 2.5 seconds
    };
    const handleComplete2 = () => {
      setTimeout(() => {
        playerRef2?.current?.playFromBeginning();
      }, 2500); // play again after 2.5 seconds
    };
    const handleComplete3 = () => {
      setTimeout(() => {
        playerRef3?.current?.playFromBeginning();
      }, 2500); // play again after 2.5 seconds
    };
    const handleComplete4 = () => {
      setTimeout(() => {
        playerRef4?.current?.playFromBeginning();
      }, 2500); // play again after 2.5 seconds
    };
 
  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.icon}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  },[])
  return <>
  <div className={styles.title}>שירותי המשרד</div>
    <div className={styles.container}>
      <div className={styles.column}>
      <div className={styles.icon}><Player icon={change} ref={playerRef1} size="95%" loop={true} onComplete={handleComplete1}></Player></div>
        <p className={styles.text}>תכנון אדריכלי מקיף</p>
      </div>
      <div className={styles.column}>
      <div className={styles.icon}><Player icon={building} ref={playerRef2} size="95%" loop={true} onComplete={handleComplete2}></Player></div>
        <p className={styles.text}>תכנון מחדש של החלל הקיים
        </p>
      </div>
    </div>

    <div className={styles.container}>
      <div className={styles.column}>
      <div className={styles.icon}><Player icon={people} ref={playerRef3} size="95%" loop={true} onComplete={handleComplete3}></Player></div>
        <p className={styles.text}>שינויי דיירים לפני האכלוס</p>
      </div>
      <div className={styles.column}>
      <div className={styles.icon}><Player icon={withyou} ref={playerRef4} size="95%" loop={true} onComplete={handleComplete4}></Player></div>
        <p className={styles.text}>ליווי תכנוני ועיצובי

        </p>
      </div>
    </div>
    <Button text="אביה, בואי נדבר!"/>
    </>
};

export default PlayerColumns;