var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var incorrect = [];


var questions = [
  ['What is the last name of the major character that died on the Season 5 finale of Game of Thrones?', 'SNOW'],
  ['Which character is currently transitioning in to becoming "no one"? Provide first name only', 'ARYA'],
  ['What is the acronym for the book series on which the HBO series Game of Thrones is based?', 'ASOIAF'],
  ['What season (give the number) of Game of Thrones aired in 2016?', '6'],
  ['What animal name is disgraced Kingsguard knight Sandor Clegane also known by?', 'HOUND'],
  ['What "devilish" nickname is Tyrion Lannister also known by?', 'IMP'],
  ['Daenarys Targaryen (first of her name, breaker of chains, yadda yadda yadda...) is the mother of what?', 'DRAGONS'],
  ['What nickname is Lord Petyr Baelish also known by?', 'LITTLEFINGER'],
  ['What northern castle is the home of the Stark family?', 'WINTERFELL'],
  ['What is the eastern continent in the world of Game of Thrones called? Hint: it is not Westeros', 'ESSOS']
];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList (arr){
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1)
  {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1){
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = response.toUpperCase();
  if (response === answer){
    correctAnswers += 1;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions incorrect:</h2>';
html += buildList(incorrect);

print(html);