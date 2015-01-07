dbname= "STABLEAPP";
//id TEXT NOT NULL, data1 TEXT NULL, data2 TEXT NULL, data3 TEXT NULL

function startDB() {
 var db = window.openDatabase("Database", "1.0", dbname, 2000000);
 db.transaction(populateDB, errorCB, successCB);
}




function populateDB(tx){

var formdata1Get = localStorage['myID']; // get data from localStorage
var formdata2Get = localStorage['myID2'];
var formdata3Get = localStorage['mySettings'];
var new_idGet = '1';


tx.executeSql('CREATE TABLE IF NOT EXISTS '+dbname+' (id TEXT NOT NULL, data1 TEXT NULL, data2 TEXT NULL, data3 TEXT NULL)'); 



if(localStorage['myID2']!=""){
tx.executeSql('INSERT INTO '+dbname+' (id, data1, data2, data3) VALUES (\"' + new_idGet + '\"' + ', \"' + formdata1Get + '\", \"' + formdata2Get + '\", \"' + formdata3Get + '\")');}



queryDB(tx);

}





function queryDB(tx) {
 tx.executeSql("SELECT * FROM "+dbname, [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
 var len = results.rows.length;
 
 var i =3;
 /*var thedata = results.rows.item(i).id;*/
 var thedata = "\nID = " + results.rows.item(i).id +
 "\ndata1 = " + results.rows.item(i).data1 +
 "\ndata2 = " + results.rows.item(i).data2 +
 "\ndata3 = " + results.rows.item(i).data3 + "\n";

var theinfo = results.rows.item(i).data1;
//alert(thedata);

localStorage['myID'] = results.rows.item(i).data1; // get data from localStorage
localStorage['myID2'] = results.rows.item(i).data2;
localStorage['mySettings'] = results.rows.item(i).data3;





if(theinfo==""){window.open("intro.html","_parent");}else{window.open("selection.html","_parent");}
// console.log("_______ Success! _______");

}



function successCB() {
 console.log("_______ Success! _______");
}

function errorCB(err) {
 if (err.code == "0") {
 console.log("0 - UNKNOWN_ERR: The transaction failed for reasons unrelated to the database itself and not covered by any other error code.");
 window.open("intro.html","_parent");
 }
 if (err.code == "1") {
 console.log("1 - DATABASE_ERR: The statement failed for database reasons not covered by any other error code.");
 }
 if (err.code == "2") {
 console.log("2 - VERSION_ERR: The operation failed because the actual database version was not what it should be. For example, a statement found that the actual database version no longer matched the expected version of the Database or DatabaseSync object, or the Database.changeVersion() or DatabaseSync.changeVersion() methods were passed a version that doesn't match the actual database version.");
 }
 if (err.code == "3") {
 console.log("3 - TOO_LARGE_ERR: The statement failed because the data returned from the database was too large. The SQL 'LIMIT' modifier might be useful to reduce the size of the result set.");
 }
 if (err.code == "4") {
 console.log("4 - QUOTA_ERR: The statement failed because there was not enough remaining storage space, or the storage quota was reached and the user declined to give more space to the database.");
 }
 if (err.code == "5") {
 console.log("5 - SYNTAX_ERR: The statement failed because of a syntax error, or the number of arguments did not match the number of ? placeholders in the statement, or the statement tried to use a statement that is not allowed, such as BEGIN, COMMIT, or ROLLBACK, or the statement tried to use a verb that could modify the database but the transaction was read-only.");
 }
 if (err.code == "6") {
 console.log("6 - CONSTRAINT_ERR: An INSERT, UPDATE, or REPLACE statement failed due to a constraint failure. For example, because a row was being inserted and the value given for the primary key column duplicated the value of an existing row.");
 }
 if (err.code == "7") {
 console.log("7 - TIMEOUT_ERR: A lock for the transaction could not be obtained in a reasonable time.");
 }
 //alert(err.code);
}



startDB();