import style from './Nav.module.css';

export const Nav = () => {
  return (
    <div className={style.nav}>
   
      <div className={style.navLink}>about</div>
      <div className={style.navLink}>contacts</div>
      <div className={style.navLink}>gallery</div>
      <div className={style.navLink}>news</div>
    </div>
  );
};