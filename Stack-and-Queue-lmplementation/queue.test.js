const Queue = require('./queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('can enqueue into queue', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  test('can enqueue multiple values into queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  test('can dequeue out of queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  test('can empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('can peek into queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1); // Should still be there
  });

  test('can instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('dequeue on empty queue returns null', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('peek on empty queue returns null', () => {
    expect(queue.peek()).toBeNull();
  });
});