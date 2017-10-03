/**
 * Created by SSLAB on 2017-09-29.
 */
var todayPhoto = [
    {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
    ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
    ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
    ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
    ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
    ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
    ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}
];

//Carousel.html으로부터 요소를 가져오기 위한 <div>의 id를 가져옴
var wrap = document.getElementById('wrap');
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var status =  document.getElementById('btn');

//Carousel.javascript에서 Carousel.html로 넘겨줄 요소를 이어붙일 변수
var str = '';
var drawLeftBtn = '';
var drawRightBtn = '';

var cnt = 0;        //몇장의 사진을 가져왔는지 세는 변수
var pageNum = 1;    //현재 사용자가 보고있는 페이지
var cntPage = 0;    //전체 페이지 수

//사진 출력 함수
function showPicture(n) {
    for(var i = -3; i<=0; i++) {
        if (cnt === 3 || (3*n) + i >= todayPhoto.length) {
            cnt = 0;
            break;
        }
        str += '<img src="'+todayPhoto[(3*n) + i].img+'"> ';
        cnt++;

    }
    wrap.innerHTML = str;
    cnt = 0;
    str = '';
}

showPicture(pageNum);

//전체 페이지 구하는 함수
function getPageNum() {
    cntPage = todayPhoto.length / 3;
}

//버튼의 구현과 페이지의 상태 출력 함수
function showpageStatus() {
    pageStatus = ' ' + pageNum + ' / ' + Math.round(cntPage) + ' ';
    drawLeftBtn = '<input type="button" value="<"/>' + '<a id="page">'+ pageStatus + '</a>';
    drawRightBtn = '<input type="button" value=">"/>';


    btnLeft.innerHTML += drawLeftBtn;
    btnRight.innerHTML += drawRightBtn;

}

btnLeft.onclick = function clickLeft() {
    if (pageNum <= Math.round(cntPage) && pageNum > 1){
        pageNum -= 1;
        pageStatus = ' ' + pageNum + ' / ' + Math.round(cntPage) + ' ';
        document.getElementById("page").innerHTML = pageStatus;
        showPicture(pageNum);
    }
};

btnRight.onclick = function clickRight() {
    if (pageNum < Math.round(cntPage)){
        pageNum += 1;
        pageStatus = ' ' + pageNum + ' / ' + Math.round(cntPage) + ' ';
        document.getElementById("page").innerHTML = pageStatus;
        showPicture(pageNum);
    }
};

/*showPicture();*/
getPageNum();
showpageStatus();