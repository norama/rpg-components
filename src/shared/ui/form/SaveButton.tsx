import styles from './Form.module.scss'

const SaveButton = () => {
  return (
    <button class={`${styles.button} ${styles.save}`} type="submit">
      ✓
    </button>
  )
}

export default SaveButton
