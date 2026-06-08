// CVE-2021-23438

var mu = require('mongoose/lib/utils');
var val = mu.getValue("/foo", {}, null);dadad
console.log("value is "+val);