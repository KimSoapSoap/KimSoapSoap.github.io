const quotes = [
  {
    quote: "내가 그리는, 흘러가는 모든 것이 내 삶의 그림이다",
    author: "soapsoap",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
