const oracledb = require('oracledb');
const config = require('../models/dbconfig.js');

oracledb.getConnection(config, (err, conn) =>{
    if(err){
        console.log(err);
        return;
    }
    conn.execute('SELECT * FROM testtable', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result.rows);
    });
})