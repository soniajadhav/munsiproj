/**
 * Created by monika on 2/8/2017.
 */
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('1.db');

console.log(db);

db.serialize(function() {

    var area1 = "CREATE TABLE IF NOT EXISTS AREA(" +
        "ID INTEGER," +
        "AREA_ID            INTEGER," +
        "AREA               TEXT," +
        "CREATED_BY         INTEGER," +
        "UPDATED_BY         INTEGER," +
        "CREATED_TS         TEXT," +
        "UPDATED_TS         TEXT)";

    db.run(area1);

    var combiDetails = "CREATE TABLE IF NOT EXISTS COMBI(" +
        "ID                 INTEGER," +    //TODO
        "CP_ID              INTEGER," +
        "COMPIPROD_ID       INTEGER," +    //TODO
        "SR                 INTEGER," +    //TODO
        "PROD_ID            INTEGER," +    //TODO
        "PROD_DES           TEXT," +
        "QTY                INTEGER," +
        "CREATED_BY         INTEGER," +
        "UPDATED_BY         INTEGER," +
        "CREATED_TS         TEXT," +      //TODO
        "UPDATED_TS         TEXT)";       //TODO

    db.run(combiDetails);

    var gl = "CREATE TABLE IF NOT EXISTS CRATE_GL(" +
        "ID                 INTEGER," +
        "GL_ID              INTEGER," +
        "C_DATE             TEXT," +      //TODO
        "CUST_ID            INTEGER," +
        "SRC_ENT            TEXT," +      //TODO
        "OP_QTY             INTEGER," +
        "SUP_QTY            INTEGER," +
        "RET_QTY            INTEGER," +
        "CREATED_BY         INTEGER," +
        "UPDATED_BY         INTEGER," +
        "CREATED_TS         TEXT," +     //TODO
        "UPDATED_TS         TEXT)";      //TODO

    db.run(gl);

    var dc = "CREATE TABLE IF NOT EXISTS DC(" +
        "ID                 INTEGER," +
        "DC_NO              INTEGER," +
        "DC_DATE            TEXT," +    //TODO
        "CUST_CODE          TEXT," +    //TODO
        "O_NO               INTEGER," +
        "O_DATE             TEXT," +    //TODO
        "AREA               TEXT," +
        "SMAN_NAME          TEXT," +
        "VAN                TEXT," +
        "GROSS_TOT          REAL," +
        "SCHEME1_TOT        REAL," +
        "SCHEME_TOT         REAL," +
        "DMG_TOT            REAL," +
        "DISC               REAL," +
        "AD                 REAL," +
        "LS                 REAL," +
        "ROFF               INTEGER," + //TODO
        "FIN_AMT            REAL," +
        "REMARKS            TEXT," +
        "COLL_TYPE          TEXT," +   //TODO
        "COLL_DATE          TEXT," +   //TODO
        "COLL_AMT1          REAL," +
        "COLL AMT2          REAL," +
        "DEP_IN             TEXT," +
        "CHQ_NO             INTEGER," +
        "CHQ_DATE           TEXT," +  //TODO
        "DRAWEE_BANK        TEXT," +  //TODO
        "BRANCH             TEXT," +
        "CLEARING_DATE      TEXT," +  //TODO
        "CREATED_BY         INTEGER," +
        "UPDATED_BY         INTEGER," +
        "CREATED_TS         TEXT," +
        "UPDATED_TS         TEXT)";

    db.run(dc);

    var dcDetails = "CREATE TABLE IF NOT EXISTS DC_DETAILS(" +
        "ID                 INTEGER," +
        "DCD_ID             TEXT," +
        "DC_NO              INTEGER," +
        "SR_NO              INTEGER," +
        "PROD_CODE          TEXT," +
        "PROD_DES           TEXT," +
        "PACKAGING          TEXT," +
        "RATE               REAL," +
        "PROD_QTY           INTEGER," +
        "BOX                INTEGER," +
        "FREE               INTEGER," +
        "SCH_1              REAL," +
        "SCHEME_1           REAL," +
        "SCH_2              REAL," +
        "SCHEME_2           REAL," +
        "REPL               INTEGER," +
        "DMG                INTEGER," +
        "DMG_MRP            REAL," +
        "DMG_AMT            REAL," +
        "AMT                REAL," +
        "BATCH_NO           INTEGER," +
        "MRP                REAL," +
        "RET_QTY            INTEGER," +
        "CREATED_BY         INTEGER," +
        "UPDATED_BY         INTEGER," +
        "CREATED_TS         TEXT," +
        "UPDATED_TS         TEXT)";

    db.run(dcDetails);

    var dcpmDetails = "CREATE TABLE IF NOT EXISTS DCPM_DETAILS(" +
        "ID INTEGER," +
        "DCPMD_ID           INTEGER," +
        "PUR_ID             INTEGER," +
        "SR_NO              INTEGER," +
        "PROD_CODE          TEXT," +     //TODO
        "SIZE               INTEGER," +
        "RATE                REAL," +
        "QTY                INTEGER," +
        "FREE               INTEGER," +
        "REPL               INTEGER," +
        "PDATE              TEXT," +
        "S_NAME             TEXT," +
        "INV_NO             INTEGER," +
        "GROSS_TOT          INTEGER," +
        "SCHEME_1           REAL," +
        "SCHEME_2           REAL," +
        "OCT_FRGHT          INTEGER," +
        "APMC_TAX           REAL," +
        "CR_AMT             INTEGER," +
        "DISC               REAL," +
        "TAX_AMT            REAL," +
        "AD                 INTEGER," +
        "LS                 INTEGER," +
        "ROFF               INTEGER," +  //TODO
        "FINAL_AMT          REAL," +  //TODO
        "REMARKS            TEXT," +
        "TAX_AGNST          REAL," +
        "X1                 TEXT," +  //TODO
        "X2                 TEXT," +  //TODO
        "X3                 TEXT," +  //TODO
        "X4                 TEXT," +  //TODO
        "X5                 TEXT," +  //TODO
        "PAID_AMT           REAL," +
        "REF_NO             INTEGER," +
        "CREATED_BY         INTEGER," +
        "UPDATED_BY         INTEGER," +
        "CREATED_TS         TEXT," +
        "UPDATED_TS         TEXT)";

    db.run(dcpmDetails);







});
db.close();