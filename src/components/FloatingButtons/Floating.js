import React from 'react';
import styles from './Floating.module.css';
import { FaWhatsapp,FaPhone } from 'react-icons/fa';

export const FloatingWhatsAppButton = () => {
  const phoneNumber = '972522605557';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.floatingButton} ${styles.whatsapp}`}
      aria-label="פתח צ'אט בווטסאפ"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export const FloatingPhoneButton = () => {
  const phoneNumber = '+972522605557';
  
  return (
    <a 
      href={`tel:${phoneNumber}`}
      className={`${styles.floatingButton} ${styles.phone}`}
      aria-label="התקשר אלינו"
    >
      <FaPhone size={24} />
    </a>
  );
};
