//start...
//글자를 입력받을 텍스트를 가져온다
var inputText = document.getElementById('inputTodo');
var todoList = document.getElementById('todoList');
var todoListTemplate = document.getElementById('template');

/***
 * inputText.onkeydown = function (event){}
 * 키를 입력받을때 해당하는 작업을 처리할 함수
 * 키값을 이용하여 엔터가 입력되었음을 감지하면
 * 해당하는 이벤트를 발생
 */

function inputKeydown(todoList) {
    var func =   function (event) {
        //inputText.value의 값이 빈값이 아닐경우
        if (todoList.value !== ''){
            //앤터키가 감지되면
            if (event.keyCode == '13') {
                addTodoList(todoList.value);
                todoList.value = '';
            }
        } else {
            //inputText.value가 빈 값일때 앤터키가 감지되면
            if (event.keyCode == '13') {
                //그에 해당하는 작업을 수행
                alert('텍스트를 입력하세요.')
            }
        }
    };
    return func;
}

//입력한 텍스트를 기반으로 inputKeydown 함수로
//앤터키가 입력되었을때에 대한 이벤트 발생
inputText.onkeydown = inputKeydown(inputText);

//할일을 추가했을때에 대한 처리를 담당하는 함수
function addTodoList(memo) {
    var node = todoListTemplate.cloneNode(true);    // html요소를 복제하기 위한 함수
    var text = node.children[2];                    // 텍스트를 입어넣는다
    var del = node.children[0];                     // x버튼을 집어널는다

    text.innerHTML = memo;
    del.addEventListener('click',delTodo(node));    // x버튼을 누르면 해당 리스트 삭제

    todoList.appendChild(node);                     // 기존 리스트에서 밑으로 자식 리스트를 생성
}

// 함수 안에서 함수를 return하기 위한 closures
function delTodo(node) {
    return function() {
        todoList.removeChild(node);
    };
}

// 처음에 세팅된 JS공부하기라는 리스트를 지우고 시작
document.body.onload = function(){
    todoList.removeChild(todoListTemplate);
}