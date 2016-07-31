import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App demo-layout-transparent mdl-layout mdl-js-layout">

  <header className="mdl-layout__header mdl-layout__header--transparent">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">Sununet</span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation">
      <Link to="/" className="mdl-navigation__link">Home</Link>
      <Link to="/help" className="mdl-navigation__link">Help</Link>
      <Link to="about" className="mdl-navigation__link">About</Link>
      </nav>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Sununet</span>
    <nav className="mdl-navigation">
      <Link to="/" className="mdl-navigation__link">Home</Link>
      <Link to="/help" className="mdl-navigation__link">Help</Link>
      <Link to="about" className="mdl-navigation__link">About</Link>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="App-header">
    </div>
          <div className="demo-card-square mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text mdl-layout__content page-content">
              {this.props.children}
            </div>
          </div>
                <footer className="mdl-mini-footer">
                  <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">Title</div>
                    <ul className="mdl-mini-footer__link-list">
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Privacy & Terms</a></li>
                    </ul>
                  </div>
                </footer>
  </main>
      </div>
    );
  }
}

export default App;
