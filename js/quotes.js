const quotes = [
    {quote: "Even with nobody lookging, I do my Worker. Even with nobody acknowledging me, I pursue my path.",
    author: "Nohae Park"},
    {quote: "Don't be sad, don't give up, because you think you've taken the wrong path. In life there is no wrong path. Every new path is found by taking steps along the wrong path.",
    author: "Nohae Park"},
    {quote: "Not doing what is wrong. Doing what is right. Doing what should be done.",    
    author: "Nohae Park"},
    {quote: "Do not love work, make love work.",
    author: "Nohae Park"},
    {quote: "Becoming a self does not mean, having self-confidence.",
    author: "Nohae Park"},
    {quote: "If we cannot see what lies ahead, it is not because the darkness has grown deeper. Our eyes have been blinded by too bright a light.",
    author: "Nohae Park"},
    {quote: "We are all children come from the stars. A star is shining within you.",
    author: "Nohae Park"},
    {quote: "No matter how short, life is a matter of living eternity. Eternity is not a matter of 'having no end', but of 'living fully now'.",
    author: "Nohae Park"},
    {quote: "Don't be afraid. I am with you. Don't tremble with fear. I am your God. I will make you strong, as I protect you with my arm and give you victories.",
    author: "Isaiah 41:10"},
    {quote: "I am with you always, even to the end of the age.",
    author: "Matthew 28:20"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

