import LinkedList from './LinkedList';
import ListNode from './ListNode';
import reverseLinkedList from './reverseLinkedList';
import ReverseLinkedList from './reverseLinkedList';
describe('Reverse Linked List', () => {
    it('should reverse a linked list', () => {

        const listData = ['a', 'b', 'c', 'd'].reverse();
        const linkedList = new LinkedList();
        listData.forEach(value => {
            linkedList.insertAtStart(value);
        });

        const expectedHeadValue = 'd';
        const expectedHeadNextValue = 'c';

        const result = reverseLinkedList(linkedList.head);

        expect(result.data).toEqual(expectedHeadValue);
        expect(result.next.data).toEqual(expectedHeadNextValue);

    });
})
