var colors = [
  "rgba(193, 41, 51, 0.1)",
  "rgba(241, 211, 2, 0.1)",
  "rgba(0, 187, 249, 0.1)",
  "rgba(53, 206, 141, 0.1)",
  "#CFE0C3",
  "#F8F7FF",
  "#FFEEDD",
  "#E8FCC2",
  "#F5F3BB"
];

$.getJSON("icebreakers.json", function (icebreakers) {
  var questions = icebreakers["questions"];
  createIcebreakers(questions);
});

function createIcebreakers(questions) {
  var bgColors = [];
  for (var i = 0; i < questions.length; i++) {
    bgColors.push(colors[i % colors.length]);
  }
  $.each(questions, function (index, value) {
    var random_color = bgColors[index];
    var newdiv = $("<div>", {
      class: "questions",
      text: value,
      background: random_color,
    });
    newdiv.css("background-color", random_color);
    $("main").append(newdiv);
  });
}
