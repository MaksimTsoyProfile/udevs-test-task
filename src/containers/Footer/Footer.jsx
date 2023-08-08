import styles from './Footer.module.scss';
import { useMemo } from 'react';
import Wrapper from '@/components/Wrapper';

const Footer = () => {
  
  const resources = useMemo(() => [
    {
      id: 1,
      title: 'Статьи'
    },
    {
      id: 2,
      title: 'Журналы'
    },
    {
      id: 3,
      title: 'Газеты'
    },
    {
      id: 4,
      title: 'Диплом'
    },
  ], []);
  
  const about = useMemo(() => [
    {
      id: 1,
      title: 'Контакты'
    },
    {
      id: 2,
      title: 'Помощь'
    },
    {
      id: 3,
      title: 'Заявки'
    },
    {
      id: 4,
      title: 'Политика'
    },
  ], [])
  
  return (
    <div className={styles.footer}>
      <Wrapper>
        <div className={styles.footerContainer}>
          <div className={styles.logoBlock}>
            <div className={styles.img}>
              <img src="/logo.png" alt="logo"/>
            </div>
            <div className={styles.text}>
              {'Помощник в публикации статей, журналов. Список популярных международных конференций. Всё для студентов и преподавателей.'}
            </div>
          </div>
          <div className={styles.resources}>
            <div className={styles.blockTitle}>{'Ресурсы'}</div>
            {
              resources.map((resource) => (
                <div className={styles.blockItem} key={resource.id}>
                  {resource.title}
                </div>
              ))
            }
          </div>
          <div className={styles.about}>
            <div className={styles.blockTitle}>{'О нас'}</div>
            {
              about.map((ab) => (
                <div className={styles.blockItem} key={ab.id}>
                  {ab.title}
                </div>
              ))
            }
          </div>
          <div className={styles.help}>
            <div className={styles.blockTitle}>{'Помощь'}</div>
            <div className={styles.blockItem}>{'Часто задаваемые вопросы'}</div>
          </div>
        </div>
        <div className={styles.copyRight}>
          {'Copyright © 2020. LogoIpsum. All rights reserved.'}
        </div>
      </Wrapper>
    </div>
  )
};

export default Footer;