import Profile from "../profile.model";

export default class ProfileResponse {
    constructor(response: { data: Profile }) {
        this.profile = new Profile(response.data);
    }

    public profile: Profile;
}
