import { FC, PropsWithChildren } from 'react'
import JumbotronProps from '../props/jumbotron.props'
import ThreeDContent from './3D/ThreeDContent'
import DividerLine from './UI/DividerLine'

const Jumbotron: FC<PropsWithChildren<JumbotronProps>> = (props) => {
  return (
    <header className="z-10 flex h-screen w-full flex-col items-center justify-start gap-2 text-center">
      <div className="flex h-1/2 flex-col items-center justify-start gap-2">
        <h1 className="fancy">{props.name}</h1>
        <div className="flex-row gap-4 md:flex">
          {props.subheading.split('|').map((sub, i) => (
            <h2 key={i} className={'w-[300px]'}>
              {sub}
            </h2>
          ))}
        </div>
        {/* <h2 className="before:content-['|']">{props.subheading}</h2> */}
        <DividerLine fancy />
        <p className="max-w-[75ch]">{props.description}</p>
      </div>
      {props.children}
      <ThreeDContent />
    </header>
  )
}

export default Jumbotron
