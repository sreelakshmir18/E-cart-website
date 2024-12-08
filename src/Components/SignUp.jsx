import React from 'react'

function SignUp() {
  return (
    <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.title}>Create Account</h2>
      <p style={styles.subtitle}>Follow the instructions to make it easier to register and you will be able to explore inside.</p>

      <div style={styles.inputContainer}>
        <span role="img" aria-label="user" style={styles.icon}>
          <img src="/images/Loginimg.svg" alt="" />
        </span>
        <input type="text" placeholder="Username" style={styles.input} />
      </div>

      <div style={styles.inputContainer}>
        <span role="img" aria-label="email" style={styles.icon}>
          <img src="/images/useremail.svg" alt="" />
        </span>
        <input type="email" placeholder="Email" style={styles.input} />
      </div>

      <div style={styles.inputContainer}>
        <span role="img" aria-label="lock" style={styles.icon}>
          <img src="/images/pwd.svg" alt="" />
        </span>
        <input type="password" placeholder="Password" style={styles.input} />
      </div>

      <button style={styles.signupButton}>Create Account</button>

      <div style={styles.socialContainer}>
        <button style={styles.socialButton}>
          <img src="/images/googlelogo.png" alt="" style={styles.socialIcon} width={'100px'} height={'100px'} />
          
        </button>
        <button style={styles.socialButton}>
          <img src="/images/facebooklogo.png" alt="Facebook" style={styles.socialIcon} width={'100px'} height={'100px'} />
          
        </button>
      </div>
    </div>
  </div>
  )
}

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#e0e0e0',
      backgroundImage: 'url(/images/signuplogo.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#e0e0e0',
  
  
  
  
    },
    card: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '20px',
      width: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
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
      position: 'relative',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #f6e58d',
      borderRadius: '4px',
      padding: '12px',
    },
    icon: {
      marginRight: '10px',
    },
    input: {
      border: 'none',
      outline: 'none',
      fontSize: '16px',
      flex: '1',
    },
    signupButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2c2c54',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    socialContainer: {
      display: 'flex',
      justifyContent:'space-between',
      marginTop: '10px',
      width:'100%',
      height:'100%',
    },
    socialButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px',
      width: '48%',
      border: '1px solid #e0e0e0',
      borderRadius: '2px',
      cursor: 'pointer',
      backgroundColor: '#fff',
    },
    socialIcon: {
      marginRight: '2px',
    },
  };
  

export default SignUp