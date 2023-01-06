import classNames from 'classnames'
import { FC, useMemo } from 'react'
import StyleProps from '../../props/style.props'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const VideoPlayer: FC<{ url: string; title: string } & StyleProps> = ({
  className,
  url,
  title,
}) => {
  const videoId = useMemo(
    () => url.match(/youtube.com\/embed\/(.*)/)?.[1],
    [url]
  )

  return (
    <div className={classNames(`aspect-video w-full ${className}`)}>
      <LiteYouTubeEmbed
        id={videoId}
        adNetwork={false}
        playlist={false}
        poster="hqdefault"
        title={title}
        noCookie={true}
      />
    </div>
  )
}

export default VideoPlayer
