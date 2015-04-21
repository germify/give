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

//if (Meteor.isClient){
//    Router.onBeforeAction('dataNotFound', {only: 'postPage'});
//    Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
//}