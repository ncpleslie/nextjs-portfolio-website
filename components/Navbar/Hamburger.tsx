import { FC } from 'react'
import StyleProps from '../../props/style.props'

const Hamburger: FC<StyleProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="space-y-2">
        <div className="h-0.5 w-8 bg-gray-600"></div>
        <div className="h-0.5 w-8 bg-gray-600"></div>
        <div className="h-0.5 w-8 bg-gray-600"></div>
      </div>
    </div>
  )
}

export default Hamburger
