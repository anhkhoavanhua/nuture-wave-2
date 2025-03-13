import React from 'react';
import '../styles/PdSession.css';

const PdSession: React.FC = () => {
  return (
    <div className="pd-session-container">
      <h2>PD Session Management</h2>
      <table className="pd-session-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>67890</td>
            <td>Sample Session</td>
            <td>Jane Smith</td>
            <td>Business</td>
            <td>15/03/2025</td>
            <td>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PdSession;


