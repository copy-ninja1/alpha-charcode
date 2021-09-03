# alpha-charcode

> Generate alphabets

## Install

```
$ npm install alpha-charcode
```

## Usage

```js
const alphabets = require("alpha-charcode");

new alphabets().call().val;
/*=> ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W" ,*"X", "Y", "Z"]
 */

new alphabets().random().val;
/**
 *["I", "L", "N", "K", "D", "U", "O", "A", "B", "Q", "T", "G", "Z", "M", "P", "Y", "F", "H", "V", "W", "C", "R", "X", "S", *"E", "J"]
 */

new alphabets().from("B", "G").val;
/**
 * [ 'B', 'C', 'D', 'E', 'F', 'G' ]
 */

new alphabets().from("B", "G").random().val;
/**
 *[ 'E', 'D', 'B', 'G', 'F', 'C' ]
 */
```

---

<div align="center">
	&hearts;
</div>
