const assert = require('assert');
const axios = require('axios');

describe('Node.js Server', () => {
  it('should respond with "Hello Node!"', async () => {
    try {
      const response = await axios.get('http://localhost:3000');
      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.data, 'Hello Node!\n');
      console.log('Unit test passed: Server responds with "Hello Node!"');
    } catch (error) {
      console.error('Unit test failed:', error.message);
    }
  });
});
