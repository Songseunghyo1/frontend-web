var str = '';
var wrap  = document.getElementById('wrap');

for(var i = 0; i < 4; i++){
    className = '';

    for(var j = 0; j < 4; j++){
        if((i+j) % 2){
            className = "white";
        } else{
            className = "black";
        }
        str += '<div class =' +className + '>' + '</div>'
    }
}

wrap.innerHTML = str;

var divs = document.querySelectorAll('#wrap div');
var tmpTarget;
var tmpColor;

function changeBg(event){
    if(tmpTarget != null){
        tmpTarget.style.backgroundColor = tmpColor;
    }
    console.log(event.target);
    console.log(event.currentTarget);
    tmpTarget = event.target;
    tmpColor = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = "red";
}

for(var i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', changeBg);
}