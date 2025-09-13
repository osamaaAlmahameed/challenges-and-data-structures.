const MinStack = require('./MinStack');

describe('MinStack', () => {
    let minStack;

    beforeEach(() => {
        minStack = new MinStack();
    });

    test('should push elements and track minimum correctly', () => {
        minStack.push(15);
        expect(minStack.getMin()).toBe(15);
        minStack.push(7);
        expect(minStack.getMin()).toBe(7);
        minStack.push(12);
        expect(minStack.getMin()).toBe(7);
        minStack.push(3);
        expect(minStack.getMin()).toBe(3);
    });

    test('should pop elements and update minimum correctly', () => {
        minStack.push(15);
        minStack.push(7);
        minStack.push(12);
        minStack.push(3);
        
        expect(minStack.pop()).toBe(3);
        expect(minStack.getMin()).toBe(7);
        expect(minStack.pop()).toBe(12);
        expect(minStack.getMin()).toBe(7);
        expect(minStack.pop()).toBe(7);
        expect(minStack.getMin()).toBe(15);
    });

    test('should handle edge cases correctly', () => {
        expect(minStack.isEmpty()).toBe(true);
        expect(minStack.getMin()).toBe(null);
        expect(minStack.top()).toBe(null);
        expect(minStack.pop()).toBe(null);

        minStack.push(1);
        expect(minStack.isEmpty()).toBe(false);
        expect(minStack.top()).toBe(1);
        expect(minStack.getMin()).toBe(1);
    });

    test('should handle multiple same minimum values', () => {
        minStack.push(3);
        minStack.push(3);
        minStack.push(3);
        expect(minStack.getMin()).toBe(3);
        minStack.pop();
        expect(minStack.getMin()).toBe(3);
        minStack.pop();
        expect(minStack.getMin()).toBe(3);
    });
});