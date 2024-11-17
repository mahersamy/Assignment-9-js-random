




var arrOfQuotes=[
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston S. Churchill" },
];



var tempIndex;

function randomNumOfRange(max,min){
    return Math.floor(Math.random() * (max - min) + min);
}


function newQuote(){
    var random=randomNumOfRange(arrOfQuotes.length,0);
    while(random === tempIndex){
        random=randomNumOfRange(arrOfQuotes.length,0);
    }
    tempIndex=random;

    console.log(random);
    ;

    document.getElementById("quote").innerHTML=arrOfQuotes[random].text;
    document.getElementById("author").innerHTML=arrOfQuotes[random].author;
}











