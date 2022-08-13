import { FC, PropsWithChildren } from 'react'
import JumbotronProps from '../props/jumbotron.props'
import ThreeDContent from './3D/ThreeDContent'
import DividerLine from './UI/DividerLine'

const Jumbotron: FC<PropsWithChildren<JumbotronProps>> = (props) => {
  return (
    <header className="z-10 flex h-screen w-screen flex-col items-center justify-center gap-2 p-4 pt-5 text-center sm:gap-10 sm:p-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="fancy">{props.name}</h1>
        <div className="flex-row gap-4 md:flex">
          {props.subheading.split('|').map((sub, i) => (
            <h2
              key={i}
              className={` ${
                i === props.subheading.split('|').length - 1
                  ? ''
                  : "xlPlusSome:after:content-['|']"
              }`}
            >
              {sub}
            </h2>
          ))}
        </div>
        {/* <h2 className="before:content-['|']">{props.subheading}</h2> */}
        <DividerLine fancy />
        <p className="max-w-[75ch]">{props.description}</p>
      </div>
      {props.children}
      <ThreeDContent className="feather" />
    </header>
  )
}

export default Jumbotron
