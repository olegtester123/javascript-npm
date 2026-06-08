const fetch = require('node-fetch');

fetch('http://example.com/data')
  .then(res => res.text())
  .then(body => console.log(body));
