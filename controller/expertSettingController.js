const commonFunctions = require("./commonFunctions");

module.exports = {
    async getExpertSetting(req, res) {
	    let getExpertSettingQuery = `SELECT * FROM expert_setting`
      res.send(await commonFunctions.fetchApi(getExpertSettingQuery)) 
	
	},
	
	 async getNetworkConfiguration(req, res) {
	    let getNetworkConfigurationQuery = `SELECT * FROM network_configuration`
      res.send(await commonFunctions.fetchApi(getNetworkConfigurationQuery)) 
	
	},

	async updateExpertSetting(req, res) {
	    		
	      let updateNetworkSettingQuery = `UPDATE expert_setting SET 
                         authorization_system_key = '${req.body.authorization_system_key}',
                         authorization_status = ${req.body.authorization_status},
                         authorization_key = '${req.body.authorization_key}'
                         
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updateNetworkSettingQuery));
	
	},
	
		async updateNetworkConfiguration(req, res) {
	      let updateNetworkConfigurationQuery = `UPDATE network_configuration SET 
                         ip_address = '${req.body.ip_address}',
                         default_getway = '${req.body.default_getway}',
                         DNS = '${req.body.DNS}',
                         server_ip_address = '${req.body.server_ip_address}',
                         is_update_using_internet = ${req.body.is_update_using_internet},
                          internet_update_value = ${req.body.internet_update_value}
                         
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updateNetworkConfigurationQuery));
	
	},
};

