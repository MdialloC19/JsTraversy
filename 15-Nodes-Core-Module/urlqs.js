const url=require('url');
const querystring = require('querystring');



// url.parse();

const myurl='https://example.com:80/listing?id=1000&premium=true#exampleHash'

console.log(url.parse(myurl));

// url.format()


const myURL = {
  protocol: 'https:',
  hostname: 'example.com',
  port: '8080',
  pathname: '/path/to/resource',
  query:{
    id:1000,
    premium: true,
  },
  search: '?id=1001&name=test',
  hash: '#example'
};

// Check if 'www' should be included
const includeWWW = true; // Set to true if you want to include 'www'

// Add 'www' if required
if (includeWWW && !myURL.hostname.startsWith('www.')) {
  myURL.hostname = 'www.' + myURL.hostname;
}

// Format the URL using url.format
const formattedURL = url.format(myURL);

console.log(formattedURL);

// queryString 
// The querystring module in JavaScript is a built-in module that provides utilities for 
// working with URL query strings.
// It enables the conversion of JavaScript objects to query strings and vice versa.




// Convert a query string to an object
const paramsString = 'name=John&age=30&city=New York';
const parsedParams = querystring.parse(paramsString);

console.log(parsedParams);
// Output: { name: 'John', age: '30', city: 'New York' }

// Convert an object to a query string
const paramsObject = { name: 'Alice', age: 25, city: 'London' };
const parsedString = querystring.stringify(paramsObject);

console.log(parsedString);
// Output: 'name=Alice&age=25&city=London'
