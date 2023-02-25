import Footer from '../components/Footer'
import ProjectService from '../services/project.service'
import Project from '../models/project.model'
import HeadExtended from '../components/UI/HeadExtended'
import ServiceProvider from '../utils/service-provider'
import { ServiceKey } from '../enums/service-key.enum'
import Jumbotron, { JumbotronProps } from '../components/Jumbotron'
import ProfileService from '../services/profile.service'
import ErrorProps from '../props/error.props'
import Contact, { ContactProps } from '../components/Contact'
import Projects from '../components/Projects'
import { FC, useEffect, useState } from 'react'
import ExternalProjectModal from '../components/UI/ExternalProjectModal'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import MetadataService from '../services/metadata.service'
import HeadMetadata from '../models/head-metadata.model'

const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
  ssr: false,
})

const revalidationTimeInSecs = 300

export async function getStaticProps() {
  const projectService = ServiceProvider.get<ProjectService>(ServiceKey.Project)
  const profileService = ServiceProvider.get<ProfileService>(ServiceKey.Profile)
  const metadataService = ServiceProvider.get<MetadataService>(
    ServiceKey.Metadata
  )

  try {
    const projects = (await projectService.getProjects()).map((p: Project) =>
      p.toJSON()
    )
    const profile = (await profileService.getUserInformation()).toJSON()
    const contact = (await profileService.getContactInformation()).toJSON()
    const headMetadata = (await metadataService.getHeadMetadata()).toJSON()

    return {
      props: {
        projects,
        profile,
        contact,
        headMetadata,
      },
      revalidate: revalidationTimeInSecs,
    }
  } catch (error) {
    return {
      props: { error },
    }
  }
}

const Home: FC<
  {
    projects: Project[]
    profile: JumbotronProps
    contact: ContactProps
    headMetadata: HeadMetadata
  } & ErrorProps
> = ({ projects, profile, contact, headMetadata, error }) => {
  const router = useRouter()
  const [modalProject, setModalProject] = useState<Project>()

  useEffect(() => {
    const projectQuery = router.query.project
    if (projectQuery) {
      const project = projects.find((project) => project.id === projectQuery)
      if (!project.excludeExample) {
        setModalProject(project)
      }

      return
    }

    setModalProject(undefined)
  }, [router.query])

  return (
    <>
      <HeadExtended
        baseUrl={headMetadata.baseUrl}
        description={headMetadata.description}
        title={headMetadata.title}
      />
      <Jumbotron
        name={profile.name}
        subheading={profile.subheading}
        description={profile.description}
        links={profile.links}
      >
        <Navbar links={profile.links} name={profile.name} />
      </Jumbotron>
      <main>
        <Projects projects={projects} error={error} />
        <Contact email={contact.email} formSpringUrl={contact.formSpringUrl} />
      </main>
      <Footer />
      {modalProject && (
        <ExternalProjectModal
          project={modalProject}
          onClose={() => {
            router.push('/', undefined, { scroll: false })
          }}
        />
      )}
    </>
  )
}

export default Home
