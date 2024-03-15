import { MouseEventHandler } from 'react'

type ButtonType = {
  action: MouseEventHandler<HTMLButtonElement>
  label: string
}

const Button: React.FC<ButtonType> = ({ action, label }) => {
  return <button onClick={action}>{label}</button>
}

export default Button
