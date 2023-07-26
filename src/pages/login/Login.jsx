import styles from './login.module.css';

const Login = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginLeft}>
            <h3 className={styles.loginLogo}>CaySocial</h3>
            <span className={styles.loginDesc}>
              Connect with friends and the world around you on CaySocial.
            </span>
          </div>
          <div className={styles.loginRight}>
            <div className={styles.loginBox}>
              <input placeholder="Email" className={styles.loginInput} />
              <input placeholder="Password" className={styles.loginInput} />
              <button className={styles.loginButton}>Log In</button>
              <span className={styles.loginForgot}>Forgot Password</span>
              <button className={styles.loginRegisterButton}>Create a new Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login