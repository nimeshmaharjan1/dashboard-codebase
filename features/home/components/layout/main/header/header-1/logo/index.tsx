import Image from 'next/image';
import logo from '../../../../../../../../public/assets/fun.svg';

//Import module scss as styles

// import styles from './header.module.scss';

const Logo = () => {
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <Image src={logo} alt="logo" width={24} height={38} />
    </>
  );
};

export default Logo;
