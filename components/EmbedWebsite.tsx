import { FC } from 'react'

export interface EmbedWebsiteProps {
  url: string
}

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
