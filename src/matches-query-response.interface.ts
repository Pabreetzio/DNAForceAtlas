import { MatchInterface } from './match.interface';
export interface MatchesQueryResponseInterface{
    bookmarkData: {
        lastMatchesServicePageIdx: number;
        moreMatchesAvailable: boolean;
    }
    matchCount: number;
    matchGroups: [{
        name: {
            id: number;
            key: string;
        };
        matches: [MatchInterface];
    }]
}