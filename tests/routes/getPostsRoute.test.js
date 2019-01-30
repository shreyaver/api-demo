const axios = require('axios');
const serverObj = require('../../server.js');

describe('the posts route', () => {
  const options = {
    method: 'GET',
    url: '/posts',
  };
  const mockObj = [{
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  }];
  const getMock = jest.spyOn(axios, 'get');
  beforeAll(() => {
    getMock.mockImplementation(() => mockObj);
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should respond with 200 for /GET call', async () => {
    const serverResponse = await serverObj.server.inject(options);
    expect(serverResponse.statusCode).toEqual(200);
  });
  it('should respond with an array', async () => {
    const serverResponse = await serverObj.server.inject(options);
    expect(Array.isArray(serverResponse.result)).toEqual(true);
  });
  it('should respond with an array that has required value', async () => {
    const serverResponse = await serverObj.server.inject(options);
    expect(serverResponse.result).toEqual(mockObj);
  });
});
