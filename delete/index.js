const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParamters ? event.pathParamters.id : null;
        const deletedRecord = await peopleModel.delete(id);



        return {
            statusCode: 200,
            body: JSON.stringify(deletedRecord),
        };
    } catch (e) {
        return {
            status: 500,
            e: e.message,
        }
    }
}