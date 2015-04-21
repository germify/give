//Template.home.rendered = function() {
//    if( ! this.rendered) {
//        $('body').addClass('no-padding');
//        this.rendered = true;
//    }
//};

Template.home.helpers({
    categories: function() {
        return Categories.find({active: true}, {sort: {name: 1}});
    },
    fundraisers: function() {
        return Fundraisers.find({active: true}, {sort: {startDate: 1}});
    },
    amountFormat: function () {
        return numberWithCommas(this.amount);
    },
    percentFunded: function () {
        return (this.amount / this.goal) * 100;
    },
    daysLeft: function () {
        var start = moment(new Date);
        var end = moment(this.endDate);
        var days = end.diff(start, 'days');
        return days;
    },
    categoryIcon: function () {
        var icon = Categories.find({name: this.category}).fetch();
        return icon[0].icon;
    }
});