/* 노드 */
class Node {
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
        const node = new Node(data, this.#head);  // 노드 생성 (데이터, 현재 헤드를 다음 노드로 연결)
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
        while(current) {
            console.log(`data[${count}]=`, current.data);
            current = current.nextNode;
            count++;
        }
    }

    // 마지막 위치에 데이터 삽입
    insertLast(data) {
        let node = new Node(data); // 노드 생성
        
        if(!this.#head) this.#head = node; // 현재 리스트에 값이 하나도 없을 경우, 헤드 위치에 바로 노드 연결.
        else {

            // 순차적으로 마지막 위치로 이동
            let current = this.#head; 
            while(current.nextNode) { // 연결된 노드 값이 없을 경우 반복문 중단.
                current = current.nextNode; // 반복하면서 연결된 리스트의 다음 노드 값으로 변경.
            }
            
            current.nextNode = node; // 마지막 다음 노드 값에 노드 삽입
        }

        this.#size++;  // 길이 증가
    }
    
    // 원하는 위치에 데이터 삽입
    insertAt (data, index) {

        // 범위가 벗어나는 위치 일 경우, 삽입이 안되거나, 마지막 위치에 삽입하거나 택 1
        // if(index > 0 && index > this.#size) return;
        if(index < 0) return;
        if(index > 0 && index > this.#size) return this.insertLast(data);

        // 첫 번째 위치일 경우 첫번째 삽입 함수 실행
        if(index === 0) return this.insertFirst(data);

        const node = new Node(data); // 노드 생성
        let current = this.#head; // 현재 위치의 노드
        let previous; // 이전 위치의 노드
        let count = 0;  // 현재 위치

        // 원하는 위치 바로 이전까지 탐색
        while(count < index) {
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
        if(index < 0 || (index > 0 && index > this.#size)) return;
        let current = this.#head; // 현재 위치의 노드
        let previous; // 이전 위치의 노드
        let count = 0; // 현재 위치

        if(index === 0) this.#head = current.nextNode; // 첫 번째 데이터 삭제 시, 다음 노드를 헤드 위치로 변경
        else {
            // 순차적으로 탐색하여 해당 위치로 이동
            while(count < index) {
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
            if(count === index) return current.data;
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
        return this.#items[this.#count-1];
    }

    get() {
        console.log('size=', this.#count, 'items==', this.#items);
        return this.#items;
    }
}

class Queue {
    #items;
    #size;
    constructor() {
        this.#items = {};
        this.#size = 0;
    }

    in(data){
        this.#items[this.#size] = data;
        this.#size++;
    }

    out() {
        delete this.#items[this.#size-1];
        this.#size--;
    }

    get() {
        console.log('size=', this.#size, 'items=', this.#items);
        return this.#items;
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

module.exports = {
    LinkedList,
    Stack,
    Queue,
    Deque,
}