jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 pmNotificationSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/pe/pm/curd/pm_curd/test/integration/pages/App",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Browser",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Master",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Detail",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Create",
	"com/pe/pm/curd/pm_curd/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.pe.pm.curd.pm_curd.view."
	});

	sap.ui.require([
		"com/pe/pm/curd/pm_curd/test/integration/MasterJourney",
		"com/pe/pm/curd/pm_curd/test/integration/NavigationJourney",
		"com/pe/pm/curd/pm_curd/test/integration/NotFoundJourney",
		"com/pe/pm/curd/pm_curd/test/integration/BusyJourney",
		"com/pe/pm/curd/pm_curd/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});