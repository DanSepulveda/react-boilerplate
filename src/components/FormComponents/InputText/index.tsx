import { styles } from './styles'
import { Input } from './types'

export const InputText = ({ name, label, register, error }: Input) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        {...register(name)}
        type="text"
        id={name}
      />
      <div className={styles.error}>{error}</div>
    </div>
  )
}
