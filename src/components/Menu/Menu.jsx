import style from './Menu.module.css';
import { Profile } from './Profile/Profile';
import { Info } from './Info/Info';
import { Social } from './Social/Social';
import { Description } from './Description/Description';
import { Btn } from './Btn/Btn';

export const Menu = () => {
  return (
    <div className={style.menu}>
      <Profile />
      <Info />
      <Social />
      <hr className={style.headLine}/>
      <Description />
      <hr className={style.headLine}/>
      <Btn />
    </div>
  );
};