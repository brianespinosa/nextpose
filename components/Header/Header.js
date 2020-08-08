import styles from './Header.module.scss';

const Header = ({ title }) => {
  return (
    <header className={styles._}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
