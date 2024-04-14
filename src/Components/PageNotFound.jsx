import React from 'react'

function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! Page not found.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  message: {
    fontSize: '1.5rem',
    color: '#555',
  },
};
export default PageNotFound