import React from 'react';
import '../styles/Article.css';

const Article: React.FC = () => {
  return (
    <div className="inner-page-container">
      <h2>Article Management</h2>
      <table className="inner-page-table">
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
            <td>12345</td>
            <td>Sample Article</td>
            <td>John Doe</td>
            <td>Technology</td>
            <td>12/03/2025</td>
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

export default Article;


