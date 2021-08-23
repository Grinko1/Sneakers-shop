import React from 'react';
import AppContext from '../context';

const Info = () => {
  

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      {/* <img className="mb-20" width="120px" src={} alt="Empty" /> */}
      <h2>lfdl</h2>
      <p className="opacity-6">sfc</p>
      <button className="greenButton">
        <img src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
