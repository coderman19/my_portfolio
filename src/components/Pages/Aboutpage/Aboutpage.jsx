import { useNavigate } from 'react-router-dom';

import style from './Aboutpage.module.css';

export const Aboutpage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate('/');
  return (
    <div className={style.aboutpage}>
    <button className='back' onClick={goBack}>Назад</button>
      <h3>Aboutpage</h3>
    </div>
  );
};