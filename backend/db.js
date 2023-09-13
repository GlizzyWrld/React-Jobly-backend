"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;
(function getDb() {

  try {
    if (process.env.NODE_ENV === "production") {
    db = new Client({
      connectionString: getDatabaseUri(),
      ssl: {
        rejectUnauthorized: false
      }
    });
  } else {
    db = new Client({
      connectionString: getDatabaseUri()
    });
  }
  
  db.connect();
  
  } catch (e) {
    console.error(e);
  }
})()

module.exports = db;