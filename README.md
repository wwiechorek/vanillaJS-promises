# vanillaJS-promises
Simple class to make promises using pure JavaScript.

## Usage
```javascript
function myFunction(fireWhen){
  // Start the promises class
  var myPromise = new Promise();
  
  // Set which function should do the callback
  if (fireWhen === 'done')
    myPromise.resolve('Fork me, I'm done!');
  else
    myPromise.reject('Nooooooooooo!');
  
  // Return the functions for done() and fail()
  return myPromise;
}

// This example will work only with the done function
myFunction('done')
  .done(function(message){ alert(message); })
  .fail(function(message){ alert(message); });
  
// This example will work only with the fail function
myFunction('ehhh...')
  .done(function(message){ alert(message); })
  .fail(function(message){ alert(message); });
```

## TODO
- [x] Make it work
- [ ] Make it work with multiple callbacks
- [ ] Make it work considering the function return

## License
MIT
