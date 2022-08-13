import Link from "../models/link.model";

export default interface JumbotronProps {
    description: string;
    links: Link[];
    name: string;
    subheading: string;
}
