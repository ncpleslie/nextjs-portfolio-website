import classNames from 'classnames'
import { FC } from 'react'
import StyleProps from '../../props/style.props'

interface DividerLineProps {
  fancy?: boolean
  full?: boolean
}

const DividerLine: FC<DividerLineProps & StyleProps> = ({
  fancy,
  full,
  className,
}) => {
  return (
    <div
      className={classNames(
        `line ${full ? 'w-full' : 'w-[60%]'} ${className}`,
        { fancy: fancy }
      )}
    />
  )
}

export default DividerLine
