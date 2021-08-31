fetch("")
.then(function (headers) {
console.log(headers);
return headers.json();})

.then(function (data ))