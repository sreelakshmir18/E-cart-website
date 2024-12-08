import React from 'react'

function Login() {
  return (
    <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}>Login to your Account</h2>
      <p style={styles.subtitle}>Enter to continue and explore within your grasp</p>

      <div style={styles.inputContainer}>
        <label style={styles.label}>
          <span style={styles.icon}>
            <img src="/images/email-icon.png" alt="emailicon" style={styles.iconImage} />
          </span>
          <input
            type="text"
            placeholder="Enter email or phone"
            style={styles.input}
          />
        </label>
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}>
          <span style={styles.icon}>
            <img src="/images/password.png" alt="lock icon" style={styles.iconImage} />
          </span>
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />
          <span style={styles.eyeIcon}>
            <img src="/images/eye.svg" alt="show password" style={styles.iconImage} />
          </span>
        </label>
      </div>

      <div style={styles.options}>
        <label style={styles.rememberMe}>
          <input type="checkbox" style={styles.checkbox} />
          Remember Me
        </label>
        <a href="#" style={styles.forgotPassword}>Forgot password?</a>
      </div>

      <button type="submit" style={styles.loginButton}>Login to Continue</button>

      <p style={styles.signupText}>
        Don't have an account? <a href="/Signup" style={styles.signupLink}>Sign up</a>
      </p>
    </div>
  </div>
  )
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '150vh',
      backgroundColor: '#e0e0e0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  
      backgroundImage: 'url(/images/Loginimage.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#e0e0e0',
    },
    card: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '30px',
      width: '500px',
      height: '500px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      alignItems: 'center',
      marginRight: '500px',
  
    },
    title: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#2c2c54',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#909090',
      marginBottom: '20px',
    },
    inputContainer: {
      marginBottom: '20px',
    },
    label: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      position: 'absolute',
      left: '12px',
    },
    iconImage: {
      width: '20px',
      height: '20px',
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 40px',
      border: '2px solid #f6e58d',
      borderRadius: '4px',
      fontSize: '16px',
      outline: 'none',
      color: '#333',
    },
    eyeIcon: {
      position: 'absolute',
      right: '12px',
      cursor: 'pointer',
    },
    options: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    rememberMe: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      color: '#2c2c54',
    },
    checkbox: {
      marginRight: '8px',
    },
    forgotPassword: {
      fontSize: '14px',
      color: '#2c2c54',
      textDecoration: 'none',
    },
    loginButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2c2c54',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    signupText: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#909090',
    },
    signupLink: {
      color: '#f6e58d',
      textDecoration: 'none',
    },
  };
  

export default Login