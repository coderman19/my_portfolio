import style from './Contacts.module.css';
import img from '../../../img/bg/menu_bg-2.jpg';
import { Back } from '../../Back/Back';

export const Contacts = () => {
  return (
    <div className="container">
      <div className={style.contacts}>
        {/* <h5>Контакты</h5>
        <div className="txt">
        hello
        </div> */}
        <div className="txt">
        <img src={img} alt="" />
        <h5>Мои контакты</h5>
          <p>tel: <a href="tel:+79269690922">+7(926) 969 09 22</a></p>
          <p>email: <a href="mailto:freedom-75@mail.ru">freedom-75@mail.ru</a></p>
        </div>
        <Back />
      </div>
    </div>
  );
};