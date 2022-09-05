import style from './Main.module.css';
// import { Posts } from '../Articles/Posts/Posts';
import articles from '../Articles/article.json';

console.log(articles);
export const Main = (props) => {
 
  return (
    <div className={style.main}>
      {articles.map(item=>
      <section>
        <div className="txt">
          <h2>{item.title}</h2>
          <div>{item.body}</div>
        </div>
      </section>
      )}
      
    </div>
  );
};

