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
    console.log('Error with the server!');
    alert('Something went wrong!');
}

function translateToBanana () {
    let callback = inputTextHere.value;
    fetch(getURL(callback))
    .then(reply => reply.json())
    .then(data => {
        let translatedSentence = data.contents.translated;
        output.innerHTML = translatedSentence;
    })
    .catch(error);
}

translateButton.addEventListener('click', translateToBanana);
