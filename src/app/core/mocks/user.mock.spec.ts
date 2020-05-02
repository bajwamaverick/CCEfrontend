import { UserMock } from './user.mock';

describe('User.Mock', () => {
  it('should create an instance', () => {
    expect(new UserMock()).toBeTruthy();
  });
});
