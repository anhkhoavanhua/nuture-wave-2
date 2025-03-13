/*import React, { useState } from 'react';
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

            {/* Accounts */
          /*<li>
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

export default Sidebar;*/


/*import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isAccountOpen, setIsAccountOpen } = useSidebar();

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

          {/* Accounts */
          /*<li>
            <div
              className="dropdown-header"
              onClick={() => setIsAccountOpen(!isAccountOpen)}
            >
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

export default Sidebar;*/
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <aside className="sidebar">
      {/* Sidebar Header */}
      <h1 className="sidebar-title">NurtureWave</h1>
      
      <nav>
        <ul>
          {/* Static Content */}
          <li>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
              🖥️ Static Content
            </Link>
          </li>

          {/* Accounts (Dropdown) */}
          <li>
            <div
              className="dropdown-header"
              onClick={() => setIsAccountOpen(!isAccountOpen)}
            >
              👤 Accounts
              <span className={`arrow ${isAccountOpen ? 'open' : ''}`}>
                {isAccountOpen ? '▲' : '▼'}
              </span>
            </div>
            {isAccountOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/admin-management" className={location.pathname === '/admin-management' ? 'active' : ''}>
                    🛠️ Admin Management
                  </Link>
                </li>
                <li>
                  <Link to="/doula-management" className={location.pathname === '/doula-management' ? 'active' : ''}>
                    🌸 Doula Management
                  </Link>
                </li>
                <li>
                  <Link to="/client-management" className={location.pathname === '/client-management' ? 'active' : ''}>
                    📄 Client Management
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Links ngoài dropdown */}
          <li>
            <Link to="/articles" className={location.pathname === '/articles' ? 'active' : ''}>
              📰 Article
            </Link>
          </li>
          <li>
            <Link to="/PdSession" className={location.pathname === 'PdSession' ? 'active' : ''}>
              🗓️ PD Session
            </Link>
          </li>
          <li>
            <Link to="/category" className={location.pathname === '/category' ? 'active' : ''}>
              🔲 Category
            </Link>
          </li>
          <li>
            <Link to="/subscriptions" className={location.pathname === '/subscriptions' ? 'active' : ''}>
              📦 Subscriptions
            </Link>
          </li>
          <li>
            <Link to="/voucher" className={location.pathname === '/voucher' ? 'active' : ''}>
              🎟️ Voucher
            </Link>
          </li>
          <li>
            <Link to="/help-documents" className={location.pathname === '/help-documents' ? 'active' : ''}>
              📄 Help Documents
            </Link>
          </li>
          <li>
            <Link to="/search-settings" className={location.pathname === '/search-settings' ? 'active' : ''}>
              🔍 Search Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Profile */}
      <div className="profile">
        <div className="avatar">A</div>
        <span>Super Admin</span>
        <div
          className="profile-menu-trigger"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        >
          •••
        </div>

        {/* Profile Dropdown Menu */}
        {isProfileMenuOpen && (
          <div className="profile-menu">
            <div className="menu-item">Change Password</div>
            <div className="menu-item logout">Logout</div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
