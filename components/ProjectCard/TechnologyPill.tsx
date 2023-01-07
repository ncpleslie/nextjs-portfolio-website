import { FC } from 'react'

const TechnologyPill: FC<{ tech: string }> = ({ tech }) => {
  return (
    <p className="relative m-0 border-[2px] border-skin-dark-accent px-2 py-2 text-xs font-bold uppercase not-italic text-gray-400">
      {tech}
    </p>
  )
}

export default TechnologyPill
