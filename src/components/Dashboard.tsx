import React, { useState } from 'react';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const data = [
    {
      slug: 'please-follow-the-security',
      category: 'Privacy & Security',
      required: 'No',
      title: 'Please follow the security',
      status: 'Show',
    },
    {
      slug: 'term',
      category: 'Term',
      required: 'No',
      title: 'Term',
      status: 'Show',
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="sidebar-title">NurtureWave</h1>
        <nav>
          <ul>
            {/* Static Content */}
            <li>
              <a href="#" className="active">
                🖥️ Static Content
              </a>
            </li>

            {/* Accounts (Expandable) */}
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
                    <a href="#">🛠️ Admin Management</a>
                  </li>
                  <li>
                    <a href="#">🌸 Doula Management</a>
                  </li>
                  <li>
                    <a href="#">📄 Client Management</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Link đến Article */}
            <li>
              <Link to="/articles">📰 Article</Link>
            </li>

            <li>
              <Link to="/PdSession">📰 PdSession</Link>
            </li>
            <li><a href="#">🔲 Category</a></li>
            <li><a href="#">📦 Subscriptions</a></li>
            <li><a href="#">🎟️ Voucher</a></li>
            <li><a href="#">📄 Help Documents</a></li>
            <li><a href="#">🔍 Search Settings</a></li>
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

          {isProfileMenuOpen && (
            <div className="profile-menu">
              <div className="menu-item">Change Password</div>
              <div className="menu-item logout">Logout</div>
            </div>
          )}
        </div>
      </aside> 

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <h2>Static Content</h2>
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>Create Static Content</button>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Slug</th>
                <th>Category</th>
                <th>Required</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.slug}>
                  <td>{item.slug}</td>
                  <td>{item.category}</td>
                  <td>{item.required}</td>
                  <td>{item.title}</td>
                  <td className="status">● {item.status}</td>
                  <td className="actions">
                    <button className="edit">✏️</button>
                    <button className="delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="footer">
          Showing 1 to 2 of 2 entries
          <div className="pagination">
            <select>
              <option>25 per page</option>
              <option>50 per page</option>
              <option>75 per page</option>
            </select>
            <button>&lt;</button>
            <span className="page-number">1</span>
            <button>&gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

