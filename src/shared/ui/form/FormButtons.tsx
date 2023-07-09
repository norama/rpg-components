import ResetButton from './ResetButton'
import SaveButton from './SaveButton'
import styles from './Form.module.scss'

type FormButtonsProps = {
  onReset: () => void
}

const FormButtons = ({ onReset }: FormButtonsProps) => (
  <div class={styles.controls}>
    <SaveButton /> <ResetButton onClick={onReset} />
  </div>
)

export default FormButtons
