import { JSX } from 'solid-js'
import styles from './Form.module.scss'

type FormFrameProps = {
  children: JSX.Element
}

const FormFrame = ({ children }: FormFrameProps) => (
  <section class={styles.root}>{children}</section>
)

export default FormFrame
