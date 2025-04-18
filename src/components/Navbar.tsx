import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
       <div className="navbar-content">
        <div className="navbar-title">
          不规则采样多元时间序列自适应插补及预测系统
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/imputation">不规则采样多元时间序列插补</Link>
        </li>
        <li>
          <Link to="/prediction">不规则采样多元时间序列预测</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
