const Page = require("./Page")

class Main extends Page {
    open() {
        super.open(`#/Main`)
    }

    _viewName = "test.Sample.view.Main"

    getCheckbox() {

        const cbSelector1 = {
            wdio_ui5_key: 'cbSelector1',
            selector: {
                id: 'idCheckbox',
                viewName: this._viewName,
                controlType: 'sap.m.CheckBox'
            }
        };

        return browser.asControl(cbSelector1);
    }
}

module.exports = new Main()
