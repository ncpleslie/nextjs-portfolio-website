import { useRouter } from 'next/router'
import Error from 'next/error'
import Footer from '../../components/Footer'
import ProjectService from '../../services/project.service'
import HeadExtended from '../../components/UI/HeadExtended'
import ServiceProvider from '../../utils/service-provider'
import { ServiceKey } from '../../enums/service-key.enum'
import Navbar from '../../components/Navbar/Navbar'
import EmbedWebsite from '../../components/EmbedWebsite'
import { ProjectProps } from '../../components/ProjectCard/ProjectCard'

export async function getStaticPaths() {
  // by returning an empty list, we are forcing each page to be rendered on request.
  // these pages will be rendered on first request.
  // the resultant .html and .json will be cached by the CDN, with the following cache headers
  // cache-control: public,max-age=31536000,stale-while-revalidate
  // this means that the user will receive the pre-computed page on each request
  // and then each page will be recomputed behind the scenes. This means our Cloud Function will
  // be called per request increasing our costs.

  // firebase hosting deployment should invalidate these cached values
  // additionally, a new `next build` will create a new Build ID which is
  // used in the path for the returned .json data file.
  return {
    paths: [],
    fallback: true,
  }
}

// This function gets called at on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }) {
  const projectService = ServiceProvider.get<ProjectService>(ServiceKey.Project)

  try {
    const project = (await projectService.getProjectById(params.pid)).toJSON()

    return {
      props: {
        project,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error(error)
    return { props: {} }
  }
}

// posts will be populated by getStaticProps() at either:
// - build time
// - first request
function Projects(props: ProjectProps) {
  const router = useRouter()

  if (!router.isFallback && !props.project) {
    return <Error statusCode={404} title="No Project with the provided ID" />
  }

  if (router.isFallback) {
    return (
      <div className="container">
        <main>
          <div>Loading...</div>
        </main>
      </div>
    )
  }

  return (
    <>
      <HeadExtended title={props.project.title} />
      <div className="container">
        <main>
          <Navbar name={'Nick Leslie'} links={[]} />
          {props.project.projectUrl && (
            <EmbedWebsite url={props.project.projectUrl} />
          )}
          <h1 className="title">{props.project.title}</h1>
          <p className="description">{props.project.description}</p>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Projects
