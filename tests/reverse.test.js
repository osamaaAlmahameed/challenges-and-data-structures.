const { LinkedList } = require('./reverse/reverse');
describe('LinkedList reverse()', () => {
  test('reverses a list with multiple elements', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    list.reverse();

    expect(list.toArray()).toEqual([4, 3, 2, 1]);
  });

  test('work with a single-node list', () => {
    const list = new LinkedList();
    list.append(7);

    list.reverse();

    expect(list.toArray()).toEqual([7]);
  });

  test('return empty array when reversing an empty list', () => {
    const list = new LinkedList();

    list.reverse();

    expect(list.toArray()).toEqual([]);
  });

  test('reverse list that contains duplicate values', () => {
    const list = new LinkedList();
    list.append(5);
    list.append(6);
    list.append(6);
    list.append(7);

    list.reverse();

    expect(list.toArray()).toEqual([7, 6, 6, 5]);
  });
});

