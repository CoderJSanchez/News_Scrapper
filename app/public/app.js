$.get("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display on page
    $("#articles").prepend(
      "<h4 data-id='" +
        data[i].imageSrc +
        "'>" +
        "</h4>" +
        "<h4>" +
        data[i].title +
        "</h4>" +
        "<br />" +
        "<h6>" +
        data[i].link +
        "</h6>" +
        "<hr />"
    );
  }
});
