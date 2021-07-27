const peopleModel = require('./people.schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParamters ? event.pathParamters.id : null;
        const { name, age, gender } = JSON.parse(event.body);

        let data = {
            id: id,
            name: name,
            age: age,
            gender: gender,
        }

        const updateRecord = await peopleModel.update(data);


        return {
            statusCode: 200,
            body: JSON.stringify(updateRecord),
        };
    } catch (e) {
        return {
            status: 500,
            e: e.message,
        }
    }
}