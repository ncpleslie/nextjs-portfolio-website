import classNames from 'classnames'
import Link from 'next/link'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { LinkType } from '../../enums/link-type.enum'
import StyleProps from '../../props/style.props'

export interface ButtonProps {
  disabled?: boolean
  type?: LinkType
  url: string
  title: string
}

const Button: FC<PropsWithChildren<ButtonProps & StyleProps>> = ({
  type,
  title,
  disabled,
  url,
  children,
  className,
}) => {
  const [btnTitle, setBtnTitle] = useState<string>()
  const [icon, setIcon] = useState<string>()
  const [newTab, setNewTab] = useState(true)

  useEffect(() => {
    let titleValue = ''
    let iconPath = ''
    switch (type) {
      case LinkType.Contact:
        titleValue = 'contact me'
        iconPath = '/icons/email.svg'
        setNewTab(false)
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
        setNewTab(false)
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
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
      >
        {type && (
          <img
            className="w-8"
            height="32"
            width="32"
            src={icon}
            alt={`Icon of ${btnTitle}`}
          />
        )}
        <p>{children}</p>
      </a>
    </Link>
  )
}

export default Button
