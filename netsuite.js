/**
@NApiVersion 2.0
@NScriptType ClientScript
@NModuleScope Public
*/
define([], function () {
    function showMessage(context) {
        var message = "This customer has not provided an email address.";
        var email = context.currentRecord.getValue({
            "fieldId": "email"
        });

        if (!email) {
            alert(message);
        }
    }

    return {
        pageInit: showMessage
    };
});


/**
 * https://stoic.software/effective-suitescript/1-your-first-script-for-non-devs/
 */