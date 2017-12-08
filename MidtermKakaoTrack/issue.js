/**
 * 2017.10.23
 * file name : index.js
 * http://1boon.kakao.com/ch/issue.json에서 데이터 파싱
 * 데이터 10개씩 파싱해서 긁어옴
 * */

//데이터를 파싱해올 url설정
var url = 'http://1boon.kakao.com/ch/issue.json?pagesize=10&page=';

//html파일로 부터 data를 출력할 <li></li>태그 를 가져온다
var info = document.getElementById('list');
var str = '';

//첫번째 페이지
var pageNum = 1;

//더보기버튼에 대한 이벤트를 구현하기 위해 버튼을 가져옴
var btn = document.getElementById('btnMore');

//로딩마크업을 구현하기 위해 버튼을 가져옴
var loading = document.getElementById('loading');

/** function done (result) {}
 * 페이지마다 보유하고있는 데이터를 파싱, 출력
 * 33 행 ~ 40 행 <div>태그에 box라는 클래스를 설정, css에서 게시글 하나마다의 설정하기를 위함
 * 34 행 ~ 39행 해당 패스에 대한 하이퍼링크 설정 (이미지, 텍스트를 하나로 묶어 처리) -
 * 이미지, 텍스트를 클릭하면 해당 게시글의 경로로 이동
 * 40 행 게시글의 조회수 출력
 * */
function done(result){
    for(var i=0; i < result.data.length; i++){
        str += '<div class="box">'+
                '<h3>' +
                    '<a href="http://1boon.kakao.com/'+ result.data[i].path +'">' +
                        '<img src='+result.data[i].coverImage+'>' +
                        '<h4>'+result.data[i].title+'</h4>' +
                    '</a>'
                '</h3>'
        str += '<h5>' + result.data[i].totalView + ' 명이 봤어요' + '</h5></div>'
    }

    //로딩중 마크업의 display의 속성을 none으로 설정
    loading.style.display="";
    list.innerHTML = str;
}

/** btn.addEventListener('click', function () {});
 * 더보기 버튼에 대한 이벤트 리스너 작성
 * 버튼을 누르면 paheNum의 수가 1씩 증가하며 다음 페이지의 데이터를 가져온다
 * */
btn.addEventListener('click', function () {
    console.log('clicked');
    loading.style.display="block";
    pageNum += 1;
    getJSON(url + pageNum, done);
});

/** function init() {}
 * 처음 홈페이지 화면을 보여줄 때 띄워줄 초기화면 설정함수*/
function init() {
    getJSON(url + pageNum, done);
}

//초기화면 출력
document.body.onload = init;