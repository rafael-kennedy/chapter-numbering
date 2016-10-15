# chapter-numbering

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A package for chapter and section numbering.
Handles roman numerals (_Chapter IV_) or consecutive lettering (_Exhibit A_).

## Install
Available as [npm package](https://www.npmjs.com/package/chapter-numbering)

```bash
$ npm install chapter-numbering
```
``` JavaScript
const numbering = require("chapter-numbering")
```
## Usage
### Convert Number to String

The main function accepts a number or array of numbers, and a string describing the output format.

This string can include ruby style interpolation keys #{} with I, i, A, a, #, 1.

You can also pass in a string without keys, and it will simply replace the above characters with the converted number (but watch out with that since it will catch the 'a' in chapter and the 'i' in section.)

``` JavaScript
numbering([4, 5, 6], "Book #{I} - Section #{A}: page #{#}")
// 'Book IV - Section E: page 6'

numbering([4, 5, 6], "i - a - #")
// 'iv - e - 6'
```

You can also use the roman or alpha methods by directly passing them a number:

``` JavaScript
numbering.roman(28)
// 'XXVIII'

numbering.alpha(28)
// 'AB'
```

### Convert String to number
Use the parse object's roman or alpha methods to convert Roman or Alpha to numerals:

``` JavaScript
> numbering.parse.roman('III')
// 3
> numbering.parse.alpha('A')
// 1```
