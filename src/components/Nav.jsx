import React from 'react';
//import Logo from '../img/logoHenry.png'
import clima from '../img/clima.jpg'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

import {Link} from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="clima" src={clima} width="50" height="50" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>

      
      <Link to='/about'>
      <span>About</span>
      </Link>

        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
