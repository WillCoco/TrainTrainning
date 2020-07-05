/**
 * 单链表反转
*/


// 单链表
function LinkedList() {
  // 封装一个Node类, 用于保存每个节点信息
  function Node(element) {
      this.element = element
      this.next = null
  }

  // 链表中的属性
  this.length = 0
  this.head = null;
  this.tail = null;
  
  // 链表尾部追加元素方法
  LinkedList.prototype.append = function (element) {
      // 1.根据新元素创建节点
      var newNode = new Node(element)

      // 2.判断原来链表是否为空
      if (this.head === null) { // 链表尾空
        this.head = newNode;
      } else { // 链表不为空
        this.tail.next = newNode
      }

      this.tail = newNode;

      // 3.链表长度增加1
      this.length++
  }

  // 遍历打印
  LinkedList.prototype.print = function () {
    let current = this.head;
    while (current) {
      console.log(current.element, 'nodeLog');
      current = current.next;
    }
  }

}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.print();


/**
 * 反转思路:
 * 把链表最后一个节点作为头节点，第一个节点的指向指null，每个节点的next指向它的前驱节点。
*/
function reverseList(list) {
  // 当前操作节点
  let current = list.head;
  // 当前节点的前部节点
  let pre = null;

  while (current) {
    // 当前节点的next节点
    let next = current.next;
    // console.log(next, 'next')
    console.log(pre, 'pre')

    // next指向pre;
    current.next = pre;

    // 改变pre指向
    pre = current

    // 改变current指向
    current = next;
  }
  const temp = list.head;
  list.head = list.tail
  list.tail = temp;
  return list;
}

const reversedList = reverseList(list);
reversedList.print();