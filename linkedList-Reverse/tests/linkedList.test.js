const { LinkedList } = require('../reverse/reverse');

describe('LinkedList reverse()', () => {
  test('reverse not empty list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test('reverse  single-node list (remains unchanged)', () => {
    const list = new LinkedList();
    list.append(10);
    list.reverse();
    expect(list.toArray()).toEqual([10]);
  });

  test('reverse  an empty list (no changes)', () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.toArray()).toEqual([]);
  });

  test('reverse list with duplicate elements', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(2);
    list.append(3);
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 2, 1]);
  });
});

describe('description', () => {
  test('should perform specific operation', () => {
    expect(true).toBe(true);
  });
});
