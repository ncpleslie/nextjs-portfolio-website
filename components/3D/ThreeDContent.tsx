import { Loader, useProgress } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense } from 'react'
import StyleProps from '../../props/style.props'
import Retrowave from './Retrowave'

const maxZ = -100
const zOffset = 250

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    if (camera.position.z >= maxZ) {
      camera.position.z = maxZ - (clock.getElapsedTime() * 0.1 - zOffset)

      return
    }
    camera.position.z = clock.getElapsedTime() * 0.1 - zOffset
  })
  return null
}

const ThreeDContent: React.FC<StyleProps> = () => {
  const loaded: boolean = useProgress(
    (state: { active: boolean }) => !state.active
  )

  return (
    <div
      className={`absolute -z-10 h-screen w-full ${
        loaded ? 'bg-skin-fill' : 'bg-transparent'
      }`}
    >
      <Canvas
        className={`h-screen`}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.05, 0.5], fov: 25, far: 3000 }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 180)
          camera.position.z = -zOffset
        }}
      >
        <Suspense fallback={null}>
          <Retrowave />
        </Suspense>
        <Dolly />
      </Canvas>
      {/* <Loader containerStyles={{ background: 'rgba(0,0,0,0)' }} /> */}
    </div>
  )
}

export default ThreeDContent
