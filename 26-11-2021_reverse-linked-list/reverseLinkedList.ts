import ListNode from "./ListNode";

// reverse the linked list. Take the existing head and return new list head which should be the last node.
export default (head: ListNode | null): ListNode | null => {
    //list a -> b -> c -> d || d -> c -> b -> a
    const checkList = (current: ListNode | null, previous: ListNode | null = null): ListNode | null => {
        // get the next node and store and temp store it.
        const currentNext = current.next;
        // update current next node to be previous node (null if the first node).
        current.next = previous;
        // update previous to be the current node we have just updated.
        previous = current;
        // check if stored next node is empty, and return new head node.
        if (!currentNext) {
            return current;
        }
        // update current to be stored next node, ready for next pass.
        current = currentNext;
        // why did i do recursion instead of a simple while loop !! 
        return checkList(current, previous);
    };
    return checkList(head);
}
