var colors = ["rgba(193, 41, 51, 0.1)", "rgba(241, 211, 2, 0.1)", "rgba(0, 187, 249, 0.1)", "rgba(53, 206, 141, 0.1)", "#CFE0C3", "#F8F7FF", "#FFEEDD", "#FFF8E8"];

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

$.getJSON("icebreakers.json", function (icebreakers) {
  var questions = icebreakers["questions"];
  createIcebreakers(questions);
});

function createIcebreakers(questions) {
  $.each(questions, function (idx, value) {
    var random_color = randomNoRepeats(colors);
    var newdiv = $("<div>", {
      class: "questions",
      text: value,
      background: random_color,
    });
    newdiv.css('background-color', random_color);
    $("main").append(newdiv);
  });
}
