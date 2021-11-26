import ListNode from "./ListNode"

export default class LinkedList {
    head: ListNode | null;
    constructor() {
        this.head = null;
    }

    insertAtStart(data: unknown) {
        const node = new ListNode(data, this.head);
        this.head = node;
        return this.head;
    }
}
