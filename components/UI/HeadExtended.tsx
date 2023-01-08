import Head from 'next/head'

export interface HeadExtendedProps {
  title: string
  baseUrl: string
  description: string
}

const HeadExtended: React.FC<HeadExtendedProps> = ({
  title,
  baseUrl,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content="#33333d" />
      <link rel="canonical" href={baseUrl} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/metadata_thumbnail.jpg" />
      <meta name="twitter:title" content="European Travel Destinations " />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/metadata_thumbnail.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default HeadExtended
