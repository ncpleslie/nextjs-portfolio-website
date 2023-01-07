import DB from '../database/db'
import HeadMetadata from '../models/head-metadata.model'
import BaseService from './base.service'

export default class MetadataService extends BaseService {
  constructor(db: DB) {
    super(db)
  }

  public async getHeadMetadata(): Promise<HeadMetadata> {
    return (await this.db.getHeadMetadata()).headMetadata
  }
}
