
export default class ListNode {
    data: unknown;
    next: ListNode | null;
    constructor(data: unknown, next: ListNode | null) {
        this.data = data;
        this.next = next;
    }
};