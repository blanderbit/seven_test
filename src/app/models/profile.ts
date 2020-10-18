const uiid = () => Math.random().toString(36).substring(7);

export class IProfile {
    constructor(init?: Partial<IProfile>) {
        Object.assign(this, {
            ...init,
            id: uiid()
        });
    }

    id: number;
    name: string;
    surname: string;
    username: string;
    country: string;
    aboutMe: string;
    city: string;
    languages: string[];
    reviews: {
        rating: number,
        count: number
    };
    // tslint:disable-next-line:variable-name
    profilePicture: string;
    isOwnProfile = false;
}
