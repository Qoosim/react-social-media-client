import styles from './register.module.css';

const Register = () => {
  return (
    <>
      <div className={styles.register}>
        <div className={styles.registerWrapper}>
          <div className={styles.registerLeft}>
            <h3 className={styles.registerLogo}>CaySocial</h3>
            <span className={styles.registerDesc}>
              Connect with friends and the world around you on CaySocial.
            </span>
          </div>
          <div className={styles.registerRight}>
            <div className={styles.registerBox}>
              <input placeholder="Username" className={styles.registerInput} />
              <input placeholder="Email" className={styles.registerInput} />
              <input placeholder="password" className={styles.registerInput} />
              <input placeholder="Password Confirm" className={styles.registerInput} />
              <button className={styles.registerButton}>Sign Up</button>
              <button className={styles.loginButton}>Log Into Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;