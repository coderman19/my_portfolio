

import {Back} from '../../Back/Back';

import articles from '../../Articles/article.json';
import style from './Blogpage.module.css';


export const Blogpage = (props) => {

  return (
    <div className="container">
      <div className={style.blogpage}>
      <h3>Blogpage</h3>
        <div className="txt">
        {articles.map((obj) => (
          <>
            <h4>
              {obj.title}
            </h4>
            <p>
              {obj.body}
            </p>
              {obj.href}
          </>
        ))}
        </div>
        <Back />
      </div>
    </div>
  );
};