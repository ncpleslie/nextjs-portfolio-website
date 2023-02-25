export default class Project {
  constructor(id: string, data: Project) {
    this.id = id
    this.description = data.description
    this.excludeExample = data.excludeExample ?? false
    this.githubUrl = data.githubUrl
    this.imageUrl = data.imageUrl
    this.order = data.order
    this.projectUrl = data.projectUrl
    this.technologies = data.technologies
    this.title = data.title

    this.isVideo = Boolean(data.imageUrl.includes('youtube'))
  }

  public description: string
  public excludeExample: boolean
  public githubUrl: string
  public id: string
  public imageUrl: string
  public isVideo: boolean
  public order: number
  public projectUrl: string
  public technologies: string[]
  public title: string

  public toJSON() {
    return {
      description: this.description,
      excludeExample: this.excludeExample,
      githubUrl: this.githubUrl,
      imageUrl: this.imageUrl,
      order: this.order,
      projectUrl: this.projectUrl,
      technologies: this.technologies,
      title: this.title,
      id: this.id,
      isVideo: this.isVideo,
    }
  }
}
