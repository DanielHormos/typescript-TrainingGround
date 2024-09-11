import 'mocha';
import assert from 'assert';
import { greet } from './index';

describe('ts tests', () => {
  it('get greeting', () => {
    const birthYear = 2000;
    const name = 'Daniel';

    const result = greet(name, birthYear);

    assert.strictEqual(result, 'Hello Daniel, you are 24 years old');
  });
});
