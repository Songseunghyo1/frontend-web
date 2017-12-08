console.log('ajax.js');

var btn = document.getElementById('btn');
btn.addEventListener('click', load);

/*
function load() {
    console.log('load');

    var request = new XMLHttpRequest();
    request.open('GET', 'dumy.json', true);

    request.open('GET', 'http://1boon.kakao.com/issue.json', true);
    //console.log(request);

    request.onreadystatechange = function () {
        if (request.readyState === 4){
            if (request.status === 200){
                console.log(request.responseText);
            }
        }
    }

    request.send();
    console.log('send');
}*/

function load(url, callback, data, x) {
    try {
        x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
        x.open(data ? 'POST' : 'GET', url, 1);
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        x.onreadystatechange = function () {
            x.readyState > 3 && callback && callback(x.responseText, x);
        };
        x.send(data)
    } catch (e) {
        window.console && console.log(e);
    }
};