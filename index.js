const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./Owncloud.postman_collection.json'),
    environment: require('./ocis.postman_environment.json'),
    insecure: true,
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
