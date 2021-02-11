import * as idb from 'idb';
import { AncestryData } from './ancestry-data.model';
import { MatchesQueryResponse } from './matches-query-response.model';
import { AncestryQueryService } from './ancestry-query.service';
import { SharedConnectionQuery } from './shared-connection-query.model';

export var sandbox = (async()=> {
    let ancestryDnaDb 
     async function openDB(){
        return await idb.openDB<AncestryData>('ancestryDNA', 1, {
            upgrade(upgradeDb, oldVersion, newVersion, transaction) {
                if(!upgradeDb.objectStoreNames.contains('test')){
                    upgradeDb.createObjectStore('test', {keyPath: 'testGuid'});
                }
                upgradeDb.createObjectStore('sample', {
                    keyPath: 'testGuid'
                });
                upgradeDb.createObjectStore('relationship', {
                    keyPath: 'id'
                });
                upgradeDb.createObjectStore('testRelationship', {
                    keyPath: 'testId'
                })
            }    
        });
     }
     return openDB();
})();
export { MatchesQueryResponse } from './matches-query-response.model';
console.log(sandbox);

let aqs:AncestryQueryService = new AncestryQueryService();
let scq = new SharedConnectionQuery({
    userTestId: '00000000-0000-0000-0000-000000000000',
    page: 0,
    compareTestId: '00000000-0000-0000-0000-000000000000',
    bookmarkDataParam: ''
});
let matchesQueryResponse = scq.getMatchesQueryResponse();
export { matchesQueryResponse };
(async()=>{
    (await sandbox).transaction('relationship')
})()