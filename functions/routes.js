const adminController = require("../controller/adminController");
const userController = require("../controller/userController");
const securityController = require("../controller/securityController");
const systemController = require("../controller/systemController");
const expertSettingController = require("../controller/expertSettingController");
const imageController = require("../controller/imageController");

module.exports = (app) => {
	app.post("/uploadImage", imageController.uploadImage);
  //admin apis
	app.post("/adminLogin", adminController.adminLogin);
	app.post("/addAdminUser", adminController.addAdminUser);
	app.post("/updateAdminUser", adminController.updateAdminUser);
	app.get("/getAdminUsers", adminController.getAdminUsers);
	app.post("/removeAdminUser", adminController.removeAdminUser);
	app.post("/activateOrDeactivateAdminUser", adminController.activateOrDeactivateAdminUser);
	
	//user apis
	app.post("/addUser", userController.addUser);
	app.get("/getUsers", userController.getUsers);
	app.post("/updateUser", userController.updateUser);
	app.post("/deleteUser", userController.deleteUser);
	app.post("/activateOrBlockUser", userController.activateOrBlockUser);
	
	//auth mode apis
	app.get("/getAuthMode", securityController.getAuthMode);
	app.post("/updateAuthMode", securityController.updateAuthMode);
	
	//auth type apis
	 app.get("/getAuthType", securityController.getAuthType);
	 app.post("/updateAuthType", securityController.updateAuthType);
	 
	 //Access control setting apis
	 app.get("/getAccessControlSetting", securityController.getAccessControlSetting);
	 app.post("/updateAccessControlSetting", securityController.updateAccessControlSetting);
	//system apis
	app.get("/getSystem", systemController.getSystem);
	
	app.get("/getSystemSetting", systemController.getSystemSetting);
	app.post("/updateSystemSetting", systemController.updateSystemSetting);
	
	app.get("/getNetworkSetting", systemController.getNetworkSetting);
	app.post("/updateNetworkSetting", systemController.updateNetworkSetting);
	
	app.get("/getPowerSetting", systemController.getPowerSetting);
	app.post("/updatePowerSetting", systemController.updatePowerSetting);
	
	//Expert Setting apis
	app.get("/getExpertSetting", expertSettingController.getExpertSetting);
	app.post("/updateExpertSetting", expertSettingController.updateExpertSetting);
	app.get("/getNetworkConfiguration", expertSettingController.getNetworkConfiguration);
	app.post("/updateNetworkConfiguration", expertSettingController.updateNetworkConfiguration);
};