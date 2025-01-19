function makeIterator(value) {
   Object.defineProperty(value, Symbol.iterator, {
      value: function () {
         var keys = Object.keys(this);
         var i = 0;
         var obj = this;
         return {
            next: function () {
               return {
                  value: obj[keys[i++]],
                  done: i > keys.length,
               };
            },
         };
      },
      enumerable: false,
      configurable: true,
      writable: true,
   });
}

function makeGenerator(expValue) {
   Object.defineProperty(expValue, Symbol.iterator, {
      value: function* () {
         for (var key of Object.keys(expValue)) {
            yield expValue[key];
         }
      },
      enumerable: false,
      configurable: true,
      writable: true,
   });
}

module.exports = {
   makeIterator,
   makeGenerator,
};
