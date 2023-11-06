var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
  "There was a violent thunderstorm outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: is made of jello, and it was a frigid day.";

var insertX = ["Phil DiStefano", "Jack", "my grandma's ferret"];

var insertY = ["Wichita, KS", "IKEA", "the Bass Pro Shop Pyramid"];

var insertZ = ["froze and cracked into a million pieces", "burst into shards of ice", "slowly pulled their skin off"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
 
  if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
    var newStory = newStory.replace('94 farenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);

  }

 
  story.textContent = newStory;
  story.style.visibility = 'visible';
}