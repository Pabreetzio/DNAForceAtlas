import { TestInterface } from './test.interface';
import { MatchInterface } from './match.interface';
export class Test implements TestInterface{
    publicDisplayName: string;
    displayName: string;
    displayInitials: string;
    adminDisplayName: string;
    adminDisplayInitials: string;
    subjectGender: string;
    subjectIsAdmin: boolean;
    userId: string;
    id: string;
    createdDate: string;

    constructor(testInterface: TestInterface){
        this.publicDisplayName = testInterface.publicDisplayName;
        this.displayName = testInterface.displayName;
        this.displayInitials = testInterface.displayInitials;
        this.adminDisplayName = testInterface.adminDisplayName;
        this.adminDisplayInitials = testInterface.adminDisplayInitials;
        this.subjectGender = testInterface.subjectGender;
        this.subjectIsAdmin = testInterface.subjectIsAdmin;
        this.userId = testInterface.publicDisplayName;        
        this.id = testInterface.id;
        this.createdDate = testInterface.createdDate;        
    }

    static fromMatch(match: MatchInterface){
        let testInterface = {
            publicDisplayName: match.publicDisplayName,
            displayName: match.displayName,
            displayInitials: match.displayInitials,
            adminDisplayName: match.adminDisplayName,
            adminDisplayInitials: match.adminDisplayInitials,
            subjectGender: match.subjectGender,
            subjectIsAdmin: match.subjectIsAdmin,
            userId: match.publicDisplayName,        
            id: match.testGuid,
            createdDate: match.createdDate,
        }
        return new this(testInterface);
    }
}