import s from './Header.module.css';

const Header = () => {
  return (
    <img className={s.logo} src="/logo.svg" alt="Логотип Personal Journal" />
  );
};

export default Header;
