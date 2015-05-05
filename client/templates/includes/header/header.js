Template.header.rendered = function() {
    $('body').addClass('text-lowercase');
};

Template.header.helpers({
    activeRouteClass: function(/* route names */) {
        try {
            var args = Array.prototype.slice.call(arguments, 0);
            args.pop();

            var active = _.any(args, function(name) {
                return Router.current() && Router.current().route.getName() === name
            });

            return active && 'active';
        }catch(e) {}
    }
});