import { Loader } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense } from 'react'
import StyleProps from '../../props/style.props'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import('./Retrowave'), {
  suspense: true,
})

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    camera.position.z = clock.getElapsedTime() * 0.2
  })
  return null
}

const ThreeDContent: React.FC<StyleProps> = ({ className }) => {
  return (
    <div className={`absolute -z-10 h-screen w-full bg-skin-fill`}>
      <Canvas
        className={`h-screen`}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0.15, 0.5], fov: 40 }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 180)
        }}
      >
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Dolly />
      </Canvas>
      <Loader />
    </div>
  )
}

export default ThreeDContent
