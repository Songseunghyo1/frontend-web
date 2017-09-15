function printGugudan() {
    for (var i = 1; i < 10; i++){
        console.log('=====' + i + ' 단=====');
        for (var j = 1; j <= 10; j++) {
            var mul = i * j;
            console.log(i + ' * ' + j + ' = ' + mul);
        }
        console.log();
    }
}

printGugudan();
