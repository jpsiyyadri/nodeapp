const url = require('url')

const myURL = new URL('http://google.com?a=1&b=2')

// serialized url
console.log(myURL.href)


// host: gets port along with host
console.log(myURL.host)

// host name
console.log(myURL.hostname)

//  serialized query
console.log(myURL.search)

//  serialized object
console.log(myURL.searchParams)

//  add params
myURL.searchParams.append('abc', '123')
console.log(myURL.searchParams)

// loo[ through params
myURL.searchParams.forEach(function(v,k){
    console.log(k,":",v)
})