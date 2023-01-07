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
    <div className={classNames(`aspect-video w-full ${className}`)}>
      <img
        src={src}
        onLoad={handleOnLoad}
        alt={alt}
        height={height ? height : undefined}
        width={width ? width : undefined}
      />
      {isLoading && <div>Loading...</div>}
    </div>
  )
}

export default ImageLoader
