Template.fundraiserList.helpers({
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
        return Categories.find({name: this.category}).fetch()[0].icon;
    }
});