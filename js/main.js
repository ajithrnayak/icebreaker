$.getJSON("icebreakers.json", function (icebreakers) {
  var questions = icebreakers["questions"];
  createIcebreakers(questions);
});

function createIcebreakers(questions) {
  $.each(questions, function (idx, value) {
    var newdiv = $("<div>", { class: "questions", text: value });
    $("main").append(newdiv);
  });
}
