const axios = require('axios');
const helperFunction = require('../../src/helpers/getPostsHelper.js');

describe('getPostsHelper', () => {
  const mockObj = {
    data: [{
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }],
  };
  const getMock = jest.spyOn(axios, 'get');
  beforeAll(() => {
    getMock.mockImplementation(() => mockObj);
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should call mock function', async () => {
    await helperFunction();
    expect(getMock).toHaveBeenCalled();
  });
  it('should return array', async () => {
    const arrayObj = await helperFunction();
    expect(typeof arrayObj).toEqual('object');
  });
  it('should get object array', async () => {
    expect(await helperFunction()).toEqual(mockObj.data);
  });
});
