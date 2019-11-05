import * as idb from 'idb';

class AncestryDatabase{
    x = 5;
}

export var sandbox = (async()=> {
    let ancestryDnaDb 
     async function openDB(){
        return await idb.openDB('ancestryDNA', 1, {
            upgrade(upgradeDb, oldVersion, newVersion, transaction) {
                if(!upgradeDb.objectStoreNames.contains('matches')){
                    upgradeDb.createObjectStore('matches', {keyPath: 'testGuid'});
                }
            }    
        });
     }
     return openDB();
     //export ancestryDnaDb;
})();
