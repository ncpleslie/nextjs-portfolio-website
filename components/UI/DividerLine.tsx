import classNames from 'classnames'
import { FC } from 'react'
import StyleProps from '../../props/style.props'

const DividerLine: FC<{ fancy?: boolean } & StyleProps> = ({
  fancy,
  className,
}) => {
  return (
    <div
      className={classNames(`line w-[60%] ${className}`, { fancy: fancy })}
    />
  )
}

export default DividerLine
