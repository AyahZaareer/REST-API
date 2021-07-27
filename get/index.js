const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        let data;
        if (id) {
            const result = await peopleModel.query('id').eq(id).exec();
            data = result[0];
        } else {
            data = await peopleModel.scan().exec();
        }
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (e) {
        return {
            status: 500,
            message: e.message,
        }
    }
}