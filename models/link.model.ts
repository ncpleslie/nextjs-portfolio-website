import { LinkType } from "../enums/link-type.enum";

export default class Link {
    public url: string;
    public type: LinkType;
    public title?: string;
}