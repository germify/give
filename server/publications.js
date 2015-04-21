Meteor.publish('categories', function() {
    return Categories.find();
});

Meteor.publish('fundraisers', function() {
    return Fundraisers.find();
});