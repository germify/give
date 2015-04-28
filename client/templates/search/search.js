Template.search.helpers({
    categories: function() {
        return Categories.find({isActive: true}, {sort: {name: 1}});
    }
});