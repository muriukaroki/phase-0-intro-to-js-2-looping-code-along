// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);

    }
return messages;
}

(writeCards(["Tom", "Joseph", "Pedro"], "Party"));


function countDown() {
    let countDown = 10;
    while (countDown >=0) {
        countDown--;
        console.log(countDown);
    }
return countDown;
}