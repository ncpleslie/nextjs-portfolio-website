import classNames from 'classnames'
import { FC } from 'react'
import StyleProps from '../../props/style.props'

const VideoPlayer: FC<{ url: string; title: string } & StyleProps> = (
  props
) => {
  return (
    <iframe
      className={classNames(`aspect-video w-full ${props.className}`)}
      src={props.url}
      title={props.title}
    ></iframe>
  )
}

export default VideoPlayer
