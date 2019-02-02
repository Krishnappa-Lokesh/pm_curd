jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/pe/pm/curd/pm_curd/test/integration/pages/App",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Browser",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Master",
	"com/pe/pm/curd/pm_curd/test/integration/pages/Detail",
	"com/pe/pm/curd/pm_curd/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.pe.pm.curd.pm_curd.view."
	});

	sap.ui.require([
		"com/pe/pm/curd/pm_curd/test/integration/NavigationJourneyPhone",
		"com/pe/pm/curd/pm_curd/test/integration/NotFoundJourneyPhone",
		"com/pe/pm/curd/pm_curd/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});