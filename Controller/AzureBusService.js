/*const azure = require('azure-sb');

/**
 * Funcion encargada de checkear la existencia de nuevos mensajes
 * @param {*BusService Bus services a utilizar } sbService 
 * @param {*ColaDeTransmision Canal de comunicacion especifico } queueName 
 * @param {*Respuesta} callback 
 */
/*
exports.checkForMessages = function(sbService, queueName, callback) {
    sbService.receiveQueueMessage(queueName, { isPeekLock: true }, function (err, lockedMessage) {
        if (err) {
            if (err == 'No messages to receive') {
                console.log('No messages');
            } else {
                callback(err);
            }
        } else {
            callback(null, lockedMessage);
        }
    });
}
// elimina mensajes, no creo que lo usemos
function processMessage(sbService, err, lockedMsg) {
    if (err) {
        console.log('Error on Rx: ', err);
    } else {
        console.log('Rx: ', lockedMsg);
        sbService.deleteMessage(lockedMsg, function(err2) {
            if (err2) {
                console.log('Failed to delete message: ', err2);
            } else {
                console.log('Deleted message.');
            }
        })
    }
}

var idx = 0;
/**
 * Funcion encargada de enviar mensajes a traves de un canal comunicacion
 * @param {*} sbService 
 * @param {*} queueName 
 * @param {*} msg 
 */
/*exports.sendMessages = function(sbService, queueName,msg, callback) {
    sbService.sendQueueMessage(queueName, msg, function (err) {
        if (err) {
            console.log('Sent message failed Tx: ', err);
        } else {
            console.log('The message was sent properly.');
        }
    });
}*/
/*
var connStr = process.argv[2] || process.env.CONNECTION_STRING;
if (!connStr) throw new Error('Must provide connection string');
var queueName = 'sbqtest';
 
console.log('Connecting to ' + connStr + ' queue ' + queueName);

var sbService = azure.createServiceBusService(connStr);

sbService.createQueueIfNotExists(queueName, function (err) {
  if (err) {
   console.log('Failed to create queue: ', err);
  } else {
   setInterval(checkForMessages.bind(null, sbService, queueName, processMessage.bind(null, sbService)), 5000);
   setInterval(sendMessages.bind(null, sbService, queueName), 15000);
  }
});*/