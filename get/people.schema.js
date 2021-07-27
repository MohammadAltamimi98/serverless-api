const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: Number,
  occupation: String
})

module.exports = dynamoose.model('people', peopleSchema);
