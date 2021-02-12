const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com:3000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href + "\n");
console.log(myUrl.toString() + "\n" );

// Host (root domain)
console.log(myUrl.host + "\n" );

// Hostname (does not get port)
console.log(myUrl.hostname + "\n" );

// Pathname
console.log(myUrl.pathname + "\n" );

// Serialized query
console.log(myUrl.search + "\n" );

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
