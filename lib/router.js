Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [
            Meteor.subscribe('categories'),
            Meteor.subscribe('fundraisers')
        ]
    }
});

Router.route('/', {name: 'home'});

Router.route('/start', {name: 'fundraiserStart'});

Router.route('/giveaway', {name: 'giveaway'});

Router.route('/explore/', {
    template: 'explore',
    data: function() { return Categories.find({isActive: true}); }
});

Router.route('/explore/:name', {
    name: 'explore',
    //waitOn: function() {
    //    return [
    //        Meteor.subscribe('categories', this.params.name)
    //    ];
    //},
    data: function() { return Categories.findOne(this.params._id); }
});

Router.route('/:shortId', {
    name: 'fundraiserDetails',
    //waitOn: function() {
    //    return [
    //        Meteor.subscribe('fundraisers', this.params.shortId)
    //    ];
    //},
    data: function() { return Fundraisers.find({shortId: this.params.shortId, isActive: true}).fetch()[0]; }
});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};

var loadGoogleMaps = function () {
    GoogleMaps.load({
        key: Meteor.settings.public.googleApiKey,
        libraries: 'places'
    });
    this.next();
};

Router.onBeforeAction(loadGoogleMaps, {only: ['fundraiserStart']});
Router.onBeforeAction('dataNotFound', {only: 'fundraiserItem'});