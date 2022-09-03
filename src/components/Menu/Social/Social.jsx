import style from './Social.module.css';
import inst from '../../../img/icons/instagramm.svg';
import vk from '../../../img/icons/vk.svg';
import pint from '../../../img/icons/pinterest.svg';

export const Social = () => {
  return (
    <div className={style.social}>
      <div className={style.socialLink}>
        <img src={inst} alt="instagramm" />
      </div>
      <div className={style.socialLink}>
        <img src={vk} alt="vk" />
      </div>
      <div className={style.socialLink}>
        <img src={pint} alt="pinterest" />
      </div>
    </div>
  );
};