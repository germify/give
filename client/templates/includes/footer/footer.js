Template.footer.helpers({
    footerYear: function () {
        return (new Date).getFullYear();
    }
});

Template.footer.events({
    'click .modalsocial': function () {

        var tmpl = 'social';
        var div = document.createElement('div');
        var renderHtml = Blaze.render(Template[tmpl], div);
        var htmlCode = div.innerHTML;

        bootbox.dialog({
            className: "social-modal",
            message: htmlCode,
            title: "give ~ like ~ share ~ follow",
            size: "medium",
            buttons: {
                success: {
                    label: "Close"
                }
            },
            onEscape: function() {},
            callback: function(){
                Blaze.remove(renderHtml);
            }
        });

    }
});