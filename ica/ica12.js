const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', showAnswer);



const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion'

async function getQuote() {
    //console.log('Test');


    let response = await fetch(endpoint);
    
    

    const json = await response.json();
    displayQuote(json['question']);

}


function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;

}







async function showAnswer() {

    let answer = await fetch(endpoint);

    const answerText = document.querySelector('#js-answer-text').getAttribute('data-answer');   
    displayAnswer(answerText['answer']);
  
}

function displayAnswer(answer) {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}

getQuote();
