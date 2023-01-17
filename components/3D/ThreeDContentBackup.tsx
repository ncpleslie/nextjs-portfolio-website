import { useDelayedTrigger } from '../../hooks/use_delayed_trigger'

const ThreeDContentBackup = () => {
  const loaded = useDelayedTrigger(1000)

  return (
    <div
      className={`absolute -z-10 h-screen w-full bg-skin-fill bg-cover bg-center bg-no-repeat ${
        loaded ? '' : 'blur'
      } `}
      style={{
        backgroundImage: 'url(/retrowave_background_full.jpg)',
        transition: '2s -webkit-filter linear',
      }}
    ></div>
  )
}

export default ThreeDContentBackup
