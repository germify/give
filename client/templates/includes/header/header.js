Template.header.rendered = function() {
    if(! this.rendered) {
        // facebook like button
        var fbLikeButton = '<div id="fb-root"></div>' +
        '<script>(function(d, s, id) {' +
            'var js, fjs = d.getElementsByTagName(s)[0];' +
            'if (d.getElementById(id)) return;' +
            'js = d.createElement(s); js.id = id;' +
            'js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=752621834768052";' +
            'fjs.parentNode.insertBefore(js, fjs);' +
        "}(document, 'script', 'facebook-jssdk'));</script>";
        $('body').prepend(fbLikeButton);
        // google +1 button
        $('body').prepend('<script src="https://apis.google.com/js/platform.js" async defer></script>');
        this.rendered = true;
    }
};

Template.header.helpers({
    activeRouteClass: function(/* route names */) {
        var args = Array.prototype.slice.call(arguments, 0);
        args.pop();

        var active = _.any(args, function(name) {
            return Router.current() && Router.current().route.getName() === name
        });

        return active && 'active';
    }
});