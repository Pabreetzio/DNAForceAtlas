export class AncestryQueryService{
    getSharedConnections(sharedConnectionQueryParams:any){


        let fetchUrl =`https://www.ancestry.com/discoveryui-matchesservice/api/samples/${sharedConnectionQueryParams.userTestId}`
            +`/matchesv2?page=${sharedConnectionQueryParams.page}&relationguid=${sharedConnectionQueryParams.compareTestId}`
            + `${sharedConnectionQueryParams.bookmarkDataParam}`
    
    }

}