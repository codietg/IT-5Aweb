import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // define the styles object used in the JSX
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      padding: 16,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: 320,
    },
    input: {
      padding: '8px 10px',
      borderRadius: 4,
      border: '1px solid #ccc',
      fontSize: 14,
    },
    button: {
      padding: '10px 12px',
      borderRadius: 4,
      border: 'none',
      backgroundColor: '#1976d2',
      color: '#fff',
      fontSize: 14,
      cursor: 'pointer',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>
        <label>Email:</label>
       <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

