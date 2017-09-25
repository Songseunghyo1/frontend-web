/*
// //동적이라는 건 한번 로딩이 이루어진 다음에도 바뀔 수 있다는 것.
//
// var log = document.getElementById('log');
//
// // debugger
//
// console.log(log);
//
// log.innerHTML = "안녕";
var a = document.querySelectorAll('log');

console.log(log);

// var a = document.querySelectorAll('#log a');
//
// console.log(a[0],a[1]);

// var all = $$('ul'); 모든 ul 태그 를 가지고 와서

var div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";
// document.body.appendChild(div); 이건 추가해서 집어넣어 append니까


log.innerHTML = '<div style = "color:red">hello</div>'; //이건 그냥 갔다가 다 지우고 이것만 출력된다.*/

/*window.addEventListener('load', function () {
    console.log('load 1')
});

window.addEventListener('load', function(){
    console.log("load 2");
});*/

/*
var log = document.getElementById('log');
log.addEventListener('click', function () {
    console.log('log click!!!');
});

var log = document.getElementById('log');
function printLog(event) {
    console.log('log!!!');
    debugger;
}
log.addEventListener('click', printLog);
//각 브라우저마다 잘 동작하게 해주는 것을 크로스 브라우징이라 한다*/

var divs = document.querySelectorAll("#wrap div");

function changeBg(event) {
    console.log('changeBg');
    /*divs[0].style.border.backgroundColor = 'blue';*/
    event.currentTarget.style.backgroundColor = 'blue';
}

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', changeBg);
}

function adEvent() {

}