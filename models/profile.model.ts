import Link from './link.model'

export default class Profile {
  constructor(data: Profile) {
    this.description = data.description
    this.links = data.links
    this.name = data.name
    this.subheading = data.subheading
  }

  public description: string
  public links: Link[]
  public name: string
  public subheading: string

  public toJSON() {
    return {
      description: this.description,
      links: this.links,
      name: this.name,
      subheading: this.subheading,
    }
  }
}
