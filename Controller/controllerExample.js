var logica = require('../Logic/logic')
//var azureFunctions = require('../Controller/AzureBusService')

exports.newMessage = function(request, response){
    
    //azureFunctions.sendMessages()
    
    logica.insertSomething(request.body, function(data) {
        response.send(data);
    })
}

exports.allUsers = function(request, response){
    logica.selectAllUsers(function(data) {
        response.send(data);
    })
}
