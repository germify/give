Meteor.startup(function() {
    // insert categories
    if (Categories.find().count() === 0) {
        Categories.insert({
            createdAt: new Date(),
            name: 'Animals',
            icon: 'fa fa-paw',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Community',
            icon: 'fa fa-users',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Education',
            icon: 'fa fa-graduation-cap',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Emergencies',
            icon: 'fa fa-ambulance',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Events',
            icon: 'fa fa-birthday-cake',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Faith',
            icon: 'fa fa-book',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Family',
            icon: 'fa fa-home',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Medical',
            icon: 'fa fa-plus-square',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Memorials',
            icon: 'fa fa-star',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Other',
            icon: 'fa fa-smile-o',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Sports',
            icon: 'fa fa-futbol-o',
            isActive: true
        });
        Categories.insert({
            createdAt: new Date(),
            name: 'Volunteer',
            icon: 'fa fa-check',
            isActive: true
        });
    }

    // insert test fundraisers
    if (Fundraisers.find().count() === 0) {
        var end = new Date();
        Fundraisers.insert({
            shortId: ShortId.generate(),
            category: 'Emergencies',
            organizer: 'Organizer Name',
            beneficiary: 'Beneficiary Name',
            startDate: new Date(),
            endDate: new Date(end.setTime(end.getTime() + (Math.floor(Math.random() * 60) + 1) * 86400000)),
            image: 'img/1.png',
            videoType: 'YouTube',
            videoLink: '',
            title: 'Test fundraiser 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: 'Tucson, AZ, United States',
            currencyCode: 'USD',
            currencySymbol: '$',
            goalAmount: 50000,
            currentAmount: 12903,
            isActive: true
        });
        var end = new Date();
        Fundraisers.insert({
            shortId: 'helpbill',
            category: 'Medical',
            organizer: 'Organizer Name',
            beneficiary: 'Beneficiary Name',
            startDate: new Date(),
            endDate: new Date(end.setTime(end.getTime() + (Math.floor(Math.random() * 60) + 1) * 86400000)),
            image: 'img/2.jpg',
            videoType: 'YouTube',
            videoLink: '',
            title: 'Test fundraiser 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: 'Dallas, TX, United States',
            currencyCode: 'USD',
            currencySymbol: '$',
            goalAmount: 25000,
            currentAmount: 18535,
            isActive: true
        });
        var end = new Date();
        Fundraisers.insert({
            shortId: ShortId.generate(),
            category: 'Family',
            organizer: 'Organizer Name',
            beneficiary: 'Beneficiary Name',
            startDate: new Date(),
            endDate: new Date(end.setTime(end.getTime() + (Math.floor(Math.random() * 60) + 1) * 86400000)),
            image: 'img/3.jpg',
            videoType: 'YouTube',
            videoLink: '',
            title: 'Test fundraiser 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: 'Miami, FL, United States',
            currencyCode: 'USD',
            currencySymbol: '$',
            goalAmount: 10000,
            currentAmount: 8530,
            isActive: true
        });
        var end = new Date();
        Fundraisers.insert({
            shortId: ShortId.generate(),
            category: 'Sports',
            organizer: 'Organizer Name',
            beneficiary: 'Beneficiary Name',
            startDate: new Date(),
            endDate: new Date(end.setTime(end.getTime() + (Math.floor(Math.random() * 60) + 1) * 86400000)),
            image: 'img/4.jpg',
            videoType: 'YouTube',
            videoLink: '',
            title: 'Test fundraiser 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: 'New York, NY, United States',
            currencyCode: 'USD',
            currencySymbol: '$',
            goalAmount: 100000,
            currentAmount: 69125,
            isActive: true
        });
        var end = new Date();
        Fundraisers.insert({
            shortId: 'myfundraiser',
            category: 'Memorials',
            organizer: 'Organizer Name',
            beneficiary: 'Beneficiary Name',
            startDate: new Date(),
            endDate: new Date(end.setTime(end.getTime() + (Math.floor(Math.random() * 60) + 1) * 86400000)),
            image: 'img/5.jpg',
            videoType: 'YouTube',
            videoLink: '',
            title: 'Test fundraiser 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: 'Las Vegas, NV, United States',
            currencyCode: 'USD',
            currencySymbol: '$',
            goalAmount: 5000,
            currentAmount: 6500,
            isActive: true
        });
        var end = new Date();
        Fundraisers.insert({
            shortId: ShortId.generate(),
            category: 'Volunteer',
            organizer: 'Organizer Name',
            beneficiary: 'Beneficiary Name',
            startDate: new Date(),
            endDate: new Date(end.setTime(end.getTime() + (Math.floor(Math.random() * 60) + 1) * 86400000)),
            image: 'img/6.jpg',
            videoType: 'YouTube',
            videoLink: '',
            title: 'Test fundraiser 6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: 'Portland, OR, United States',
            currencyCode: 'USD',
            currencySymbol: '$',
            goalAmount: 75000,
            currentAmount: 45231,
            isActive: true
        });
    }
});