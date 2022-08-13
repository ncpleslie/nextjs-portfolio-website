import ProjectsProps from '../props/projects.props'
import ErrorProps from '../props/error.props'
import ProjectCard from './ProjectCard/ProjectCard'
import { FC } from 'react'
import DividerLine from './UI/DividerLine'

const Projects: FC<ProjectsProps & ErrorProps> = (props) => {
  return (
    <div className="flex flex-col items-center bg-skin-fill-accent py-10">
      <h2 className="fancy my-4 flex justify-center" id="projects">
        Projects
      </h2>
      <DividerLine className="mb-8" />
      <div className="flex flex-wrap justify-center gap-8">
        {props.error && <div>Failed to load</div>}
        {!props.projects && <div>Loading projects...</div>}
        {props.projects &&
          props.projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              className="w-screen flex-[0_1_95%] md:max-w-[30rem]"
            />
          ))}
      </div>
    </div>
  )
}

export default Projects
