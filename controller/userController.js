const commonFunctions = require("./commonFunctions");
const path = require("path");
  var fs = require('fs');

module.exports = {
  //adding user
  async addUser(req, res) {
    let userData = {
      user_name: req.body.user_name,
      pin_code: req.body.pin_code,
      NFC_id: req.body.NFC_id,
      RF_id_id: req.body.RF_id_id,
      photo: req.body.photo,
      finger_print_id: req.body.finger_print_id,
      QR_code_id: req.body.QR_code_id,
      is_active: 1,
      magnetic_strip_code: req.body.magnetic_strip_code,
    };
    let userAddSqlQuery = "INSERT INTO users SET ?";

    res.send(await commonFunctions.addApi(userAddSqlQuery, userData));
  },

  //get users based on thier status(active or blocked)
  async getUsers(req, res) {
    let userFetchQuery = `SELECT * FROM users`;
    res.send(await commonFunctions.fetchApi(userFetchQuery));
  },

  //update user
  async updateUser(req, res) {
    let updateUserQuery = `UPDATE users SET 
                         user_name = '${req.body.user_name}',
                         pin_code = '${req.body.pin_code}',
                         NFC_id = '${req.body.NFC_id}',
                         RF_id_id = '${req.body.RF_id_id}',
                         photo = '${req.body.photo}',
                         finger_print_id = '${req.body.finger_print_id}',
                         QR_code_id = '${req.body.QR_code_id}',
                         magnetic_strip_code = '${req.body.magnetic_strip_code}'
                         
                                 WHERE id = ${req.body.id}`;
                                 
const folderPath = "./images/"+req.body.old_user_name
const newFolderPath = "./images/"+req.body.user_name

    if(!fs.existsSync(newFolderPath))
{
    
    fs.rename(folderPath, newFolderPath, function(err) {
  if (err) {
    return res.send(err);
  } 
})

}

    return res.send(await commonFunctions.updateApi(updateUserQuery));
  },

  //delete user
  async deleteUser(req, res) {
    let deleteUserQuery = `DELETE FROM users WHERE id = ${req.body.id}`;
    res.send(await commonFunctions.deleteApi(deleteUserQuery));
  },

  async activateOrBlockUser(req, res) {
    let activateOrBlockUserQuery = `UPDATE users SET 
                        is_active=${req.body.is_active}
                                 WHERE id = ${req.body.id}`;
    res.send(await commonFunctions.updateApi(activateOrBlockUserQuery));
  },
};
