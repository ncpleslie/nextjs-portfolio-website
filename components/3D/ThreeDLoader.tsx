const ThreeDLoader: React.FC = () => {
  return (
    <div
      className={`absolute -z-10 h-screen w-full bg-skin-fill bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: 'url(/retrowave_background.jpg)',
      }}
    ></div>
  )
}

export default ThreeDLoader
