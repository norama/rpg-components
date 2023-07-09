import styles from './Form.module.scss'

type ResetButtonProps = {
  onClick: () => void
}

const ResetButton = ({ onClick }: ResetButtonProps) => {
  return (
    <button class={`${styles.button} ${styles.reset}`} type="button" onClick={onClick}>
      ✖
    </button>
  )
}

export default ResetButton
