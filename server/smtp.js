Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(Meteor.settings.smtp.username) + ':' + encodeURIComponent(Meteor.settings.smtp.password) + '@' + encodeURIComponent(Meteor.settings.smtp.server) + ':' + Meteor.settings.smtp.port;
});

//Meteor.methods({
//    sendEmail: function (to, subject, html) {
//        this.unblock();
//
//        Email.send({
//            to: to,
//            from: Meteor.settings.smtp.fromEmail,
//            subject: subject,
//            html: html
//        });
//    }
//});
//// send email
//Meteor.call('sendEmail',
//    Meteor.settings.smtp.fromEmail,
//    'New post added to microscope',
//    "Here's the post: <a href='" + post.url + "' target='_blank'>" + post.title + "</a>");