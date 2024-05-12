import SelectUser from '../SelectUser/SelectUser';
import s from './Header.module.css';

const Header = () => {
  return (
    <>
      <img className={s.logo} src="/logo.svg" alt="Логотип Personal Journal" />
      <SelectUser  />
    </>
  );
};

export default Header;
