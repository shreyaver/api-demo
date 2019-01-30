const axios = require('axios');

const getPostsHelper = async () => {
  const responses = await axios.get('http://jsonplaceholder.typicode.com/posts');
  return responses.data;
};
module.exports = getPostsHelper;
