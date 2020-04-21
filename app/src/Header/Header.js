import React from 'react';
import './Header.css';

import Nav from "../Nav/Nav";

class Header extends React.Component {
  // constructor(props){
  // super(props);}
  render() {
    return (
      <header><div className="head">
        <div className="header_section">
        <div className="logotext">
          Convert Money
          
      </div>
        <div className="header_item"><a href="#">События</a></div>
        <div className="header_item"><a href="#">Контакты</a></div>
        <div className="header_item"><a href="#">О нас</a></div>
        <div className="header_item"><a href="#">Популярное</a></div>
        <div className="header_item"><a href="#">Статистика</a></div>
     
      </div>
        <div className="header_section">

          <div className="header_item"><a href="#">Настройки</a></div>
          <div className="header_item"><a href="#">Авторизация</a></div>

        </div>
      </div>
        <Nav />
      </header>
    );
  }
}
export default Header;