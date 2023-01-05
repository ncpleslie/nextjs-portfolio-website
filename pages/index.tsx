import Footer from '../components/Footer'
import ProjectService from '../services/project.service'
import Project from '../models/project.model'
import HeadExtended from '../components/UI/HeadExtended'
import ServiceProvider from '../utils/service-provider'
import { ServiceKey } from '../enums/service-key.enum'
import Jumbotron, { JumbotronProps } from '../components/Jumbotron'
import ProfileService from '../services/profile.service'
import ErrorProps from '../props/error.props'
import Contact from '../components/Contact'
import ContactProps from '../props/contact.props'
import Projects from '../components/Projects'
import { FC } from 'react'
import Navbar from '../components/Navbar/Navbar'

export async function getStaticProps() {
  const projectService = ServiceProvider.get<ProjectService>(ServiceKey.Project)
  const profileService = ServiceProvider.get<ProfileService>(ServiceKey.Profile)

  try {
    const projects = (await projectService.getProjects()).map((p: Project) =>
      p.toJSON()
    )
    const profile = (await profileService.getUserInformation()).toJSON()
    const contact = (await profileService.getContactInformation()).toJSON()

    return {
      props: {
        projects,
        profile,
        contact,
      },
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
  } & ErrorProps
> = ({ projects, profile, contact, error }) => {
  return (
    <>
      <HeadExtended />
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
    </>
  )
}

export default Home
