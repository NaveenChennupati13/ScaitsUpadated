import React from 'react';
import chaitanyaLogo from '../assets/srichaitanya-png.png';
import { Link,useLocation} from 'react-router-dom';


function NavSidebar() {

  const location=useLocation();

  return (
    <div className="layout-wrapper">
      {/* Top Navbar */}
      <header className="top-navbar">
      <div className="logo">
          <img src={chaitanyaLogo} alt="Sri Chaitanya Logo" />
        </div>

        <input type="text" className="search-box" placeholder="Ask for anything" />
        <div className="nav-user-section">
          <i className="fas fa-bell bell-icon"></i>
          <div className="user-info">
            <span className="user-location">HYD 256789</span>
            <span className="user-role">Cashier</span>
            <img src="https://via.placeholder.com/32" alt="User" className="user-avatar" />
          </div>
        </div>
      </header>
    

      {/* Side Navbar */}
      <aside className="sidebar">
        
        <h4 className="module-heading">Modules</h4>
        <ul className="menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="menu-item active">
            <i className="fas fa-user-graduate"></i> Students
          </li>
        </Link>

          <li className="menu-item"><i className="fas fa-laptop"></i> Application</li>
          <li className="menu-item"><i className="fas fa-user-tie"></i> Employee</li>
          <li className="menu-item"><i className="fas fa-bus"></i> Fleet</li>
          <li className="menu-item"><i className="fas fa-warehouse"></i> Warehouse</li>
          <li className="menu-item"><i className="fas fa-sms"></i> SMS</li>
          <li className="menu-item"><i className="fas fa-question-circle"></i> Question Bank</li>
          <li className="menu-item"><i className="fas fa-boxes"></i> Assets Management</li>
          <li className="menu-item"><i className="fas fa-credit-card"></i> Payment Services</li>
          <li className="menu-item"><i className="fas fa-video"></i> CCTV</li>
          <li className="menu-item"><i className="fas fa-users-cog"></i> HRMS</li>
        </ul>
      </aside>
    </div>
  );
}

export default NavSidebar;
