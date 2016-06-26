# vanillaJS-promises
Simple class to make promises using pure JavaScript.

## Usage
```
function myFunction(fireWhen){
  var myPromise = new Promise();
  
  if (fireWhen === 'done') myPromise.resolve('Fork me, I'm done!');
  else myPromise.reject('Nooooooooooo!');
  
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
