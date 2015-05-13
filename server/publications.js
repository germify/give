Meteor.publish('categories', function() {
    return Categories.find();
});

Meteor.publish('givePages', function() {
    return givePages.find();
});