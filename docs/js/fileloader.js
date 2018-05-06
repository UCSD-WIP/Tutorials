$(document).ready(function() {
  $(".step").each(function(index) {
    var step = $(this);

    // For loading and displaying the code associated with the step
    var language = step.attr("data-content-language");
    var filetype = step.attr("data-content-filetype");
    var pre = $("<pre><code></code></pre>");
    var code = pre.children("pre > code");

    // Creating the text data for the step
    var header = $("<h2><a></a></h2>");
    var header_a = header.children("h2 > a");
    var subtitle = $("<p class='subtitle'></p>");
    var subtitle_text =  step.attr("data-content-subtitle");

    // Populate text data
    header.attr("id", "'step" + (index + 1).toString() + "'");
    header_a.attr("href", "step" + (index + 1).toString() + "." + filetype);
    header_a.text("Step " + (index + 1).toString());
    subtitle.text(subtitle_text);

    step.append(header);
    step.append(subtitle);

    // Load the code, format, and display it
    $.get("step" + (index + 1).toString() + "." + filetype, function(data) {
      code.addClass("language-" + language);
      code.text(data);
      step.append(pre);
      Prism.highlightElement(code[0]);
    });
  });
});
