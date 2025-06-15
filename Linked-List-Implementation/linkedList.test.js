const LinkedList = require('./linkedList');

describe("LinkedList Tests", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  test("Should add node to the end of the linked list", () => {
    list.add(5);
    list.add(10);
    expect(list.head.data).toBe(5);
    expect(list.head.next.data).toBe(10);
  });

  test("Should remove node by its value", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    list.remove(2);

    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(3);
  });

  test("Should check if linked list contains specific value", () => {
    list.add(7);
    list.add(20);


expect(list.includes(7)).toBe(true);

expect(list.includes(20)).toBe(true);

expect(list.includes(99)).toBe(false); 
  });

  test("Should insert node at a specific index", () => {
    list.add(1);
    list.add(3);

    list.insertAt(2, 1); // Insert 2 between 1 and 3

    expect(list.head.next.data).toBe(2);
    expect(list.head.next.next.data).toBe(3);
  });

  test("Should handle printing an empty list without errors", () => {
    expect(() => list.printList()).not.toThrow();
  });

  test("Should not throw an error when removing from an empty list", () => {
    expect(() => list.remove(10)).not.toThrow();
  });

  test("Should not insert a node at an invalid index", () => {
    list.add(5);
    list.insertAt(99, 10); 
    expect(list.head.next).toBe(null);
  });
});
