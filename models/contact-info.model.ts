export default class ContactInfo {
  constructor(data: ContactInfo) {
    this.email = data.email
    this.formSpringUrl = data.formSpringUrl
  }

  email: string
  formSpringUrl: string

  public toJSON() {
    return {
      email: this.email,
      formSpringUrl: this.formSpringUrl,
    }
  }
}
