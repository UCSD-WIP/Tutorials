// Just use the same selectors as CSS to select the object!
$(document).ready(function() {
	var my_class_objects = $(".my-class");

	// For each object with class "my-class"
	my_class_objects.each(function(index) {
		// Get the text inside the object and log it
		console.log(my_class_objects.text());

		// Set the text as the index of the object
		my_class_objects.text(index.toString());
	});
});
