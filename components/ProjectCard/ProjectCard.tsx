import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { LinkType } from '../../enums/link-type.enum'
import ProjectProps from '../../props/project.props'
import StyleProps from '../../props/style.props'
import ImageLoader from '../UI/ImageLoader'
import Button from '../UI/Button'
import Card from '../UI/Card'
import VideoPlayer from '../UI/VideoPlayer'
import TechnologyPill from './TechnologyPill'
import DividerLine from '../UI/DividerLine'

const ProjectCard: FC<PropsWithChildren<ProjectProps & StyleProps>> = (
  props
) => {
  return (
    <Card className={props.className}>
      <article className="flex flex-col items-center rounded p-6 text-center">
        <Link
          href="/[pid]"
          as={`/${props.project.id}`}
          key={`${props.project.id}`}
        >
          <a>
            <h3 className="h-10">{props.project.title}</h3>
            {!props.project.isVideo && (
              <ImageLoader src={props.project.imageUrl} />
            )}
            {props.project.isVideo && (
              <VideoPlayer
                url={props.project.imageUrl}
                title={props.project.title}
              />
            )}
          </a>
        </Link>
        <div className="my-4 h-32">
          <p>{props.project.description}</p>
        </div>
        <DividerLine />
        <div className="flex flex-row flex-wrap justify-center leading-[2] sm:p-4">
          {props.project.technologies.map((tech: string) => (
            <TechnologyPill key={tech} tech={tech} />
          ))}
        </div>
        <DividerLine />
        <div className="mt-4 flex flex-row gap-8">
          <Button
            className="inverted"
            disabled={!Boolean(props.project.githubUrl)}
            url={props.project.githubUrl}
            type={LinkType.Github}
            title="Github"
          />
          <Button
            className="inverted"
            disabled={!Boolean(props.project.projectUrl)}
            url={`/${props.project.id}`}
            type={LinkType.Project}
            title="see this project"
          />
        </div>
      </article>
    </Card>
  )
}

export default ProjectCard
