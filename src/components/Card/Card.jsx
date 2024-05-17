import Icon from "../Icon/Icon";
import styles from "./Card.module.css";

const Card = ({ card, color }) =>
{
const { icon, title, description, link } = card;
    return (
        <li className={styles.card} style={{ borderColor: color }}>
            <div className={styles.icon}><Icon id={icon} color={color} /></div>
            <div className={styles.description}> 
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                  {description && description.length > 0 && description.map((item, index) => (
                        <li key={index} className={styles.item}>{item}</li>
                    ))}
                </ul>
                <a href={link} className={styles.link}>View more</a>
            </div>
        </li>
    )
}

export default Card;