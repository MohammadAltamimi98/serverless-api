// this will be our lambda handle file
const peopleModel = require('./people.schema.js');


exports.handler = async (event) => {
  try {
    // event.body={ name:'mohammd',age: 23, occupation: 'student'}
    // this method will help us check for the path without getting the umdefined error
    const id = event?.pathParameters?.id;
    let data;
    //.query => we are searching for the id 
    //.eq >> that is equal to 
    // 
    if (id) {
      const results = await peopleModel.query('id').eq(id).exec();
      data = results[0];// because it will return a single objectin the array (the one we looking for)
    } else {
      await peopleModel.scan().exec();
    }
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


