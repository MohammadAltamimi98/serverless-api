// this will be our lambda handle file
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    if (id) {
      await peopleModel.delete({ "id": id });
    }
    return {
      statusCode: 200,
      body: JSON.stringify({}) // we return an empty array to indicate that its gone
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};


