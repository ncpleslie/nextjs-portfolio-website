import PortfolioConstants from '../constants/portfolio.constants'
import Project from '../models/project.model'
import ProjectsResponse from '../models/responses/projects-response.model'
import ProjectResponse from '../models/responses/project-response.model'
import BaseDB from './base-db'
import ProfileResponse from '../models/responses/profile-response.model'
import Profile from '../models/profile.model'
import ContactInfo from '../models/contact-info.model'
import ContactInfoResponse from '../models/responses/contact-info-response.model'
import HeadMetadataResponse from '../models/responses/head-metadata-response.model'
import HeadMetadata from '../models/head-metadata.model'

export default class DB extends BaseDB {
  constructor() {
    super()
  }

  public async getContactInfo(): Promise<ContactInfoResponse> {
    const results = await this.getDocumentById<ContactInfo>(
      PortfolioConstants.contactInfoDbCollectionName,
      PortfolioConstants.profileId
    )

    return new ContactInfoResponse(results)
  }

  public async getHeadMetadata(): Promise<HeadMetadataResponse> {
    const results = await this.getDocumentById<HeadMetadata>(
      PortfolioConstants.metadataDbCollectionName,
      PortfolioConstants.headMetadata
    )

    return new HeadMetadataResponse(results)
  }

  public async getProfile(): Promise<ProfileResponse> {
    const results = await this.getDocumentById<Profile>(
      PortfolioConstants.profileDbCollectionName,
      PortfolioConstants.profileId
    )

    return new ProfileResponse(results)
  }

  public async getProjectById(id: string): Promise<ProjectResponse> {
    const results = await this.getDocumentById<Project>(
      PortfolioConstants.projectsDbCollectionName,
      id
    )

    return new ProjectResponse(results)
  }

  public async getProjects(): Promise<ProjectsResponse> {
    const results = await this.getCollectionByName<Project>(
      PortfolioConstants.projectsDbCollectionName
    )

    return new ProjectsResponse(results)
  }
}
