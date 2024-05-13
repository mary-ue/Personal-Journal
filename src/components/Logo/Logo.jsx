import { memo } from 'react';
import s from './Logo.module.css';

export const Logo = ({image}) => {
  return (
    <img
      className={s.logo}
      src={image}
      alt="Логотип Personal Journal"
    />
  );
};

export default memo(Logo);
