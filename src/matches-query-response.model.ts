import { MatchInterface } from './match.interface';
import { MatchesQueryResponseInterface } from './matches-query-response.interface';
import { Test } from './test.model';
import { RelationshipInterface } from './relationship.interface';
import { RelationshipDetailInterface } from './relationship-detail.interface';
import { getCommutativeId } from './commutative-id.function';
export class MatchesQueryResponse{
    bookmarkData!: {
        lastMatchesServicePageIdx: number;
        moreMatchesAvailable: boolean;
    }
    matchCount!: number;
    matchGroups!: [{
        name: {
            id: number;
            key: string;
        };
        matches: [MatchInterface];
    }]

    constructor(matchesQueryResponse: MatchesQueryResponseInterface){
        Object.assign(this, matchesQueryResponse);
    }

    get tests(): Test[]{
        let matchTests: Test[] = [];
        this.matchGroups.forEach(matchGroup=>{
            matchGroup.matches.forEach(match=> {
                matchTests.push(Test.fromMatch(match));
            });
        });
        return matchTests;
    }

    getRelationshipDetails(currentTestId: string): RelationshipDetailInterface[]{
        let relationshipDetails: RelationshipDetailInterface[] = [];
        this.matchGroups.forEach(matchGroup=> {
            matchGroup.matches.forEach(match => {
                let relationshipId = getCommutativeId(currentTestId, match.testGuid);
                let relationshipDetail: RelationshipDetailInterface = Object.assign(match.relationship, {relationshipId: relationshipId});
                relationshipDetails.push(relationshipDetail);
            });
        });
        return relationshipDetails;
    }

    getRelationship(testId: string, match: MatchInterface){
        let relationship: RelationshipInterface = {
            id: getCommutativeId(testId, match.testGuid),
            testIds: [testId, match.testGuid]
        };
        return relationship;
    }
    
    getRelationships(currentTestId: string, matchTestId?: string){
        let relationships: RelationshipInterface[] = [];
        this.matchGroups.forEach(matchGroup=>{
            matchGroup.matches.forEach(match=> {
                relationships.push(this.getRelationship(currentTestId, match));
                if(matchTestId){
                    relationships.push(this.getRelationship(matchTestId, match));    
                }
            });
        });
        return relationships;
    }
}