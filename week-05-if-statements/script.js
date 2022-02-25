function submitAnswerOne() {
  const answerOneInput = document.getElementById('answer-one-input');
  const answerOne = answerOneInput.value;

  if(answerOne == 'Massachusetts') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else {
    alert('Wrong! Hint: the capital of this state is Boston.');
  }
}

function submitAnswerTwo() {
  const answerTwoInput = document.getElementById('answer-two-input');
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'Mint Chocolate Chip') {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'Cookie Dough') {
    alert('A classic, but mine has more chocolate chips than cookie dough.');
  } else if(answerTwo == 'Chocolate Chip') {
    alert('Very close! Add a well known GREEN flavor to it.');
  } else {
    alert('The letter abreviation of this ice cream is M.C.C.')
  }
}

function submitAnswerThree() {
  const answerThreeInput = document.getElementById('answer-three-input');
  const answerThree = answerThreeInput.value;

  if(answerThree == 'True') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
  } else {
    alert('Wrong! Had a 50/50 shot. Try the other answer!');
  }
}

function submitAnswerFour() {
  const answerFourInput = document.getElementById('answer-four-input');
  const answerFour = answerFourInput.value;

  if(answerFour == '6') {
    alert("That's right!");
    hide('question-four');
    show('done');
  } else if(answerFour < '6') {
    alert('The answer is higher and an even number.');
  } else if(answerFour > '6') {
    alert('The answer is lower and and one less than most peoples lucky number.');
  }
}

function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
