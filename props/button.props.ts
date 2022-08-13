import { ReactChild } from 'react'
import { LinkType } from '../enums/link-type.enum'

export default interface ButtonProps {
  disabled?: boolean
  type?: LinkType
  url: string
  title: string
  children?: ReactChild | ReactChild[]
}
