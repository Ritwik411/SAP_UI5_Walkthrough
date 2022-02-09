sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
  ],
  function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        //call the parent's init component
        UIComponent.prototype.init.apply(this, arguments);
        //set data model
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var oModel = new JSONModel(oData);
        this.setModel(oModel);
        //set Dialog
        //_ is used to refer to private methods
        this._helloDialog = new HelloDialog(this.getRootControl());
      },
      exit: function () {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },
      openHelloDialog: function () {
        console.log("Open Hello Dialog");
        this._helloDialog.open();
      },
    });
  }
);
