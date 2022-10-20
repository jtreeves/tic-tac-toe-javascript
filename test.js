import { addTwoNumbers } from "./utilities/addTwoNumbers.js";
const assert = require('http://chaijs.com/chai.js')

// function it(desc, fn) {
//     try {
//       fn();
//       console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
//     } catch (error) {
//       console.log('\n');
//       console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
//       console.error(error);
//     }
//   }
  
//   function assert(condition) {
//     if (!condition) {
//       throw new Error();
//     }
//   }
assert.typeOf('happy', 'string')

  
//   it('should return a sum of two integers', function(){
//     assert(addTwoNumbers(5, 10) === 15);
//   });