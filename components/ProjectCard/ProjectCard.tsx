import Link from 'next/link'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { LinkType } from '../../enums/link-type.enum'
import StyleProps from '../../props/style.props'
import ImageLoader from '../UI/ImageLoader'
import Button from '../UI/Button'
import Card from '../UI/Card'
import VideoPlayer from '../UI/VideoPlayer'
import TechnologyPill from './TechnologyPill'
import DividerLine from '../UI/DividerLine'
import Project from '../../models/project.model'

export interface ProjectProps {
  project: Project
}

const ProjectCard: FC<PropsWithChildren<ProjectProps & StyleProps>> = ({
  project,
  className,
}) => {
  const [projectUrl, setProjectUrl] = useState<string>('')
  const [newTab, setNewTab] = useState(true)

  useEffect(() => {
    if (project.projectUrl) {
      setProjectUrl(`/?project=${project.id}`)
      setNewTab(false)
    } else if (project.githubUrl) {
      setProjectUrl(project.githubUrl)
      setNewTab(true)
    } else {
      setProjectUrl('')
      setNewTab(true)
    }

    return () => {
      setProjectUrl('')
      setNewTab(true)
    }
  }, [project])

  return (
    <Card className={className}>
      <article className="flex flex-col items-center gap-2 rounded p-6 text-center">
        {projectUrl ? (
          <>
            <Link href={projectUrl} scroll={false}>
              <a
                target={newTab ? '_blank' : undefined}
                rel={newTab ? 'noopener noreferrer' : undefined}
              >
                <h3 className="fancy h-12">{project.title}</h3>
              </a>
            </Link>

            {project.isVideo ? (
              <VideoPlayer url={project.imageUrl} title={project.title} />
            ) : (
              <Link href={projectUrl} scroll={false}>
                <a
                  target={newTab ? '_blank' : undefined}
                  rel={newTab ? 'noopener noreferrer' : undefined}
                >
                  <ImageLoader
                    src={project.imageUrl}
                    alt={`Image of ${project.title}`}
                    height={243}
                    width={432}
                  />
                </a>
              </Link>
            )}
          </>
        ) : (
          <>
            <h3 className="fancy h-12">{project.title}</h3>
            <ImageLoader
              src={project.imageUrl}
              alt={`Image of ${project.title}`}
              height={243}
              width={432}
            />
          </>
        )}
        <div className="my-4 h-36">
          <p>{project.description}</p>
        </div>
        <DividerLine />
        <div className="flex flex-row flex-wrap justify-center leading-[2] sm:p-4">
          {project.technologies.map((tech: string) => (
            <TechnologyPill key={tech} tech={tech} />
          ))}
        </div>
        <DividerLine />
        <div className="mt-4 flex flex-row gap-8">
          <Button
            className="inverted"
            disabled={!Boolean(project.githubUrl)}
            url={project.githubUrl}
            type={LinkType.Github}
            title="Github"
          />
          <Button
            className="inverted"
            disabled={!Boolean(project.projectUrl)}
            url={project.projectUrl}
            type={LinkType.Project}
            title="see this project"
          />
        </div>
      </article>
    </Card>
  )
}

export default ProjectCard
