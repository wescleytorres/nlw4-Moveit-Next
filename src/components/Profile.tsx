import styles from '../styles/components/Profile.module.css'


export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wescleytorres.png" alt="Wescley Torres" />
      <div>
        <strong>Wescley Torres</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
          </p>
      </div>
    </div>
  )
}   