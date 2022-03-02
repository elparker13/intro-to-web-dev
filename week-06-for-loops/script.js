const speech = `Clarke: Today, water and shelter. Tomorrow, food, ok? Picasso, come! Picasso? Please come back! I don't want to be alone. I don't want to be alone.
Lexa: You're not.
Clarke: What do you want?
Lexa: To explain.
Clarke: There's no need. I get it, I bear it so they don't have to again.
Lexa: Such a curious species. You've added so much to us already. I'm glad to been wrong about you.
Clarke: Wait. Does that mean you are here to take me with you?
Lexa: No. You can never join us, Clarke. Your actions must have a cost.
Clarke: Just me? Am I the only human being who has ever sinned?
Lexa: Of course not, but you are the only test subject from any species anywhere in the universe since the dawn of time who committed murder during a test.
Clarke: I'd do it again.
Lexa: Madi knew you would say that.
Clarke: Madi is with you?
Lexa: In a matter of speaking, yes. Her consciousness has joined ours. She is at peace. She will never feel pain, she will never die. She knew that living here without anyone her own age to love is something you wouldn't have wanted for her, even if it meant you being alone. I suppose that choice was made easier with the realization you wouldn't be.
Clarke: Transcendence is a choice? You can choose to come back?
Lexa: Of course, though until now no one ever had. There won't be offspring, and they won't join us when they die. None of them seem to care. A curious species indeed.
*Clarke runs towards her friends and hugs Raven, Murphy, Emori, Octavia, Echo, Jackson, Hope, and Niylah*`;


const speechPunctuationRemoved = speech.replace(',', '').replace('.', '').replace('?', '').replace(':', '');

const wordsArray = speechPunctuationRemoved.split(/\s+/);

function displayShortWords(){
  const shortWordsElement = document.getElementById('short-words');

  for(let i = 0; i < wordsArray.length; i++){
    const word = wordsArray[i];

    if(word.length < 4){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

function displayLetterEWords(){
  const letterWordsElement = document.getElementById('letter-words');

  for(let word of wordsArray){
    if(word.startsWith('e')){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      letterWordsElement.appendChild(wordElement);
    }
  }
}


function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(word.length > 8) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}


function displayUncommonWords(){
  let commonWords = ['the' , 'be' , 'to' , 'of' , 'and' , 'a' , 'in' , 'that' , 'have' , 'i' ,
  'it' , 'for' , 'not' , 'on' , 'with' , 'as' , 'you' , 'do' , 'at'];

  let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray){
    if(!commonWords.includes(word.toLowerCase())){
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      uncommonWordsElement.appendChild(wordElement);
    }
  }
}

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayShortWords();

  displayLetterEWords();

  displayLongWords();

  displayUncommonWords();

}
