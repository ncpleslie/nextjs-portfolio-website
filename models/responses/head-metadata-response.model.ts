import HeadMetadata from '../head-metadata.model'

export default class HeadMetadataResponse {
  constructor(response: { data: HeadMetadata }) {
    this.headMetadata = new HeadMetadata(response.data)
  }

  public headMetadata: HeadMetadata
}
