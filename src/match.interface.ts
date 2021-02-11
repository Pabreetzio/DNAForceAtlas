import { RelationshipDetailInterface} from './relationship-detail.interface';
export interface MatchInterface{
    adminDisplayInitials: string;
    adminDisplayName: string;
    adminUcdmId?: string;
    createdDate: string;
    currentUser: {
        id: string;
        isAdmin: boolean;
        isEditor: boolean;
        isGuest: boolean;
        isOwner: boolean;
    };
    displayInitials: string;
    displayName: string;
    ignored: boolean;
    publicDisplayName: string;
    relationship: RelationshipDetailInterface;
    starred: boolean;
    subjectGender: string;
    subjectIsAdmin: boolean;
    subjectIsCurrentUser: boolean;
    tags: [any];
    testGuid: string;
    userId: string;
    userPhoto: string;
    viewed: boolean;
}