import {
  ComponentType,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import DividerLine from './UI/DividerLine'
import dynamic from 'next/dynamic'
import ThreeDLoader from './3D/ThreeDLoader'
import Link from '../models/link.model'
import StyleProps from '../props/style.props'
import { canRun3dScene } from '../utils/helpers.util'

export interface JumbotronProps {
  description: string
  links: Link[]
  name: string
  subheading: string[]
}

const Jumbotron: FC<PropsWithChildren<JumbotronProps>> = (props) => {
  const [BackgroundAnimation, setBackgroundAnimation] =
    useState<ComponentType<StyleProps>>()
  const [BackgroundAnimationBackup, setBackgroundAnimationBackup] =
    useState<ComponentType<StyleProps>>()

  useEffect(() => {
    // Determine if this computer can run the threejs scene
    const canRun = canRun3dScene()
    if (canRun) {
      const backgroundAnimation = dynamic(() => import('./3D/ThreeDContent'), {
        ssr: false,
      })

      setBackgroundAnimation(backgroundAnimation)

      return
    }

    const backgroundAnimation = dynamic(
      () => import('./3D/ThreeDContentBackup'),
      {
        ssr: false,
      }
    )

    setBackgroundAnimationBackup(backgroundAnimation)
  }, [])

  return (
    <>
      <header className="z-10 flex h-screen w-full flex-col items-center justify-between text-center">
        <h1 className="fancy mt-8">{props.name}</h1>
        <div className="flex w-full items-center justify-center">
          {props.children}
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          <div className="hidden flex-row gap-4 lg:flex">
            {props.subheading.map((sub, i) => (
              <h2 key={i} className={'w-[300px]'}>
                {sub}
              </h2>
            ))}
          </div>
          <DividerLine fancy />
          <div className="flex w-full justify-center bg-gradient-to-t from-black pb-10">
            <p className="max-w-[75ch]">{props.description}</p>
          </div>
        </div>
        <ThreeDLoader />
        {BackgroundAnimation && <BackgroundAnimation />}
        {BackgroundAnimationBackup && <BackgroundAnimationBackup />}
      </header>
      <DividerLine fancy full />
    </>
  )
}

export default Jumbotron
