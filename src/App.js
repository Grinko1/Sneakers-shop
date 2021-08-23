import React from 'react'
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">

     
       <Drawer/>
     


        <Header/>
  
      <div className='content p-40'>
        <div className='d-flex align-center justify-between md-40'>
        <h1 >Все кроссовки</h1>
        <div className='searchBlock d-flex'>
          <img src='img/search.svg' alt='search'/>
            <input placeholder='Поиск...'/>
          </div>
          </div>
        ....
        <div className='d-flex'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>



      </div>

    </div>
  );
}

export default App;
