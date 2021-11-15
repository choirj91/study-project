/* 노드 */
class LinkedListNode {
    constructor(data, nextNode = null) {
        this.data = data; // 데이터
        this.nextNode = nextNode; // 연결된 노드
    }
}

class LinkedList {
    #head; // 연결 리스트 헤드
    #size; // 연결 리스트 총 길이

    constructor() {
        this.#head = null;  // 초기화
        this.#size = 0;     // 초기화
    }

    // 첫 번째 위치로 삽입
    insertFirst(data) {
        const node = new LinkedListNode(data, this.#head);  // 노드 생성 (데이터, 현재 헤드를 다음 노드로 연결)
        this.#head = node;                        // 첫 노드 헤드에 위치
        this.#size++;                             // 총 개수 증가
    }

    // 연결 리스트 확인
    log() {
        console.log('head', this.#head);
        console.log('size', this.#size);
        return this.#head;
    }

    // 연결 리스트의 전체 데이타 확인
    printLinkedListValue() {
        let current = this.#head;
        let count = 0;
        while (current) {
            console.log(`data[${count}]=`, current.data);
            current = current.nextNode;
            count++;
        }
    }

    // 마지막 위치에 데이터 삽입
    insertLast(data) {
        let node = new LinkedListNode(data); // 노드 생성

        if (!this.#head) this.#head = node; // 현재 리스트에 값이 하나도 없을 경우, 헤드 위치에 바로 노드 연결.
        else {

            // 순차적으로 마지막 위치로 이동
            let current = this.#head;
            while (current.nextNode) { // 연결된 노드 값이 없을 경우 반복문 중단.
                current = current.nextNode; // 반복하면서 연결된 리스트의 다음 노드 값으로 변경.
            }

            current.nextNode = node; // 마지막 다음 노드 값에 노드 삽입
        }

        this.#size++;  // 길이 증가
    }

    // 원하는 위치에 데이터 삽입
    insertAt(data, index) {

        // 범위가 벗어나는 위치 일 경우, 삽입이 안되거나, 마지막 위치에 삽입하거나 택 1
        // if(index > 0 && index > this.#size) return;
        if (index < 0) return;
        if (index > 0 && index > this.#size) return this.insertLast(data);

        // 첫 번째 위치일 경우 첫번째 삽입 함수 실행
        if (index === 0) return this.insertFirst(data);

        const node = new LinkedListNode(data); // 노드 생성
        let current = this.#head; // 현재 위치의 노드
        let previous; // 이전 위치의 노드
        let count = 0;  // 현재 위치

        // 원하는 위치 바로 이전까지 탐색
        while (count < index) {
            previous = current; // 이전 위치 설정
            count++;
            current = current.nextNode; // 현재 위치 설정
        }

        node.nextNode = current; // 현재 위치를 삽입하는 노드 다음위치로 연결
        previous.nextNode = node; // 이전 노드의 연결된 노드 값을 새로 생성한 노드로 연결

        this.#size++; // 총 길이 증가
    }

    // 데이터 삭제
    removeData(index) {
        // 범위가 초과하는 경우는 처리X
        if (index < 0 || (index > 0 && index > this.#size)) return;
        let current = this.#head; // 현재 위치의 노드
        let previous; // 이전 위치의 노드
        let count = 0; // 현재 위치

        if (index === 0) this.#head = current.nextNode; // 첫 번째 데이터 삭제 시, 다음 노드를 헤드 위치로 변경
        else {
            // 순차적으로 탐색하여 해당 위치로 이동
            while (count < index) {
                count++;
                previous = current;
                current = current.nextNode;
            }

            // 이전 노드의 다음 연결 노드 값을 현재 위치의 다음 노드 값으로 연결
            previous.nextNode = current.nextNode;
        }

        this.#size--; // 길이 감소
    }

    // 리스트 초기화
    clear() {
        this.#head = null;
        this.#size = 0;
    }

    // 원하는 위치의 데이터 확인
    getData(index) {
        let current = this.#head;
        let count = 0;

        while (current) {
            // 원하는 위치의 데이터 리턴 (index 개념이 아닌 번째의 개념으로 -1 )
            if (count === index) return current.data;
            count++;
            current = current.nextNode;
        }
    }
}

class Stack {
    #items;
    #count;
    constructor() {
        this.#items = [];
        this.#count = 0;
    }

    in(data) {
        this.#items[this.#count] = data; // 배열의 마지막 위치에 추가
        // this.#items.push(data); // javascript 내장 객체 사용할 경우
        this.#count ++;  //  배열 길이 증가
    }

    out() {
        // 마지막 요소 삭제 택 1 
        // pop - 배열의 마지막 요소를 삭제하고 value를 반환
        // splice - pram1 부터 pram2 개의 요소를 삭제하고 삭제한 배열을 반환

        // 1
        // this.#items.splice(this.#count -1, 1); // return ['value']

        // 2
        this.#items.pop(); // return value;
        this.#count--; // 배열 길이 감소
    }

    // 가장 마지막으로 들어온 데이터 확인
    peek() {
        return this.#items[this.#count - 1];
    }

    get() {
        console.log('size=', this.#count, 'items==', this.#items);
        return this.#items;
    }
}

class Queue {
    #items;
    constructor() {
        this.#items = [];
    }

    in(data) {
        this.#items.push(data);
    }

    out() {
        return this.#items.shift();  // 0번째 제거
    }

    get() {
        console.log('size=', this.#items.length, 'items=', this.#items);
        return this.#items;
    }

    isEmpty() {
        return this.#items.length == 0;
    }
}

class Deque {
    #items;
    #size;
    constructor() {
        this.#items = [];
        this.#size = 0;
    }

    // 처음 삽입
    firstIn(data) {
        this.#items.unshift(data);
        this.#size++;
    }

    // 처음 제거
    firstOut() {
        this.#items.shift();
        this.#size--;
    }

    // 마지막 삽입
    lastIn(data) {
        this.#items.push(data);
        this.#size++;
    }

    // 마지막 제거
    lastOut() {
        this.#items.pop();
        this.#size--;
    }

    // 확인
    get() {
        console.log('size=', this.#size, 'items=', this.#items);
        return this.#items;
    }
}




/* 이진 탐색 트리 */
class BSTNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // 현재 트리 불러오기
    get() {
        return this.root;
    }
    // 트리 데이터 추가
    add(data) {
        const node = this.root;
        // 최초 등록일 경우
        if (node === null) {
            this.root = new BSTNode(data);
            return;
        } else { // 이미 데이터가 존재 하는 경우

            const addTree = (node) => {
                if (data < node.data) { // 노드의 값보다 작은 값인 경우 왼쪽
                    if (node.left === null) {
                        node.left = new BSTNode(data);
                        return;
                    } else if (node.left !== null) {
                        return addTree(node.left); // 재귀 호출
                    }
                } else if (data > node.data) { // 노드의 값보다 큰 값인 경우 오른쪽
                    if (node.right === null) {
                        node.right = new BSTNode(data);
                        return;
                    } else if (node.right !== null) {
                        return addTree(node.right); // 재귀 호출
                    }
                } else {
                    return null;
                }
            };

            return addTree(node);
        }
    }

    // 가장 낮은 값 찾기
    // 가장 왼쪽에 존재하는 단말 노드
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    // 가장 높은 값 찾기
    // 가장 오른쪽에 존재하는 단말 노드
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    // 값 찾기
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            // 탐색 데이터가 낮을 경우 왼쪽부터 탐색
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            // 존재하지 않으면 null
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    // 존재여부 확인
    isPresent(data) {
        let current = this.root;
        while (current) {
            // 탐색 데이터가 낮을 경우 왼쪽부터 탐색
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // 값 삭제
    remove(data) {
        const removeNode = (node, data) => {
            // 데이터가 비어있는 경우 처리 X
            if (node == null) return null;

            // 값을 찾은 경우 삭제 처리
            if (data == node.data) {

                // case1 단말 노드인 경우
                if (node.left == null && node.right == null) {
                    return null;
                }
                // case2 왼쪽 자식이 없는 경우
                if (node.left == null) {
                    return node.right;
                }
                // case3 오른쪽 자식이 없는 경우
                if (node.right == null) {
                    return node.left;
                }
                // case4 왼쪽 오른쪽 자식이 모두 있는 경우
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            // 작은 값인 경우 왼쪽
            else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            // 큰 값인 경우 오른쪽
            else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

    /* 중위 순회 */
    // 왼쪽, 나, 오른쪽 순서로 방문
    inOrder() {

        if (this.root == null) return null;
        else {
            let result = [];

            const traverseInOrder = (node) => {
                // 왼쪽이 존재하는 경우, 현재 노드를 기준 재귀
                node.left && traverseInOrder(node.left);
                // 현재 노드 push
                result.push(node.data);
                // 오른쪽이 존재하는 경우, 현재 노드를 기준 재귀
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        };
    }

    /* 전위 순회 */
    // 나, 왼쪽, 오른쪽 순서로 방문
    preOrder() {
        if (this.root == null) return null;
        else {
            let result = [];
            const traversePreOrder = (node) => {
                // 방문 하는 대로 나 자신 push
                result.push(node.data);
                // 왼쪽이 존재하는 경우, 현재 노드를 기준 재귀
                node.left && traversePreOrder(node.left);
                // 오른쪽이 존재하는 경우, 현재 노드를 기준 재귀
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        };
    }

    /* 후위 순회 */
    // 왼쪽, 오른쪽, 나 순서로 방문
    postOrder() {
        if (this.root == null) return null;
        else {
            let result = [];
            const traversePostOrder = (node) => {
                // 왼쪽이 존재하는 경우, 현재 노드를 기준 재귀
                node.left && traversePostOrder(node.left);
                // 오른쪽이 존재하는 경우, 현재 노드를 기준 재귀
                node.right && traversePostOrder(node.right);
                // 마지막으로 나 자신 push
                result.push(node.data);
            };
            traversePostOrder(this.root);
            return result;
        }
    }

    /* 레벨 순회 */
    // 루트, 1레벨 노드, 2레벨 노드 순서로 방문
    levelOrder() {
        let result = [];
        let temp = [];
        if (this.root == null) return null;
        else {
            temp.push(this.root);
            while (temp.length > 0) {
                const node = temp.shift(); // 첫 번째 요소 제거 후 반환
                result.push(node.data); // 루트 값 작성
                // 왼쪽 노드가 있는 경우
                if (node.left != null) temp.push(node.left);
                // 오른쪽 노드가 있는 경우
                if (node.right != null) temp.push(node.right);
            };
            return result;
        }
    };

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }
    findMinHeight(node = this.root) {
        if (node == null) return -1;

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    findMaxHeight(node = this.root) {
        if (node == null) return -1;

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
}


class AdjacencyListGraph {
    constructor() {
        this.list = {};
    }

    // 정점 추가
    addVertex(v) {
        this.list[v] = [];  //  "v" : []   > map 과 같은 키와 밸류 형태
    }

    // 간선 추가
    addEdge(v, w) {
        this.list[v].push(w);
        this.list[w].push(v); // 무방향 그래프 경우 양쪽 추가용
    }

    // 인접 리스트 그리기
    print() {
        let keys = Object.keys(this.list);
        for (let i = 0; i < keys.length; i++) {
            let value = this.list[keys[i]];
            let result = "";
            for (let j of value) result += j + " ";
            console.log(keys[i] + " -> " + result);
        }
    }

    // Depth-First Search 깊이우선탐색
    dfs(startingNode) {

        let visited = {}; // 방문 기록

        const search = (node, visited) => {
            visited[node] = true;

            // 인접 vertex 가져오기
            let getNeighbours = this.list[node];

            for (let i in getNeighbours) {
                let getNode = getNeighbours[i];
                // 깊이 탐색
                if (!visited[getNode]) search(getNode, visited);
            }
        }

        search(startingNode, visited);
        console.log('DFS = ', Object.keys(visited).join(" => "));
    }

    // Breath-First Search 너비우선탐색
    bfs(startingNode) {

        let visited = {};
        let result = []; // 순서 기록

        let q = new Queue();

        visited[startingNode] = true;
        q.in(startingNode);

        while (!q.isEmpty()) {
            let getQueueElement = q.out();
            result.push(getQueueElement);

            let getList = this.list[getQueueElement];

            for (let i in getList) {
                let neigh = getList[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.in(neigh);
                }
            }
        }

        console.log("BFS =  ", result.join(" -> "));
        // A B D E C F
    }
}

class AdjacencyMatrixGraph {

}


module.exports = {
    LinkedList,
    Stack,
    Queue,
    Deque,
    BST,
    AdjacencyListGraph,
    AdjacencyMatrixGraph,
}