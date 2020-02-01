// we requuire the mongoose library and assign it to the mongoose  variable
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
    // mongoose.connect('mongodb://localhost/users_test');
    mongoose.connect('mongodb://localhost:27017/Tododb', { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection
        .once('open', () => {done(); })
        .on('error', (error) => {
            console.warn('Warning', error);
});

    });

    beforeEach((done) => {
       mongoose.connection.collections.users.drop(() => {
        // Rady to run the next test!
        done();
    });
   
    });

