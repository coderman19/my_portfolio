import { useNavigate } from 'react-router-dom';

import style from './Blogpage.module.css';

export const Blogpage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate('/');
  return (
    <div className={style.blogpage}>
    <button className='back' onClick={goBack}>Назад</button>
      <h3>Blogpage</h3>
    </div>
  );
};