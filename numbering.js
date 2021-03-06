U = function (num, str) {
  // num = number or array of values to convert
  // str = string with format to output
  var re = /\#\{([AaRrIi\#1])\}/g
  var replacer = function (match, cg) {
    var n = num.shift()
    if (!n) {
      return ''
    }
    switch (cg) {
      case 'I':
      case 'R':
        return U.roman(n)
        break
      case 'i':
      case 'r':
        return U.roman(n).toLowerCase()
        break
      case 'A':
        return U.alpha(n)
        break
      case 'a':
        return U.alpha(n).toLowerCase()
        break
      case '#':
      case '1':
        return n
        break
      default:

    }
  }
  if (typeof num === 'number') {
    num = [num]
  }
  if (re.test(str)) {
    return str.replace(re, replacer)
  } else {
    return str.replace(/([iIRraA\#1])/g, replacer)
  }
}

U.alpha = function (num) {
  num = Number((+num).toFixed(0))
  if (num < 27) {
    if (num === 0) {return 'z'}
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num - 1]
  } else {
    var rem = num % 26
    var mult = (num / 26).toFixed(0)
    return U.alpha(mult) + U.alpha(rem)
  }
}

U.roman = function (num) {
  var neg = false
  if (num === 0) {return ''}
  if (num < 0) {
    num = 0 - num
    neg = true
  }
  var out = []
  if (!+num)
    return false
  num = num + ''
  key = [
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  ]
  for (var i = 0; i < num.length && i <= 3; i++) {
    if (i === 3) {
      var d = (+num.slice(0, num.length - 3)) + 1
      out.push(new Array(d).join('M'))
    } else {
      var d = +num[num.length - i - 1]
      out.push(key[i][d])
    }
  }
  out = out.reverse().join('')
  if (neg) {
    return out.toLowerCase()
  } else {
    return out
  }
}

U.parse = {
  alpha: function (str) {
    str = str.split('').reverse()
    var alph = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var out = 0
    for (var i = 0; i < str.length; i++) {
      out += alph.indexOf(str[i].toUpperCase()) * Math.pow(26, i)
    }
    return out
  },
  roman: function (str) {
    if (str !== str.toUpperCase()) {
      str = str.toUpperCase()
      var neg = true
    }
    var r = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    var a = [1, 5, 10, 50, 100, 500, 1000]
    var lvl = 0
    var out = 0
    var neg = false
    var mult = 1
    str = str.split('').reverse()
    for (var i = 0; i < str.length; i++) {
      var c = str[i]
      var cin = r.indexOf(c)
      mult = (cin < lvl) ? -1 : 1
      lvl = cin
      out += (a[cin]) * mult
    }
    if (neg) {
      return out * -1
    } else {
      return out
    }
  }
}

module.exports = U
