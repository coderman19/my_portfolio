import style from './Main.module.css';
import { Routes, Route } from 'react-router-dom';

import { Homepage } from '../Pages/Homepage/Homepage';
import { Aboutpage } from '../Pages/Aboutpage/Aboutpage';
import { Blogpage } from '../Pages/Blogpage/Blogpage';
import { Contacts } from '../Pages/Contacts/Contacts';
import { Notfoundpage } from '../Pages/Notfoundpage/Notfoundpage';


export const Main = (props) => {
 
  return (
    <div className={style.main}>
     
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<Aboutpage />}/>
        <Route path='/posts' element={<Blogpage />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='*' element={<Notfoundpage />}/>
      </Routes>
      
    </div>
  );
};

