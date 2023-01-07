export default class HeadMetadata {
  constructor(data: HeadMetadata) {
    this.baseUrl = data.baseUrl
    this.description = data.description
    this.title = data.title
  }

  public description: string
  public baseUrl: string
  public title: string

  public toJSON() {
    return {
      baseUrl: this.baseUrl,
      description: this.description,
      title: this.title,
    }
  }
}
