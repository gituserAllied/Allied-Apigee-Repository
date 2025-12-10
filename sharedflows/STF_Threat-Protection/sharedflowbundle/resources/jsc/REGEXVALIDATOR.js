// Regex-based request sanitization

var regex = /^[a-zA-Z0-9_\-@.]*$/;

var params = context.getVariable("request.querystring");

var block = false;
 
if (params && params !== "") {

    var decoded = decodeURIComponent(params);

    if (!regex.test(decoded)) {

        block = true;

        context.setVariable("threat.block", true);

        context.setVariable("threat.reason", "Invalid characters detected in query string");

    }

}
 
if (!block) {

    context.setVariable("threat.block", false);

}

 