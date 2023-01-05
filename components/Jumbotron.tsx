import { FC, PropsWithChildren } from 'react'
import DividerLine from './UI/DividerLine'
import dynamic from 'next/dynamic'
import ThreeDLoader from './3D/ThreeDLoader'
import Link from '../models/link.model'

const BackgroundAnimation = dynamic(() => import('./3D/ThreeDContent'), {
  ssr: false,
})

export interface JumbotronProps {
  description: string
  links: Link[]
  name: string
  subheading: string[]
}

const Jumbotron: FC<PropsWithChildren<JumbotronProps>> = (props) => {
  return (
    <>
      <header className="z-10 flex h-screen w-full flex-col items-center justify-between text-center">
        <h1 className="fancy mt-8">{props.name}</h1>
        <div className="flex w-full items-center justify-center">
          {props.children}
        </div>
        <div className="mb-10 flex flex-col items-center gap-2">
          <div className="hidden flex-row gap-4 lg:flex">
            {props.subheading.map((sub, i) => (
              <h2 key={i} className={'w-[300px]'}>
                {sub}
              </h2>
            ))}
          </div>
          <DividerLine fancy />
          <p className="max-w-[75ch]">{props.description}</p>
        </div>
        <ThreeDLoader />
        <BackgroundAnimation />
      </header>
      <DividerLine fancy full />
    </>
  )
}

export default Jumbotron
