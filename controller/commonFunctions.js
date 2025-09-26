const connection = require("../database/db");

module.exports = {
  //Common function to fetch any data
  fetchApi(query) {
    const getResults = new Promise(function (resolve, reject) {
      connection.query(query, (err, row, field) => {
        if (err) {
          resolve([{ errorMessage: "" + err }]);
        }
        resolve(row);
      });
    });
    return getResults;
  },

  //Common function to add any data
  addApi(query, arg) {
    const addResult = new Promise(function (resolve, reject) {
      connection.query(query, arg, function (err, row, field) {
        if (err) resolve([{ statusMessage: "Error: " + err }]);
        else {
          if (row.insertId != "" && row.insertId != null) {
            resolve([{ statusMessage: "true" }]);
          } else resolve([{ statusMessage: "Error: Some thing went wrong" }]);
        }
      });
    });

    return addResult;
  },
  //Common function to delete any data
 async deleteApi(query) {
    return await commonApi(query);
  },

  //Common function to update any data
  async updateApi(query) {
    return await commonApi(query);
  },
};

//common function for all the same sql patterns
function commonApi(sqlQuery) {
  const commonResult = new Promise(function (resolve, reject) {
    connection.query(sqlQuery, function (err, row, field) {
      if (err) resolve([{ statusMessage: "Error: " + err }]);
      else {
        if (row.affectedRows > 0) {
          resolve([{ statusMessage: "true" }]);
        } else resolve([{ statusMessage: "Error: Some thing went wrong" }]);
      }
    });
  });

  return commonResult;
}
