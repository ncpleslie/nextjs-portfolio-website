import DB from "../database/db";
import ContactInfo from "../models/contact-info.model";
import Profile from "../models/profile.model";
import BaseService from "./base.service";

export default class ProfileService extends BaseService {
    constructor(db: DB) {
        super(db);
    }

    public async getContactInformation(): Promise<ContactInfo> {
        return (await this.db.getContactInfo()).contactInfo;
    }

    public async getUserInformation(): Promise<Profile> {
        return (await this.db.getProfile()).profile;
    }
}