import classNames from 'classnames'
import { FC, useState } from 'react'
import StyleProps from '../../props/style.props'

interface ImageLoaderProps {
  src: string
  alt: string
  width?: number
  height?: number
}

const ImageLoader: FC<ImageLoaderProps & StyleProps> = ({
  className,
  src,
  alt,
  width,
  height,
}) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleOnLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={classNames(`relative aspect-video ${className}`)}>
      <img
        src={src}
        onLoad={handleOnLoad}
        alt={alt}
        height={height ? height : undefined}
        width={width ? width : undefined}
        loading="lazy"
      />
      {isLoading && <div className="absolute top-0 z-10">Loading...</div>}
    </div>
  )
}

export default ImageLoader
