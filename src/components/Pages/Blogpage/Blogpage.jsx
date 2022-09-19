

import { Back } from '../../Back/Back';
// eslint-disable-next-line no-unused-vars
import articles from '../../Articles/article.json';
import style from './Blogpage.module.css';

export const Blogpage = (props) => {

  return (
    <div className={style.blogpage}>
      <h3>Blogpage</h3>
      <div className="txt">
       {articles.map((obj) => (
        <>
          <h5>
            {obj.title}
          </h5>
          <p>
            {obj.body}
          </p>
        </>
       ))}
      </div>
      <Back />
    </div>
  );
};