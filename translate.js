const inputTextHere = document.querySelector('.inputtext');
const translateButton = document.querySelector('.translatebutton');
const output = document.querySelector('.translation');

//url
const sourceURL = 'https://api.funtranslations.com/translate/minion.json';

//processing part

function getURL (text) {
    return sourceURL + "?" + "text=" + text;
}

function error () {
    alert('Something Went Wrong!');
}

function translateToBanana () {
    fetch(getURL(inputTextHere.value))
    .then(reply => reply.json())
    .then(dataFound => {
        let translatedSentence = dataFound.contents.translated;
        output.innerHTML = translatedSentence;
    })
    .catch(error());
}

translateButton.addEventListener('click', translateToBanana);