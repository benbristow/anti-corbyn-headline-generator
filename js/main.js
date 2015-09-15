var phrases1 = [
  "Jeremy Corbyn will",
  "Jeremy Cor-Bin Laden urges terrorists to",
  "Crack-fuelled Corbyn tries to",
  "Kim-Yong Corbyn tries to",
  "Red Jez hatches secret plot to",
  "Labour turmoil over Corbyn plan to",
  "Cuckoo Corbyn calls on immigrants to",
  "Corbyn chaos as unions",
  "Corbyn's commie comrades",
  "Crazy Corbyn says workshy should"
];

var phrases2 = [
  "defecate on",
  "ban",
  "blow up",
  "picket",
  "kidnap",
  "tell sick jokes about",
  "stick two fingers up to",
  "burn down",
  "hurl abuse at",
  "sing vile song about"
];

var phrases3 = [
  "your savings",
  "hard-working British troops",
  "Rememberance Day poppies",
  "William and Kate",
  "your family",
  "the economy",
  "commuters",
  "cancer patients",
  "taxpayers",
  "the Union flag"
];

$(window).load(generate());

function generate() {
  var phrase = getRandomValueFromArray(phrases1) + " " + getRandomValueFromArray(phrases2) + " " + getRandomValueFromArray(phrases3);
  $("#phrase").text(phrase);
}

function getRandomValueFromArray(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}