const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.get('/users', (req, res) => {
	res.send([
		{
			name: 'Taras',
			age: 25
		},
		{
			name: 'Oleg',
			age: 29
		},
		{
			name: 'Alex',
			age: 30
		},
	])
});

app.listen(3000);

module.exports.app = app;
