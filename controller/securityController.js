const commonFunctions = require("./commonFunctions");

module.exports = {
    async getAuthMode(req, res) {
	    let getAuthModeQuery = `SELECT * FROM authentication_mode`
      res.send(await commonFunctions.fetchApi(getAuthModeQuery)) 
	
	},
	
	  async getAuthType(req, res) {
	    let getAuthTypeQuery = `SELECT * FROM authentication_type`
      res.send(await commonFunctions.fetchApi(getAuthTypeQuery)) 
	
	},
	
	 async getAccessControlSetting(req, res) {
	    let getAccessControlSettingQuery = `SELECT * FROM access_control_setting`
      res.send(await commonFunctions.fetchApi(getAccessControlSettingQuery)) 
	
	},


	async updateAuthMode(req, res) {
	      let updateAuthModeQuery = `UPDATE authentication_mode SET 
                         allow_NFC = ${req.body.allow_NFC},
                         allow_RF_Id = ${req.body.allow_RF_Id},
                         allow_magnetic_strip = ${req.body.allow_magnetic_strip},
                         allow_barcode = ${req.body.allow_barcode},
                         allow_pincode = ${req.body.allow_pincode},
                         allow_face_recognition = ${req.body.allow_face_recognition},
                         allow_finger_print = ${req.body.allow_finger_print}
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updateAuthModeQuery));
	
	},
	
		async updateAuthType(req, res) {
		    						
	      let updateAuthTypeQuery = `UPDATE authentication_type SET 
                         play_wellcome_sound = ${req.body.play_wellcome_sound},
                         display_green_light = ${req.body.display_green_light},
                         play_warning_on_unauthorized_person = ${req.body.play_warning_on_unauthorized_person},
                         display_red_light = ${req.body.display_red_light},
                         send_sms_to_phone = '${req.body.send_sms_to_phone}',
                         send_sms_to_phone = '${req.body.send_sms_to_phone}',
                         record_unauthorized_photo = '${req.body.record_unauthorized_photo}'
                      
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updateAuthTypeQuery));
	
	},
	
		async updateAccessControlSetting(req, res) {
	      let updateAuthTypeQuery = `UPDATE access_control_setting SET 
                         unlock_door_for_seconds = ${req.body.unlock_door_for_seconds},
                         wait_till_person_enters = ${req.body.wait_till_person_enters},
                         wait_second = ${req.body.wait_second},
                         face_recognition_accuracy_rate = ${req.body.face_recognition_accuracy_rate}
                      
                                 WHERE id = ${req.body.id}`;

    res.send(await commonFunctions.updateApi(updateAuthTypeQuery));
	
	},

};

