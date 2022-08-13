import { HTMLInputTypeAttribute } from 'react'

export default interface InputProps {
  id: string
  type?: HTMLInputTypeAttribute
  name: string
  alt?: string
}
