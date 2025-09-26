const commonFunctions = require("./commonFunctions");

module.exports = {
    async getSystem(req, res) {
	    let getSystemQuery = `SELECT * FROM system`
      res.send(await commonFunctions.fetchApi(getSystemQuery)) 
	
	},
	
	async getSystemSetting(req, res) {
	    let getSystemSettingQuery = `SELECT * FROM system_setting`
      res.send(await commonFunctions.fetchApi(getSystemSettingQuery)) 
	
	},
	
   async getNetworkSetting(req, res) {
	    let getNetworkSettingQuery = `SELECT * FROM network_setting`
      res.send(await commonFunctions.fetchApi(getNetworkSettingQuery)) 
	
	},
   async getPowerSetting(req, res) {
	    let getPowerSettingQuery = `SELECT * FROM power_setting`
      res.send(await commonFunctions.fetchApi(getPowerSettingQuery)) 
	
	},


	async updateSystemSetting(req, res) {
	      let updateSystemSettingQuery = `UPDATE system_setting SET 
                         system_version = '${req.body.system_version}',
                         wifi_mac_address = '${req.body.wifi_mac_address}',
                         bluetooth_address = '${req.body.bluetooth_address}',
                         uptime = '${req.body.uptime}',
                         build_number = '${req.body.build_number}',
                         serial_number = '${req.body.serial_number}',
                         
                         hardware_version = '${req.body.hardware_version}',
                         cpu = '${req.body.cpu}',
                         response_time = '${req.body.response_time}',
                         processor = '${req.body.processor}',
                         bluetooth = '${req.body.bluetooth}',
                         passage_width = '${req.body.passage_width}'
                         
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updateSystemSettingQuery));
	
	},
	
	async updateNetworkSetting(req, res) {
	      let updateNetworkSettingQuery = `UPDATE network_setting SET 
                         server_ip_address = '${req.body.server_ip_address}',
                         default_getway = '${req.body.default_getway}'
                         
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updateNetworkSettingQuery));
	
	},
	
		async updatePowerSetting(req, res) {
		    			
	      let updatePowerSettingQuery = `UPDATE power_setting SET 
                         power_supply_input = '${req.body.power_supply_input}',
                         power_voltage = '${req.body.power_voltage}',
                         power_consumption_on_idle = '${req.body.power_consumption_on_idle}', 
                         power_consumption_on_operation = '${req.body.power_consumption_on_operation}', 
                         
                         power = '${req.body.power}'
                         
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updatePowerSettingQuery));
	
	},

};

