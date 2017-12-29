import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const logoSrc = 'https://avatars3.githubusercontent.com/u/6407041?s=200&v=4';
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <Link to="/" className="navbar-brand">
        <img alt="logo" src={logoSrc} className={'logo'} /><span>ReactiveX</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/example_01">example_01</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/example_02">example_02</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/react-router">react-router</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todoList">react-router</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reduxTest">ReduxTest</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reduxNormalizr">ReduxNormalizr</Link>
          </li>
        </ul>
      </div>
    </nav>);
};

export default Navbar;
