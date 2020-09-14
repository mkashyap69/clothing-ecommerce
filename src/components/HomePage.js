import React from 'react';
import './styles/homepage.styles.scss';

export const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">PANTS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">SHIRTS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">T-SHIRTS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);
