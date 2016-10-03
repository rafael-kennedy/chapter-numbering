# chapter-numbering

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Use for chapter and section numbering. Handles roman numerals (_Chapter IV_) or consecutive lettering (_Exhibit A_).

## Install
Available as [npm package](https://www.npmjs.com/package/chapter-numbering)

```
npm install chapter-numbering
```
``` JavaScript
const numbering = require("chapter-numbering")
```

## Convert Number to String

The main function accepts a number or array of numbers, and a string describing the format.

Can use ruby style interpolation keys #{}

``` JavaScript
numbering([4, 5, 6], "Book #{I} - Section #{A}: page #{#}")
// 'Book IV - Section E: page 6'
```

... or a plain string

``` JavaScript
numbering([4, 5, 6], "i - a - #")
// 'iv - e - 6'
```

(but watch out with that since it will catch the 'a' in chapter and the 'i' in section.)

You can also use the roman or alpha methods:

``` JavaScript
numbering.roman(28)
// 'XXVIII'

numbering.alpha(28)
// 'AB'
```

## Convert String to number
Use the parse object's roman or alpha methods:

``` JavaScript
> numbering.parse.roman('III')
// 3
> numbering.parse.alpha('A')
// 1```
