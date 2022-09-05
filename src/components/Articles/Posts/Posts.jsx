import style from './Posts.module.css';

export const Posts = (props) => {
 
  return (
    <div className={style.posts}>
      <div className="txt">
       <div className={style.txt2}>
       <div>{props.id}</div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
       </div>
      </div>
      
    </div>
  );
};