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
    </Head>
  )
}

export default HeadExtended
