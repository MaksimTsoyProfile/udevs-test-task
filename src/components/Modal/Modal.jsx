import React from 'react';
import cn from 'classnames';
import Popup from 'reactjs-popup';

import styles from './Modal.module.scss';

const Modal = ({
  open,
  onClose,
  children,
  title,
  closeOnDocumentClick,
}) => {

  return (
    <Popup open={open} closeOnDocumentClick={closeOnDocumentClick} onClose={onClose}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          {title}
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </Popup>
  );
};

export default Modal;
