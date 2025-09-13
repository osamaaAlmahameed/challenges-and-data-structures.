const Stack = require('./stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('can push onto stack', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test('can push multiple values onto stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test('can pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
  });

  test('can empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('can peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2); // Should still be there
  });

  test('can instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('pop on empty stack returns null', () => {
    expect(stack.pop()).toBeNull();
  });

  test('peek on empty stack returns null', () => {
    expect(stack.peek()).toBeNull();
  });
});