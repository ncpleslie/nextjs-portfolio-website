import ContactInfo from "../contact-info.model";

export default class ContactInfoResponse {
    constructor(response: { data: ContactInfo }) {
        this.contactInfo = new ContactInfo(response.data);
    }

    contactInfo: ContactInfo;
}