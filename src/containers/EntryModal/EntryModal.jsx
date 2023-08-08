import React, { useCallback, useMemo, useState } from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import styles from './EntryModal.module.scss';
import cn from 'classnames';
import { logIn } from '@/backendApi';
import { useRouter } from 'next/router';

const EntryModal = ({
  open,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const { replace } = useRouter();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    await logIn(avatar);
    replace('/');
    setName('');
    setAvatar('');
    onClose();
  }, [name, avatar]);
  
  const setValueName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  
  const handleSelectAvatar = useCallback((id) => () => {
    setAvatar(id);
  }, [])
  
  const avatars = useMemo(() => [
    {
      id: 1,
      src: '/ava1.png'
    },
    {
      id: 2,
      src: '/ava2.png'
    },
    {
      id: 3,
      src: '/ava3.png'
    },
    {
      id: 4,
      src: '/ava4.png'
    },
    {
      id: 5,
      src: '/ava5.png'
    },
    {
      id: 6,
      src: '/ava6.png'
    },
    {
      id: 7,
      src: '/ava7.png'
    },
  ], []);
  
  const getAvatarClasses = (selected) => cn({
    [styles.avatar]: true,
    [styles.avatarSelected]: avatar === selected,
  });
  
  return (
    <Modal
      open={open}
      title={'Как Вас зовут'}
      onClose={onClose}
      closeOnDocumentClick={true}
    >
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          value={name}
          onChange={setValueName}
        />
        <div className={styles.avatarLabel}>{'Выберите Аватар'}</div>
        <div className={styles.avatars}>
          {
            avatars.map((avatar) => (
              <div
                className={getAvatarClasses(avatar.id)}
                key={avatar.id}
                onClick={handleSelectAvatar(avatar.id)}
              >
                <img src={avatar.src} alt="avatar" />
              </div>
            ))
          }
        </div>
        <Button
          fullwidth={true}
          type="submit"
          disabled={!name || !avatar}
        >
          {'Войти'}
        </Button>
      </form>
    </Modal>
  );
};

export default EntryModal;