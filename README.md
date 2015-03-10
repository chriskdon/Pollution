# Pollution
A Javascript library that determines how polluted the global javascript `window` namespace is.

Include the `pollution.js` as the very first script in your page. Then call `pollution.check()` after all the other code has been loaded.

### Example
```
  pollution.check();                      // To check everything
  pollution.check(['$', 'jQuery', 'etc']) // To exclude items

  // The results will be output to the javascript console.
```
