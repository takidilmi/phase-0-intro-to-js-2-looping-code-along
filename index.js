function writeCards(names, eventnames) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${eventnames} gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}


let names = ["Guadalupe", "Ollie", "Aki"];
let event = "surprise";
const thankYouMessages = writeCards(names, event);
console.log(thankYouMessages);


function countDown(x) {    
    while (x>=0) {
        console.log(x);
        x--;
    }
}
