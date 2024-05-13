import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

const Header = () => {
  // const [logoIndex, setLogoIndex] = useState(0);

  // const toggleLogo = () => {
  //   setLogoIndex(state => Number(!state));
  // };

  return (
    <>
      <Logo image={logos[0]} />
      <SelectUser  />
    </>
  );
};

export default Header;
