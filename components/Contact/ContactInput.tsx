import { FC, PropsWithChildren } from 'react'
import InputProps from '../../props/input.props'
import classes from './ContactInput.module.css'

const ContactInput: FC<PropsWithChildren<InputProps>> = ({ id, type, name, alt, children }) => {
  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        id={id}
        name={name}
        type={type}
        required
        alt={alt}
        placeholder=" "
      />
      <label className={classes.label} htmlFor={id}>
        {children}
      </label>
    </div>
  )
}

export default ContactInput
