const { LinkedList } = require('./rotateLinkedList');

describe("rotateLeft", () => {
  it("should not change the list when k = 0", () => {
    const list = new LinkedList();
    [1, 2, 3].forEach(n => list.append(n));
    list.rotateLeft(0);
    expect(list.display()).toBe("1 -> 2 -> 3");
  });

  it("should rotate left by k positions", () => {
    const list = new LinkedList();
    [10, 20, 30, 40, 50].forEach(n => list.append(n));
    list.rotateLeft(3);
    expect(list.display()).toBe("40 -> 50 -> 10 -> 20 -> 30");
  });

  it("should handle k > list length", () => {
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6].forEach(n => list.append(n));
    list.rotateLeft(7);
    expect(list.display()).toBe("2 -> 3 -> 4 -> 5 -> 6 -> 1");
  });

  it("should rotate to the right if k is negative", () => {
    const list = new LinkedList();
    [5, 10, 15, 20].forEach(n => list.append(n));
    list.rotateLeft(-1);
    expect(list.display()).toBe("20 -> 5 -> 10 -> 15");
  });
});
