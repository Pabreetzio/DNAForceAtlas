import * as idb from 'idb';
export interface AncestryData extends idb.DBSchema{
    test: {
        key: string;
        value: {
            publicDisplayName: string,
            displayName: string,
            displayInitials: string,
            adminDisplayName: string,
            adminDisplayInitials: string,
            subjectGeneder: string,
            subjectIsAdmin: boolean,
            userId: string,
            id: string,
            createdDate: string
        }
    };
    relationship: {
        value: {
            meiosis: number;
            sharedCentimorgans: number;
            sharedSegments: number;
            confidence: number;
            id: string;
        };
        key: string;
    };
    testRelationship: {
        value: {
            testId: string;
            relationshipId: string;
        };
        key: string;
    };
}