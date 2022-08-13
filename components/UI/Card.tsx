import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import StyleProps from '../../props/style.props'

const Card: FC<PropsWithChildren<StyleProps>> = (props) => {
  return (
    <div
      className={classNames(
        'rounded border-black bg-skin-fill shadow-full',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}

export default Card
