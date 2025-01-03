import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

async function fetchUserData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
}

function App() {
  const [username, setUsername] = useState('bankierubybank');
  const [userData, setUserData] = useState(null);

  const refreshUserData = async () => {
    const fetchedData = await fetchUserData(username);
    setUserData(fetchedData);
  };

  useEffect(() => {
    refreshUserData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    refreshUserData();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '10px',
        }}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter GitHub username'
          />
          <button type='submit'>Search</button>
        </form>
      </div>
      {userData && (
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Login</td>
              <td>{userData.login}</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>{userData.id}</td>
            </tr>
            <tr>
              <td>Node ID</td>
              <td>{userData.node_id}</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  style={{ width: '100px' }}
                />
              </td>
            </tr>
            <tr>
              <td>URL</td>
              <td>
                <a
                  href={userData.html_url}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {userData.html_url}
                </a>
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{userData.location}</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>{userData.bio}</td>
            </tr>
            <tr>
              <td>Public Repos</td>
              <td>{userData.public_repos}</td>
            </tr>
            <tr>
              <td>Followers</td>
              <td>{userData.followers}</td>
            </tr>
            <tr>
              <td>Following</td>
              <td>{userData.following}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{new Date(userData.created_at).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td>Updated At</td>
              <td>{new Date(userData.updated_at).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
