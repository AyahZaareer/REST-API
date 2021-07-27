const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParameters ? event.pathParameters.id : null;
        const { name, age } = JSON.parse(event.body);

        let data = {
            id: id,
            name: name,
            age: age,

        }

        const updateRecord = await peopleModel.update(data);


        return {
            statusCode: 200,
            body: JSON.stringify(updateRecord),
        };
    } catch (e) {
        return {
            status: 500,
            message: e.message,
        }
    }
}