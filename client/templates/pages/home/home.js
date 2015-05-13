Template.home.helpers({
    categories: function() {
        return Categories.find({isActive: true}, {sort: {name: 1}});
    },
    name: function () {
        return this.name.toLowerCase();
    }
});