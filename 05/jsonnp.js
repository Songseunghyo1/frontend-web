function done(data) {
    console.log('done : ' + data);
}

var btn = document.getElementById('btn');
btn.addEventListener('click', load);

function load() {
    var head = document.getElementsByTagName("head")[0];
    script.type = 'text/javascript';
    var script = document.createElement('script');
    script.src = 'http://api.facebook.com/method/links.getStats?format=json&urls=http://daum.net&callback=complate';
    head.appendChild(script);
}
done(
    {
        "a":1,
        "b":2
    }
)