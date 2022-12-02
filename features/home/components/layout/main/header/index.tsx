//Import module scss as styles

import HeaderOne from './header-1';

const Header = () => {
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <HeaderOne></HeaderOne>
      {/* <div className="container">
        <h1 className={`${styles.custom_header_title} mb-2`}>Header Title</h1>
        <p className={styles.custom_paragraph}>Paragraph Text</p>
      </div> */}
    </>
  );
};

export default Header;
