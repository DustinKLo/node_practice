const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// serialized url
console.log(myUrl);
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log('');

// path name
console.log(myUrl.pathname)
// serialized query
console.log(myUrl.search);
console.log(myUrl.searchParams);
console.log(myUrl.searchParams.append('abc', 123));
console.log(myUrl.searchParams);

// loop through
myUrl.searchParams.forEach((value, name) => {
  console.log(value, name);
});