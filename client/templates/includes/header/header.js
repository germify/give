Template.header.rendered = function() {
    $('body').addClass('text-lowercase');
};

Template.header.helpers({
    headerAlert: function () {
        return "We opened our doors in May 2015. <a href='#'>tell us what you think</a>";
    },
    headerAlertIsDisplayed: function () {
        return false;
    },
    categories: function() {
        return Categories.find({isActive: true}, {sort: {name: 1}});
    },
    name: function () {
        return this.name.toLowerCase();
    }
});

Template.header.events({
    'click #header-alert-close': function () {
        $('#header-alert').hide();
    }
});