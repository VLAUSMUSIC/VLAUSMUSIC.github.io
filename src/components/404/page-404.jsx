import React from 'react';
import './page-404.css';
import { useHistory } from 'react-router';

export const Page404 = () => {
  const history = useHistory();

  const goHome = () => {
    history.replace('/');
  };
  
  return (
    <div className="container_not_found">
      <div className="not_found">
        <div className="code">404</div>
        <div className="code-text">
          Страница "<b>{history.location.pathname}</b>" - не найдена! Возможно,
          вы ввели неправильный адрес страницы или ваш браузер устарел.
        </div>
        <button className="go-home" onClick={goHome}>
          На главную
        </button>
      </div>
    </div>
  );
};
