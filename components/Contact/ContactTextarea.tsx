import { FC, PropsWithChildren } from 'react'
import { InputProps } from './ContactInput'
import classes from './ContactInput.module.css'

const ContactTextarea: FC<PropsWithChildren<InputProps>> = ({
  id,
  name,
  children,
}) => {
  return (
    <div className={classes.container}>
      <textarea className={classes.input} id={id} name={name} placeholder=" " />
      <label className={classes.label} htmlFor={id}>
        {children}
      </label>
    </div>
  )
}

export default ContactTextarea
