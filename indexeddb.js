var db;
var dbName = "Matches";
var dbVersion = 1;
var request = indexedDB.open(dbName, dbVersion);
request.onerror = function(event) {
  console.log(`Unable to open an instance of the ${dbName} version ${dbVersion} IndexedDB database.`);
};
request.onsuccess = function(event) {
  db = event.target.result;
};
db.onerror = function(event) {
    // Generic error handler for all errors targeted at this database's
    // requests!
    console.error("Database error: " + event.target.errorCode);
};

request.onupgradeneeded = function(event) { 
    // Save the IDBDatabase interface 
    let upgradedb = event.target.result;

    // Create an objectStore for this database
    if(upgradedb.objectStoreNames.contains("") )
    var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};