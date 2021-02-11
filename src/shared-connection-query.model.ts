import { MatchesQueryResponse } from './matches-query-response.model';
export class SharedConnectionQuery{
    userTestId!: string;
    page!: number;
    compareTestId!: string
    bookmarkDataParam!: string

    constructor(value: {userTestId: string, page: number, compareTestId: string, bookmarkDataParam: string}){
        Object.assign(this, value);
    }
    
    getFetchUrl(){
        return `https://www.ancestry.com/discoveryui-matchesservice/api/samples/${this.userTestId}`
        +`/matchesv2?page=${this.page}&relationguid=${this.compareTestId}`
        + `${this.bookmarkDataParam}`
    }

    getFetchArguments(): any{
        let headers:Headers = new Headers({
            "accept":"application/json, text/plain, */*",
            "accept-language":"en-US,en;q=0.9",
            "cache-control":"no-cache",
            "pragma":"no-cache",
            "x-newrelic-id":"AAAAAAAAAAAAAAAAAAAAAAA="
        });
        let reqInit: RequestInit = {
            "credentials":"include",
            "headers":headers,
            "referrer":`https://www.ancestry.com/discoveryui-matches/compare/${this.userTestId}/with/${this.compareTestId}/sharedmatches`,
            "referrerPolicy":"no-referrer-when-downgrade",
            "body":null,
            "method":"GET",
            "mode":"cors"
        };
        return reqInit;
    }

    getMatchesQueryResponse(){
        return fetch(this.getFetchUrl(), this.getFetchArguments())
        .then((response:any)=>response.json())
        .then(data=> {
            return new MatchesQueryResponse(data);
        });
    }
}