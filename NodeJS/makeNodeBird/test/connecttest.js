const oracledb = require('oracledb');
const config = require('../models/dbconfig.js');

const express = require('express');
const app = express();
const path = require('path');

const server = app.listen(3000, () => {
    console.log('Server is running...');
});

app.get("/dbtest", (req, res) => {
    console.log("DB Test");
    // let resulttest = selectDataBase();
    // console.log('resulttest : ',resulttest);
    selectDataBase();
    // res.send(resulttest);
    res.sendFile(path.join(__dirname, '/testconnect.html'));
});

async function selectDataBase(){
    console.log("DB Connect");

    let connection = await oracledb.getConnection(config);

    let binds = {};
    let options = {
        outFormat: oracledb.OUT_FORMAT_OBJECT
    };

    console.log("DB Select");
    let result = await connection.execute("select * from testtable", binds, options)

    console.log("DB Close");
    console.log(result.rows[0]);
    console.log(result.rows[1]);

    await connection.close();

    console.log('result : ',result);

    return result;
}