const quotes = [
        {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        },
        {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        },
        {
        quote:
            "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
        },
        {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
        },
        {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
        },
        {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
        },
        {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
        },
        {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
        },
        {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
        },
        {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
        },
    ];

const quote = document.querySelector("#quote span:first-child"); // 첫번째 span 태그안에 명언 추가
const author = document.querySelector("#quote span:last-child"); // 두번째 span 태그 안에 작가 추가

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]; // todayQuote에 Math 매서드 추가 ,
                                                                    //floor은 소수점이하 자리를 올려줌 , 
                                                                    //Math.random으로 랜덤하게 출력시킴 , 
                                                                    // quote.length를 추가 하여 quotes가 가지고 있는 인덱스값 만큼하여 출력하게함 

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
