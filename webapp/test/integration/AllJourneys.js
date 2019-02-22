jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 pmNotificationSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"pmnotif/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"pmnotif/test/integration/pages/App",
	"pmnotif/test/integration/pages/Browser",
	"pmnotif/test/integration/pages/Master",
	"pmnotif/test/integration/pages/Detail",
	"pmnotif/test/integration/pages/Create",
	"pmnotif/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "pmnotif.view."
	});

	sap.ui.require([
		"pmnotif/test/integration/MasterJourney",
		"pmnotif/test/integration/NavigationJourney",
		"pmnotif/test/integration/NotFoundJourney",
		"pmnotif/test/integration/BusyJourney",
		"pmnotif/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});