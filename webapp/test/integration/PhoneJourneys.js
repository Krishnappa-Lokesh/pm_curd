jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"pmnotif/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"pmnotif/test/integration/pages/App",
	"pmnotif/test/integration/pages/Browser",
	"pmnotif/test/integration/pages/Master",
	"pmnotif/test/integration/pages/Detail",
	"pmnotif/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "pmnotif.view."
	});

	sap.ui.require([
		"pmnotif/test/integration/NavigationJourneyPhone",
		"pmnotif/test/integration/NotFoundJourneyPhone",
		"pmnotif/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});