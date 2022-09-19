
import style from './Homepage.module.css';

import blogget from '../../../img/bg/blogget.png';
import falling from '../../../img/bg/falling_leaves.png';
import gallery from '../../../img/bg/gallery_on_js.png';
import balls from '../../../img/bg/magic_balls.png';
import masters from '../../../img/bg/masters_wix.png';
import portfolio from '../../../img/bg/my_portfolio.png';
import game from '../../../img/bg/react_game.png';
import slider from '../../../img/bg/slider_on_css.png';
import shop from '../../../img/bg/technoshop-2.png';
import tesla from '../../../img/bg/tesla.png';
import univer from '../../../img/bg/universitet.png';

export const Homepage = () => {
  return (
   <div className="container">
     <div className={style.homepage}>
        <div className={style.item}>
          <img className={style.imgWork} src={blogget} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={falling} alt="" />
        </div>
        <div className={style.item}>
          <img className={style.imgWork} src={gallery} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={balls} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={masters} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={portfolio} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={game} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={slider} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={shop} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={tesla} alt="" />
        </div>
        <div className={style.item}>
        <img className={style.imgWork} src={univer} alt="" />
        </div>
    </div>
   </div>
  );
};