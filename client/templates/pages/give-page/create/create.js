Template.create.rendered = function() {
    Tracker.autorun(function () {
        if (GoogleMaps.loaded()) {
            $("#location").geocomplete({
                //map: "#map",
                types: ['(cities)']
                //types: ['geocode']
            });
        }
    });
};

//Template.start.events({
//    'click button': function() {
//        // Trigger geocoding request.
//        $("input").trigger("geocode");
//    }
//});