'use strict';

/*First I will ask the user their name and if they give me their name with their first letter as lower case, it will make their name capitalized*/
var userName = prompt('First, I\'d like to get to know you, what is your name?');
console.log(userName);
var firstLetterInName = userName.charAt(0);
console.log(firstLetterInName);

if (firstLetterInName === firstLetterInName.toLowerCase()) {
  firstLetterInName = firstLetterInName.toUpperCase();
  userName = userName.replace(userName.charAt(0), firstLetterInName);
}
console.log(firstLetterInName);
console.log(userName);

var promptQuestions = ['What is my favorite sport?', 'How many cats do I have?', 'Are you addicted to La Croix like me?', 'How old do you think I am?'];

var promptAnswers = [];

var correctAnswers = ['soccer', '2', 'y' || 'yes', '35'];

var incorrectAnswers = [!'soccer', !'2', 'n' || 'no', !'35'];

var ifCorrect = ['you got it!  Good guess!.', 'Yes, ' + userName + ' and they are both awesome!','you got it!  Good guess!.', 'DING DING DING!!'];

var ifIncorrect = ['Good guess, but my favorite sport is actually Soccer', 'Whoops, you should have said 2.' + 'Silly ', 'You are missing out.', 'You think I am a geezer, not cool'];

var askQuestions = funtion() {
  for (var i = 0; i < promptQuestions.length; i++) {
    promptAnswers[i] = prompt(promptQuestions[i]);
    if (promptAnswers[i] === correctAnswers[i].toLowerCase) {
      alert(ifCorrect[i]);
    } else {
      alert(ifIncorrect[i]);
    }
    }
}
askQuestions();

/*
/*this will display there name
alert('Hello ' + userName + '!!  Thanks for learning about me!');

/*I will ask for my favorite sport and return them a response to their answer
var favoriteSport = prompt('What is my favorite sport?');
console.log('Gregs favorite sport is:', favoriteSport);

if (favoriteSport === 'soccer') {
  alert('you got it!  Good guess!.');
} else if(favoriteSport === 'basketball'){
  alert(favoriteSport + ' is my 2nd favorite, close guess, but my favorite is soccer!');
} else {
  alert('Good guess, but my favorite sport is actually Soccer');
}

var numCats = prompt('How many cats do I have?');
console.log('Greg has this many cats:', numCats);

if (numCats === '2') {
  alert('Yes, ' + userName + ' and they are both awesome!');
} else {
  alert('Whoops, you should have said 2.' + 'Silly ' + userName);
}

var favoriteActor = prompt('Who is your favorite actor or actress?');
var favoriteActorCaps = favoriteActor.toUpperCase();
alert(favoriteActorCaps + ' IS MY FAVORITE ALSO, NO WAY!!');

var laCroix = prompt('Are you addicted to La Croix like me?');
console.log('addicted?:', laCroix);

if (laCroix === 'y' || laCroix === 'yes') {
  alert('Dude, me too...  It\'s so good');
} else {
  alert('You are missing out, ' + userName + '.');
}

var howOldAmI = prompt('How old do you think I am?');
console.log('thinks I am:', howOldAmI);

if (howOldAmI <= 34){
  alert('I am not that young');
} else if (howOldAmI === 35) {
  alert('DING DING DING!!');
} else {
  alert('You think I am a geezer, not cool ' + userName);
}
/*
