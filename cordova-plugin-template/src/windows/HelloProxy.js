cordova.commandProxy.add("Hello", {
    greet: function (successCallback, errorCallback, strInput) {
        if (!strInput || !strInput.length) {
            errorCallback("Error, something was wrong with the input string. =>" + strInput);
        }
        else {
            successCallback(Hello.Hello.greet(strInput));
        }
    }
});