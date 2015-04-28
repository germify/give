// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
};

// format numbers with commas
numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// random numbers
randomNumbersBetween = function(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};