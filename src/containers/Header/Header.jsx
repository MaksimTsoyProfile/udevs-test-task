import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './Header.module.scss';
import CustomLink from '@/components/CustomLink';
import Button from '@/components/Button';
import Wrapper from '@/components/Wrapper';
import EntryModal from '@/containers/EntryModal';
import logout from '@/pages/api/logout';
import { logOut } from '@/backendApi';
import { useRouter } from 'next/router';

const Header = ({ token }) => {
  const [activeLink, setActiveLink] = useState(1);
  const { replace } = useRouter();
  const [openEntry, setOpenEntry] = useState(false);
  const links = useMemo(() => [
    {
      id: 1,
      title: 'Новости',
      href: '/'
    },
    {
      id: 2,
      title: 'Погода',
      href: '/'
    },
  ], []);
  
  const handleActivateLink = useCallback((id) => () => {
    setActiveLink(id);
  }, []);
  
  const handleOpenEntryDialog = () => {
    setOpenEntry(true);
  };
  
  const handleCloseEntryDialog = () => {
    setOpenEntry(false);
  };
  
  const handleLogOut = useCallback(async () => {
    await logOut();
    replace('/');
  }, [replace]);
  
  const getAvaById = useCallback((id) => {
    const avaById = {
      1: '/ava1.png',
      2: '/ava2.png',
      3: '/ava3.png',
      4: '/ava4.png',
      5: '/ava5.png',
      6: '/ava6.png',
      7: '/ava7.png',
    };
    return avaById[id];
  }, [])
  
  return (
    <div className={styles.header}>
      <Wrapper>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <img src='/logo.png' alt='logo' />
          </div>
          <div className={styles.links}>
            {
              links.map((link) => (
                <div className={styles.link} key={link.id}>
                  <CustomLink
                    href={link.href}
                    title={link.title}
                    active={link.id === activeLink}
                    onClick={handleActivateLink(link.id)}
                  />
                </div>
              ))
            }
          </div>
          {
            token ?
              (
                <div className={styles.avatarContainer}>
                  <div className={styles.avatar}>
                    <img src={getAvaById(token)} alt="avatar" />
                  </div>
                  <Button onClick={handleLogOut}>{'Выход'}</Button>
                </div>
              ) : (
                <div className={styles.enter}>
                  <Button onClick={handleOpenEntryDialog}>{'Вход'}</Button>
                </div>
              )
          }
          <EntryModal
            open={openEntry}
            onClose={handleCloseEntryDialog}
          />
        </div>
      </Wrapper>
    </div>
  )
};

export default Header;
