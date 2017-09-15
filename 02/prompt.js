function myFunction() {
    var sum = 0;

    while (true) {
        var userInput = prompt("숫자 입력.");
        if (userInput != null){
            sum += parseInt(userInput);
        } else if (userInput == null){
            prompt(parseInt(sum));
            break;
        }
    }
}

myFunction();