import classNames from 'classnames'
import { FC, useState } from 'react'
import StyleProps from '../../props/style.props'

const ImageLoader: FC<{ src: string } & StyleProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleOnLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={classNames(`aspect-video w-full ${props.className}`)}>
      <img src={props.src} onLoad={handleOnLoad} />
      {isLoading && <div>Loading...</div>}
    </div>
  )
}

export default ImageLoader
