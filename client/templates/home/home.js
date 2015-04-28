//Template.home.rendered = function() {
//    if( ! this.rendered) {
//        $('body').addClass('no-padding');
//        this.rendered = true;
//    }
//};

Template.home.helpers({
    fundraisers: function() {
        return Fundraisers.find({isActive: true}, {sort: {startDate: 1}});
    },
    amountFormat: function () {
        return numberWithCommas(this.currentAmount);
    },
    percentFunded: function () {
        return (this.currentAmount / this.goalAmount) * 100;
    },
    daysLeft: function () {
        var start = moment(new Date);
        var end = moment(this.endDate);
        var days = end.diff(start, 'days');
        return days;
    },
    categoryIcon: function () {
        var category = Categories.find({name: this.category}).fetch();
        return category[0].icon;
    },
    customUrl: function () {
        var fundraiser = Fundraisers.findOne(this._id);
        var customUrl = fundraiser.customUrl;
        if (customUrl === '') {
            customUrl = fundraiser._id;
        }
        return customUrl;
    }
});