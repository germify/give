Router.configure({
    //layoutTemplate: 'comingSoon'
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [
            Meteor.subscribe('categories'),
            Meteor.subscribe('givePages')
        ]
    }
});

Router.route('/', {name: 'home'});

Router.route('/create', {name: 'create'});

Router.route('/learn', {name: 'learn'});

Router.route('/gifts', {name: 'gifts'});

Router.route('/explore', {
    template: 'explore',
    data: function() { return Categories.find({isActive: true}); }
});

//Router.route('/explore/:name', {
//    name: 'explore',
//    //waitOn: function() {
//    //    return [
//    //        Meteor.subscribe('categories', this.params.name)
//    //    ];
//    //},
//    data: function() { return Categories.findOne(this.params._id); }
//});

Router.route('/:shortId', {
    name: 'givePageDetails',
    //waitOn: function() {
    //    return [
    //        Meteor.subscribe('givePages', this.params.shortId)
    //    ];
    //},
    data: function() { return givePages.find({shortId: this.params.shortId, isActive: true}).fetch()[0]; }
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

Router.onBeforeAction(loadGoogleMaps, {only: ['create']});
//Router.onBeforeAction('dataNotFound', {only: 'givePageItem'});