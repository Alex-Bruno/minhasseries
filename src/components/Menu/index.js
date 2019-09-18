import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand page-scroll" to={'/'}>
                <img src="/images/logo.png" height="30" alt="logo" />
                </Link>
            </div>
            <div id="navbar" className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav nav-pills genres">
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/new'>Nova Série</Link></li>
                    <li><Link to='/about'>Sobre</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
