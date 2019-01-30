const axios = require('axios');

const getPostsHelper = async () => {
  const responses = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return responses;
};
module.exports = getPostsHelper;
