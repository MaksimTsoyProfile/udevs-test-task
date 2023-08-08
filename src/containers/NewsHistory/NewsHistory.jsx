import styles from './NewsHistory.module.scss';
import React, { useMemo, useState } from 'react';
import NewsCircle from '@/components/NewsCircle';
import NewsCard from '@/components/NewsCard';
import Pagination from '@/components/Pagination';

const NewsHistory = () => {
  const [page, setPage] = useState(0);
  const newsCircles = useMemo(() => [
    {
      id: 1,
      src: '/circleImage1.png',
    },
    {
      id: 2,
      src: '/circleImage2.png',
    },
    {
      id: 3,
      src: '/circleImage3.png',
    },
    {
      id: 4,
      src: '/circleImage1.png',
    },
    {
      id: 5,
      src: '/circleImage2.png',
    },
  ], []);
  
  const newsCards = useMemo(() => [
    {
      id: 1,
      src: '/news1.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 2,
      src: '/news2.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 3,
      src: '/news3.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 4,
      src: '/news1.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 5,
      src: '/news1.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 6,
      src: '/news2.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 7,
      src: '/news3.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 8,
      src: '/news1.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 9,
      src: '/news1.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 10,
      src: '/news2.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 11,
      src: '/news3.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
    {
      id: 12,
      src: '/news1.png',
      text: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились к вредным',
      date: '18:26 11.01.2021',
      views: '365',
    },
  ], []);
  
  return (
    <div className={styles.newsHistoryContainer}>
      <div className={styles.newsTitle}>
        {"История последних новостей"}
      </div>
      <div className={styles.newsCircles}>
        {
          newsCircles.map((newsCircle) => (
            <div className={styles.newsCircle} key={newsCircle.id}>
              <NewsCircle src={newsCircle.src} />
            </div>
          ))
        }
      </div>
      <div className={styles.newsCards}>
        {
          newsCards.map((newsCard) => (
            <div className={styles.newsCard} key={newsCard.id}>
              <NewsCard
                text={newsCard.text}
                date={newsCard.date}
                views={newsCard.views}
                src={newsCard.src}
                onClick={newsCard.onClick}
              />
            </div>
          ))
        }
      </div>
      <div className={styles.pagination}>
        <Pagination
          totalObjects={900}
          pageSize={10}
          activePage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}

export default NewsHistory;
