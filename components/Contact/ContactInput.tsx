import { FC, HTMLInputTypeAttribute, PropsWithChildren } from 'react'
import classes from './ContactInput.module.css'

export interface InputProps {
  id: string
  type?: HTMLInputTypeAttribute
  name: string
  alt?: string
}

const ContactInput: FC<PropsWithChildren<InputProps>> = ({
  id,
  type,
  name,
  alt,
  children,
}) => {
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
