var messageLoggingProxy = JSON.parse(context.getVariable("private.MessageLoggingProxy"))
// context.setVariable("messageLoggingProxy1", messageLoggingProxy)
// context.setVariable("messageLoggingProxy2", JSON.stringify(messageLoggingProxy))
var proxyName = context.getVariable("apiproxy.name")
context.setVariable("defaultLogging",false)

for(var i=0; i< messageLoggingProxy.length ; i++){
    if(messageLoggingProxy[i].name == proxyName){
        context.setVariable("defaultLogging",true)
        break;
    }
}
    

context.setVariable("clientRequest", context.getVariable("clientRequest") ? context.getVariable("clientRequest") :JSON.stringify({}));
context.setVariable("targetRequest", context.getVariable("targetRequest") ? context.getVariable("targetRequest") :JSON.stringify({}));
context.setVariable("targetResponse", context.getVariable("targetResponse") ? context.getVariable("targetResponse") :JSON.stringify({}));
context.setVariable("clientResponse", context.getVariable("clientResponse") ? context.getVariable("clientResponse") :JSON.stringify({}));
