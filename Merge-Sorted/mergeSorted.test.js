const mergeSortedLists = require('./mergeSorted'); 
const { LinkedList } = require('./linkedList');   


describe('Merge Sorted Linked Lists', () => {
  test('Merging two non-empty sorted lists', () => {
    const list1 = new LinkedList();
    list1.insert(10);
    list1.insert(15);

    const list2 = new LinkedList();
    list2.insert(2);
    list2.insert(3);
    list2.insert(20);

    const merged = mergeSortedLists(list1, list2);
    expect(merged.toString()).toBe('{2} -> {3} -> {10} -> {15} -> {20} -> NULL');
  });

  test('One list is empty', () => {
    const list1 = new LinkedList();

    const list2 = new LinkedList();
    list2.insert(1);
    list2.insert(4);

    const merged = mergeSortedLists(list1, list2);
    expect(merged.toString()).toBe('{1} -> {4} -> NULL');
  });

  test('Both lists are empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const merged = mergeSortedLists(list1, list2);
    expect(merged.head).toBe(null);
  });

  test('Lists with duplicate values', () => {
    const list1 = new LinkedList();
    list1.insert(1);
    list1.insert(3);
    list1.insert(5);

    const list2 = new LinkedList();
    list2.insert(1);
    list2.insert(3);
    list2.insert(6);

    const merged = mergeSortedLists(list1, list2);
    expect(merged.toString()).toBe('{1} -> {1} -> {3} -> {3} -> {5} -> {6} -> NULL');
  });
});
