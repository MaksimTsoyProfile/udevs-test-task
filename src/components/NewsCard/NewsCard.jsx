import styles from './NewsCard.module.scss';
import InfoLine from '@/components/InfoLine';

const NewsCard = ({
  src,
  text,
  date,
  views,
  onClick,
}) => {
  return (
    <div className={styles.newsCard} onClick={onClick}>
      <div className={styles.image}>
        <img src={src} alt="news"/>
      </div>
      <div className={styles.info}>
        <InfoLine date={date} views={views} />
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
};

export default NewsCard;