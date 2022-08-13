import { FC } from 'react'
import EmbedWebsiteProps from '../props/embed-website.props'

const EmbedWebsite: FC<EmbedWebsiteProps> = (props) => {
  return (
    <object
      className="m-auto h-[90vh] w-[90%]"
      type="text/html"
      data={props.url}
    ></object>
  )
}

export default EmbedWebsite
