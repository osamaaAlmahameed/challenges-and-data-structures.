class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

        // Add new Item
    add(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            return ;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
       current.next = newNode;
    }

    remove(data){
        if(this.head === null){
            return;
        }

        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }

        let curr = this.head;

        while(curr.next && curr.next.data !==data){
            curr = curr.next;
        }

        if(curr.next !==null){
            curr.next = curr.next.next;
        }
    }

    printList(){
        let current = this.head;
        let Str = " head => ";
        while (current !== null){
            Str = Str + current.data + " => ";
            current = current.next;
        }
        Str = Str + "Null";
        console.log(Str);
    }

    includes(data){
        let curr = this.head;
        while(curr !== null){
            if(curr.data === data){
                return true;
            }
            curr = curr.next
        }
        return false;
    }

    insertAt(data, index){
        if(index < 0){
            return false;
        }
        const newNode = new Node(data);

        if(index ===0){
            newNode.next = this.head;
            this.head =newNode;
            return;
        }

        let curr = this.head;
        let prev = null;
        let i =0;
        while(curr !== null && i < index){
            prev = curr;
            curr = curr.next;
            i++;
        }
        if(prev !== null){
            prev.next = newNode;
            newNode.next = curr;
        }
    }
}


module.exports = LinkedList;
