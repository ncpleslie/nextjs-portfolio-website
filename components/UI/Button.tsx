import classNames from 'classnames'
import Link from 'next/link'
import { FC, forwardRef, useEffect, useState } from 'react'
import { LinkType } from '../../enums/link-type.enum'
import ButtonProps from '../../props/button.props'
import StyleProps from '../../props/style.props'

const Button: FC<ButtonProps & StyleProps> = ({
  type,
  title,
  disabled,
  url,
  children,
  className,
}) => {
  const [btnTitle, setBtnTitle] = useState<string>()
  const [icon, setIcon] = useState<string>()

  useEffect(() => {
    let titleValue = ''
    let iconPath = ''
    switch (type) {
      case LinkType.Contact:
        titleValue = 'contact me'
        iconPath = '/icons/email.svg'
        break
      case LinkType.Github:
        titleValue = 'GitHub'
        iconPath = '/icons/github.svg'
        break
      case LinkType.LinkedIn:
        titleValue = 'LinkedIn'
        iconPath = '/icons/linkedin.svg'
        break
      case LinkType.Resume:
        titleValue = 'my Resume/CV'
        iconPath = '/icons/resume.svg'
        break
      case LinkType.Project:
        titleValue = 'Projects'
        iconPath = '/icons/screen.svg'
        break
      default:
        titleValue = ''
        iconPath = ''
        break
    }

    setBtnTitle(title || titleValue)
    setIcon(iconPath)
  }, [])

  return (
    <Link href={disabled ? '' : url}>
      <a
        className={classNames(`btn ${className}`, { disabled: disabled })}
        title={btnTitle && `Navigate to ${btnTitle}`}
      >
        {type && <img className="w-8" src={icon} />}
        <p>{children}</p>
      </a>
    </Link>
  )
}

export default Button
