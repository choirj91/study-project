const { DataStructureService } = require('../services');

const arrayStudy = async (req, res, next) => {

    const food = ["수박", "사이다", "바나나", "삼겹살", "오이", "상추"];
    const foodArray = new Array("수박", "사이다", "바나나", "삼겹살", "오이", "상추");

    console.log("food 2 = ", food[2]);
    // food 2 =  바나나

    console.log("foodArray 2 = ", foodArray[2]);
    // foodArray 2 =  바나나

    console.log("추가 전 - ", food);
    // 추가 전 -  [ '수박', '사이다', '바나나', '삼겹살', '오이', '상추' ]
    insertArrayValue(food, '추가', 2);
    console.log("추가 후 - ", food);
    // 추가 후 -  ['수박', '사이다', '추가', '바나나', '삼겹살', '오이', '상추']



    return res.status(200).json({
        message: "success",
    });
}

/* 
    arr = 추가하고자 하는 배열
    value = 추가 값
    path = 추가 위치
*/
const insertArrayValue = (arr, value, path) => {

    // 추가할 위치의 원소를 옮겨 공간 확보
    for (let i = arr.length - 1; i >= path; i--) {
        arr[i + 1] = arr[i];
    }

    // 원소 추가
    arr[path] = value;

    return arr;
}

/* 연결리스트 */
const linkedListStudy = async (req, res, next) => {

    const linkedList = new DataStructureService.LinkedList();

    linkedList.insertFirst('1. 바나나');
    linkedList.insertLast('2. 사과');
    linkedList.insertLast('3. 딸기');
    linkedList.insertLast('4. 수박');
    linkedList.insertLast('5. 참외');
    console.log('getData==', linkedList.getData(2));
    linkedList.removeData(2);
    linkedList.insertAt("3. 복숭아", 2);

    const data = linkedList.log();
    linkedList.printLinkedListValue();

    return res.status(200).json({
        massage: "success",
        linkedList: data
    });
}

/* 스택 */
const stackStudy = async (req, res, next) => {

    const stack = new DataStructureService.Stack();
    stack.in('사과-0');
    stack.in('수박-1');
    stack.in('바나나-2');
    stack.in('참외-3');
    stack.get();
    stack.out();
    stack.get();

    const data = stack.get();

    return res.status(200).json({
        massage: "success",
        arr: data
    });
}

/* 큐 */
const queueStudy = async (req, res, next) => {

    const queue = new DataStructureService.Queue();
    queue.in('바나나');
    queue.in('사과');
    queue.in('참외');
    queue.in('수박');
    queue.get();
    queue.out();
    queue.get();

    const data = queue.get();

    return res.status(200).json({
        massage: "success",
        arr: data
    });
}

/* 덱 */
const dequeStudy = async (req, res, next) => {

    const deque = new DataStructureService.Deque();
    deque.firstIn('2 바나나');
    deque.lastIn('3 참외');
    deque.lastIn('4 수박');
    deque.firstIn('1 사과');

    deque.get();
    deque.lastOut();
    deque.firstOut();
    deque.get();

    const data = deque.get();

    return res.status(200).json({
        massage: "success",
        arr: data
    });
}

/* 이진 탐색 트리 */
const binarySearchTree = async (req, res, next) => {
    const bst = new DataStructureService.BST();

    bst.add(30);
    bst.add(25);
    bst.add(59);
    bst.add(42);
    bst.add(16);
    bst.add(29);
    bst.add(62);
    bst.add(65);
    bst.add(6);
    bst.add(18);
    bst.add(27);

    console.log("findMinHeight=", bst.findMinHeight());
    console.log("findMaxHeight=", bst.findMaxHeight());
    console.log("isBalanced=", bst.isBalanced());
    console.log("findMinHeight=", bst.findMinHeight());
    console.log("findMaxHeight=", bst.findMaxHeight());
    console.log("isBalanced=", bst.isBalanced());
    console.log('inOrder: ' + bst.inOrder());
    // inOrder: 6,16,18,25,27,29,30,42,59,62,65
    console.log('preOrder: ' + bst.preOrder());
    // preOrder: 30,25,16,6,18,29,27,59,42,62,65
    console.log('postOrder: ' + bst.postOrder());
    // postOrder: 6,18,16,27,29,25,42,65,62,59,30
    console.log('levelOrder: ' + bst.levelOrder());
    // levelOrder: 30,25,59,16,29,42,62,6,18,27,65

    bst.remove(6);

    console.log('inOrder: ' + bst.inOrder());
    // inOrder: 16,18,25,27,29,30,42,59,62,65
    console.log('preOrder: ' + bst.preOrder());
    // preOrder: 30,25,16,18,29,27,59,42,62,65
    console.log('postOrder: ' + bst.postOrder());
    // postOrder: 18,16,27,29,25,42,65,62,59,30
    console.log('levelOrder: ' + bst.levelOrder());
    // levelOrder: 30,25,59,16,29,42,62,18,27,65



    const data = bst.get();

    return res.status(200).json({
        massage: "success",
        bst: data
    });
}

/* 인접 리스트 그래프 */
const adjacencyListGragh = async (req, res, next) => {

    var graph = new DataStructureService.AdjacencyListGraph();
    var vertices = ['A', 'B', 'C', 'D', 'E'];

    for (var i = 0; i < vertices.length; i++) {
        graph.addVertex(vertices[i]);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'E');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'E');

    graph.print();
    // A -> B E C 
    // B -> A C D 
    // C -> A B D
    // D -> B C E
    // E -> A D

    // DFS
    graph.dfs('A');

    // BFS
    graph.bfs('A');

    return res.status(200).json({
        message: "success"
    });
}

/* 인접 행렬 그래프 */
const adjacencyMatrixGragh = async (req, res, next) => {

    return res.status(200).json({
        message: "success"
    });
}

module.exports = {
    arrayStudy,
    linkedListStudy,
    stackStudy,
    queueStudy,
    dequeStudy,
    binarySearchTree,
    adjacencyListGragh,
    adjacencyMatrixGragh,
}