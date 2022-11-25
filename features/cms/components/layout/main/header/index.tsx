//Import module scss as styles

import styles from './header.module.scss';

const Header = () => {
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <h1 className={`${styles.custom_header_title} mb-2`}>Header Title</h1>
      <p className={styles.custom_paragraph}>Paragraph Text</p>
    </>
  );
};

export default Header;
