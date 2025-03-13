import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">NurtureWave</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
              🖥️ Static Content
            </Link>
          </li>

          {/* Accounts */}
          <li>
            <div className="dropdown-header" onClick={() => setIsAccountOpen(!isAccountOpen)}>
              👤 Accounts
              <span className={`arrow ${isAccountOpen ? 'open' : ''}`}>
                {isAccountOpen ? '▲' : '▼'}
              </span>
            </div>
            {isAccountOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/articles" className={location.pathname === '/articles' ? 'active' : ''}>
                    📰 Article
                  </Link>
                </li>
                <li>
                  <Link to="/PdSession" className={location.pathname === '/PdSession' ? 'active' : ''}>
                    🗓️ PD Session
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
