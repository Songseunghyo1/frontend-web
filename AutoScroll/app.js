/**
 * Created by SSLAB on 2017-10-29.
 */
var div = document.getElementById('scroll');

$(window).scroll(function (event){
    console.log(window.scrollY);
    console.log(maxScrollHeight());
    console.log(window.scrollY/maxScrollHeight() * 100);
    console.log("------");

    console.log(div.offsetHeight);
});

function maxScrollHeight(){
    var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    return scrollMaxY;
}