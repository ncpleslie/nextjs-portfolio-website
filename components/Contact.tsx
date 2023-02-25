import classNames from 'classnames'
import StyleProps from '../props/style.props'
import ContactInput from './Contact/ContactInput'
import ContactTextarea from './Contact/ContactTextarea'
import DividerLine from './UI/DividerLine'
import React from 'react'

export interface ContactProps {
  email: string
  formSpringUrl: string
}

const Contact: React.FC<ContactProps & StyleProps> = (props) => {
  return (
    <div
      className={classNames(
        'flex w-full flex-col items-center justify-center bg-skin-fill py-10',
        props.className
      )}
      id="contact"
    >
      <h3>Contact Me</h3>
      <div className="flex flex-row gap-2">
        <p>Contact me at</p>
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </div>

      <DividerLine className="my-6" />

      <form
        className="flex w-full flex-col items-center px-8 md:w-[60%] md:px-0"
        action={props.formSpringUrl}
        method="POST"
      >
        <ContactInput
          id={'input-1'}
          type={'email'}
          name={'_replyto'}
          alt={'Your Email'}
        >
          Email
        </ContactInput>

        <ContactInput
          id={'input-2'}
          type={'text'}
          name={'name'}
          alt={'Your Name'}
        >
          Name
        </ContactInput>

        <ContactTextarea id={'message'} name={'message'}>
          Your Message
        </ContactTextarea>

        <button className="btn max-w-lg text-gray-400" type="submit">
          Send me a message
        </button>
      </form>
    </div>
  )
}

export default Contact
