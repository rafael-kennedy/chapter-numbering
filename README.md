# chapter-numbering
Use for chapter and section numbering. Handles roman numerals (_Chapter IV_) or consecutive lettering (_Exhibit A_).

To use:

`var numbering = require("numbering")`

The main function accepts a number or array of numbers, and a string describing the format.

Can use ruby style interpolation keys #{}

`> chapterNumbering([4, 5, 6], "Book #{I} - Section #{A}: page #{#}")
// 'Book IV - Section E: page 6'`

... or a plain string

`> chapterNumbering([4, 5, 6], "i - a - #")
// 'iv - e - 6'
`

(but watch out with that since it will catch the 'a' in chapter and the 'i' in section.)

You can also use the roman or alpha methods:

`> chapterNumbering.roman(28)
// 'XXVIII'`

`> chapterNumbering.alpha(28)
// 'AB'`
