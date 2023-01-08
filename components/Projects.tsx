import ErrorProps from '../props/error.props'
import ProjectCard from './ProjectCard/ProjectCard'
import { FC } from 'react'
import DividerLine from './UI/DividerLine'
import Project from '../models/project.model'

export interface ProjectsProps {
  projects: Project[]
}

const Projects: FC<ProjectsProps & ErrorProps> = ({ error, projects }) => {
  return (
    <div className="flex flex-col items-center bg-skin-fill-accent py-10">
      <h2 className="fancy my-4 flex justify-center" id="projects">
        Projects
      </h2>
      <DividerLine className="mb-8" />
      <div className="flex flex-wrap justify-center gap-8">
        {error && <div>Failed to load</div>}
        {!projects && <div>Loading projects...</div>}
        {projects &&
          projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              className="w-full flex-[0_1_95%] md:max-w-[30rem]"
            />
          ))}
      </div>
    </div>
  )
}

export default Projects
