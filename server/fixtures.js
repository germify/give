// insert categories
if (Categories.find().count() === 0) {
    Categories.insert({
        createdAt: new Date,
        name: 'Animals',
        icon: 'fa fa-paw',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Community',
        icon: 'fa fa-users',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Education',
        icon: 'fa fa-graduation-cap',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Emergencies',
        icon: 'fa fa-ambulance',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Events',
        icon: 'fa fa-birthday-cake',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Faith',
        icon: 'fa fa-book',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Family',
        icon: 'fa fa-home',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Medical',
        icon: 'fa fa-plus-square',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Memorials',
        icon: 'fa fa-star',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Other',
        icon: 'fa fa-smile',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Sports',
        icon: 'fa fa-futbol-o',
        active: true
    });
    Categories.insert({
        createdAt: new Date,
        name: 'Volunteer',
        icon: 'fa fa-check',
        active: true
    });
}

// insert test fundraisers
if (Fundraisers.find().count() === 0) {
    var end = new Date();
    Fundraisers.insert({
        customUrl: 'fund1',
        category: 'Emergencies',
        startDate: new Date,
        endDate: new Date(end.setTime(end.getTime() + 6 * 86400000)),
        image: 'img/1.png',
        videoType: 'YouTube',
        videoLink: '',
        title: 'Test fundraiser 1',
        location: 'Tucson, AZ',
        currencyCode: 'USD',
        currencySymbol: '$',
        goal: 50000,
        amount: 12903,
        active: true
    });
    var end = new Date();
    Fundraisers.insert({
        customUrl: '',
        category: 'Medical',
        startDate: new Date,
        endDate: new Date(end.setTime(end.getTime() + 24 * 86400000)),
        image: 'img/2.jpg',
        videoType: 'YouTube',
        videoLink: '',
        title: 'Test fundraiser 2',
        location: 'Dallas, TX',
        currencyCode: 'USD',
        currencySymbol: '$',
        goal: 25000,
        amount: 18535,
        active: true
    });
    var end = new Date();
    Fundraisers.insert({
        customUrl: 'fund3',
        category: 'Family',
        startDate: new Date,
        endDate: new Date(end.setTime(end.getTime() + 14 * 86400000)),
        image: 'img/3.jpg',
        videoType: 'YouTube',
        videoLink: '',
        title: 'Test fundraiser 3',
        location: 'Miami, FL',
        currencyCode: 'USD',
        currencySymbol: '$',
        goal: 10000,
        amount: 8530,
        active: true
    });
    var end = new Date();
    Fundraisers.insert({
        customUrl: 'fund4',
        category: 'Sports',
        startDate: new Date,
        endDate: new Date(end.setTime(end.getTime() + 67 * 86400000)),
        image: 'img/4.jpg',
        videoType: 'YouTube',
        videoLink: '',
        title: 'Test fundraiser 4',
        location: 'New York, NY',
        currencyCode: 'USD',
        currencySymbol: '$',
        goal: 100000,
        amount: 69125,
        active: true
    });
    var end = new Date();
    Fundraisers.insert({
        customUrl: '',
        category: 'Memorials',
        startDate: new Date,
        endDate: new Date(end.setTime(end.getTime() + 36 * 86400000)),
        image: 'img/5.jpg',
        videoType: 'YouTube',
        videoLink: '',
        title: 'Test fundraiser 5',
        location: 'Las Vegas, NV',
        currencyCode: 'USD',
        currencySymbol: '$',
        goal: 5000,
        amount: 6500,
        active: true
    });
    var end = new Date();
    Fundraisers.insert({
        customUrl: 'fund6',
        category: 'Volunteer',
        startDate: new Date,
        endDate: new Date(end.setTime(end.getTime() + 46 * 86400000)),
        image: 'img/6.jpg',
        videoType: 'YouTube',
        videoLink: '',
        title: 'Test fundraiser 6',
        location: 'Portland, OR',
        currencyCode: 'USD',
        currencySymbol: '$',
        goal: 75000,
        amount: 45231,
        active: true
    });
}