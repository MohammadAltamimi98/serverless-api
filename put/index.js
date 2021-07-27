// this will be our lambda handle file
const peopleModel = require('./people.schema.js');


exports.handler = async (event) => {
  try {


    const id = event?.pathParameters?.id;
    const { name, age, occupation } = JSON.parse(event.body);



    const data = await peopleModel.update({ "id": id }, { name, age, occupation })
    return {
      statusCode: 201, // for creation
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};


