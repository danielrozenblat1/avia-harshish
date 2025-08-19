import { useEffect, useRef, useState } from 'react';
import styles from './Columns.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';
import change from "../../Icons/wired-lineal-516-square-footage-hover-layout-change.json"
import building from "../../Icons/wired-lineal-731-real-estate-building-project-hover-pinch.json"
import people from "../../Icons/wired-lineal-483-building-morph-city.json"
import withyou from "../../Icons/wired-lineal-781-rulers-hover-pinch.json"
import Button from "../../components/button/Button"

const PlayerColumns = () => {
    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);
    const playerRef4 = useRef(null);
    const [activeColumns, setActiveColumns] = useState({});

    const services = [
        {
            icon: change,
            ref: playerRef1,
            title:  "תכנון בתים פרטיים",
            points: [
               "תכנון אדריכלי מקיף",
                "ליווי משלב רכישת הקרקע",
                "תכנון אדריכלי מקיף",
                "הגשת היתרי בנייה",
                "פיקוח עליון"
            ]
        },
        {
            icon: building,
            ref: playerRef2,
            title:  "ליווי שיפוצים לבתים קיימים",
            points: [
              
                "תכנון מחדש של החלל",
                "הכנת תכניות מפורטות",
                "בחירת חומרים",
                "פיקוח על הביצוע"
            ]
        },
        {
            icon: people,
            ref: playerRef3,
            title:  "ליווי לשינויי דיירים בדירות מקבלן",
            points: [
             
                "תכנון מותאם אישית",
                "הכנת תכניות עבודה מפורטות",
                "עבודה מול מחלקת שינויי דיירים",
                "חיסכון בטעויות יקרות"
            ]
        },
        {
            icon: withyou,
            ref: playerRef4,
            title: "הכשרה מקצועית לאדריכלים",
            points: [
             
                "קורס דיגיטלי שינויי דיירים",
                "ליווי אדריכליות בתחילת דרכן 1:1"
            ]
        }
    ];

    useEffect(() => {
        [playerRef1, playerRef2, playerRef3, playerRef4].forEach(ref => {
            ref?.current?.playFromBeginning();
        });
    }, []);

    const handleComplete = (ref) => {
        setTimeout(() => {
            ref?.current?.playFromBeginning();
        }, 2500);
    };

    useEffect(() => {
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
    }, []);

    const toggleColumn = (index) => {
        setActiveColumns(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            <div className={styles.title}>שירותי המשרד</div>
            <div className={styles.mainContainer}>
                {services.map((service, index) => (
                    index % 2 === 0 && (
                        <div key={index / 2} className={styles.container}>
                            <div className={styles.column}>
                                <div 
                                    className={`${styles.cardContent} ${activeColumns[index] ? styles.active : ''}`}
                                    onClick={() => toggleColumn(index)}
                                >
                                    <div className={styles.icon}>
                                        <Player
                                            icon={service.icon}
                                            ref={service.ref}
                                            size="95%"
                                            loop={true}
                                            onComplete={() => handleComplete(service.ref)}
                                        />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <p className={styles.text}>{service.title}</p>
                                        <div className={`${styles.arrow} ${activeColumns[index] ? styles.arrowActive : ''}`}>
                                            ▼
                                        </div>
                                    </div>
                                    <div className={`${styles.pointsWrapper} ${activeColumns[index] ? styles.pointsVisible : ''}`}>
                                        <div className={styles.pointsContainer}>
                                            {service.points.map((point, pointIndex) => (
                                                <div 
                                                    key={pointIndex} 
                                                    className={styles.point}
                                                    style={{ 
                                                        animationDelay: `${pointIndex * 0.1}s`,
                                                        opacity: activeColumns[index] ? 1 : 0,
                                                        transform: activeColumns[index] ? 'translateY(0)' : 'translateY(10px)'
                                                    }}
                                                >
                                                    <span className={styles.bullet}>●</span>
                                                    <span className={styles.pointText}>{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {services[index + 1] && (
                                <div className={styles.column}>
                                    <div 
                                        className={`${styles.cardContent} ${activeColumns[index + 1] ? styles.active : ''}`}
                                        onClick={() => toggleColumn(index + 1)}
                                    >
                                        <div className={styles.icon}>
                                            <Player
                                                icon={services[index + 1].icon}
                                                ref={services[index + 1].ref}
                                                size="95%"
                                                loop={true}
                                                onComplete={() => handleComplete(services[index + 1].ref)}
                                            />
                                        </div>
                                        <div className={styles.textContainer}>
                                            <p className={styles.text}>{services[index + 1].title}</p>
                                            <div className={`${styles.arrow} ${activeColumns[index + 1] ? styles.arrowActive : ''}`}>
                                                ▼
                                            </div>
                                        </div>
                                        <div className={`${styles.pointsWrapper} ${activeColumns[index + 1] ? styles.pointsVisible : ''}`}>
                                            <div className={styles.pointsContainer}>
                                                {services[index + 1].points.map((point, pointIndex) => (
                                                    <div 
                                                        key={pointIndex} 
                                                        className={styles.point}
                                                        style={{ 
                                                            animationDelay: `${pointIndex * 0.1}s`,
                                                            opacity: activeColumns[index + 1] ? 1 : 0,
                                                            transform: activeColumns[index + 1] ? 'translateY(0)' : 'translateY(10px)'
                                                        }}
                                                    >
                                                        <span className={styles.bullet}>●</span>
                                                        <span className={styles.pointText}>{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                ))}
            </div>
            <Button text="אביה, בואי נדבר!" />
        </>
    );
};

export default PlayerColumns;