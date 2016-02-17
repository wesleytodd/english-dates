# Get english weekdays and months from a Date

A very small utility for getting english weekday and month names from a date instance.  This module uses the `Intl` api when present, but falls back to simple arrays of the english words.  Once this kind of backward compatibility isn't needed it will be removed.

```
$ npm install --save english-dates
```

```javascript
var englishDate = require('english-dates');

var myGrandpasBirthdate = new Date(1913, 0, 1);

englishDate.day(myGrandpasBirthdate); // Wednesday
englishDate.month(myGrandpasBirthdate); // January

```
