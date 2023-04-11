import React from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  message: string;
  onClose: () => void;
}

/**
 * Modal endGame /Win /Lose/Time's up
 * @param {any} {message
 * @param {any} onClose}
 * @returns {any}
 */
const Modal: React.FC<ModalProps> = ({ message, onClose }) => {

  const messageModal = () => {
    if (message === "You Win! Congratulations!") {
      return styles._win;
    } else {
      return styles._lose;
    }
  };
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={`${styles.gif} ${messageModal()}`} data-testid="modal"></div>
        <div className={styles.content}>
          <p className={styles.message}>{message}</p>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
