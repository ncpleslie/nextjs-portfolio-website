import Head from 'next/head'
import { FC } from 'react'
import HeadExtendedProps from '../../props/head-extended.props'

const HeadExtended: FC<HeadExtendedProps> = (props) => {
  const title = `${
    props.title ? props.title + ' | ' : ''
  } Nick Leslie - Software Engineer`

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Monoton&family=Roboto&family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default HeadExtended
