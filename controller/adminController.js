const commonFunctions = require("./commonFunctions");

module.exports = {
    
 async getAdminUsers(req, res) {
    let adminUserFetchQuery = `SELECT * FROM admin_users`;
    res.send(await commonFunctions.fetchApi(adminUserFetchQuery));
  },

	async adminLogin(req, res) {
	    let adminLoginQuery = `SELECT * FROM admin_users WHERE user_name = '${req.body.user_name}'
	    AND  password = '${req.body.password}' `;
       res.send(await commonFunctions.fetchApi(adminLoginQuery)) 
	
	},
	
	async addAdminUser(req, res) {
    let adminUserData = {
      user_name: req.body.user_name,
      password: req.body.password,
      user_type: req.body.user_type,
      is_active: 1,
    };
    let adminUserAddSqlQuery = "INSERT INTO admin_users SET ?";

    res.send(await commonFunctions.addApi(adminUserAddSqlQuery, adminUserData));
  },
  
   async removeAdminUser(req, res) {
    let deleteAdminUserQuery = `DELETE FROM admin_users WHERE id = ${req.body.id}`;
    res.send(await commonFunctions.deleteApi(deleteAdminUserQuery));
  },
  
   async activateOrDeactivateAdminUser(req, res) {
    let activateOrDeactivateAdminUserQuery = `UPDATE admin_users SET 
                        is_active=${req.body.is_active}
                                 WHERE id = ${req.body.id}`;
    res.send(await commonFunctions.updateApi(activateOrDeactivateAdminUserQuery));
  },
  
   async updateAdminUser(req, res) {
    let updateAdminUserQuery = `UPDATE admin_users SET 
                        user_name ='${req.body.user_name}',
                        password ='${req.body.password}',
                        user_type ='${req.body.user_type}'
                                 WHERE id = ${req.body.id}`;
    res.send(await commonFunctions.updateApi(updateAdminUserQuery));
  },

};

