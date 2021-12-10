const Resposes = require('../API_Responses');

exports.handler = async event =>{
    console.log('event',event)

    const { connectionId: connectionID } = event.requestContext;
    
    const data = {
        ID: connectionID,
        date: Date.now(),
        messages: []
    }

    await Dynamo.whire(data, tableName)
    return Responses._200({ message: 'connected' });
};