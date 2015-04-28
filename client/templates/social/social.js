Template.social.rendered = function() {

    if (! Session.get('renderOnce')){
        $('body').prepend('<div id="fb-root"></div>');
        Session.set('renderOnce', true);
    }

    // reload facebook
    try {
        FB.XFBML.parse();
    }catch(e) {}

    // reload twitter
    try {
        twttr.widgets.load();
    }catch(e) {}

    // reload google+
    try {
        gapi.plusone.go();
    }catch(e) {}

    // reload pinterest
    try {
        window.parsePinBtns();
    }catch(e) {}

    // reload linkedin
    try {
        IN.parse();
    }catch(e) {}

};